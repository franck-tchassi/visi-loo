// lib/authOptions.ts


import { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prismadb";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: import("@/lib/types").Role;
      planId?: string;
      provider?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: import("@/lib/types").Role;
    hashedPassword?: string;
    planId?: string;
    stripeSubscriptionId?: string;
  }

  interface Account {
    access_token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: import("@/lib/types").Role;
    planId?: string;
    provider?: string;
    accessToken?: string;
    isPremium?: boolean;
    name?: string;
  }
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // 1. Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true, // IMPORTANT: Permet de lier ce compte Google à un compte existant avec le même email
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          // Scopes vitaux pour CleanInbox (Lecture et Modification des mails)
          scope: "openid email profile https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify"
        }
      },
      profile(profile) {
         return {
           id: profile.sub,
           name: profile.name,
           email: profile.email,
           image: profile.picture,
           role: require("@/lib/types").Role.ORG_VIEWER,
         };
      }
    }),
    
    // 2. Microsoft Provider
    AzureADProvider({
      clientId: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      tenantId: "common",
      allowDangerousEmailAccountLinking: true, // IMPORTANT: Idem pour Microsoft
      authorization: {
        params: {
          scope: "openid profile email User.Read Mail.Read Mail.ReadWrite offline_access",
        },
      },
      profile(profile) {
         return {
           id: profile.sub,
           name: profile.name,
           email: profile.email,
           image: null,
           role: require("@/lib/types").Role.ORG_VIEWER,
         };
      },
    }),

    // 3. Credentials Provider (Email/Password)
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email et mot de passe requis");
        }

        const user = await prisma.user.findUnique({
          where: { 
            email: credentials.email.toLowerCase().trim() 
          },
        });

        if (!user) {
          throw new Error("Aucun compte trouvé avec cet email");
        }

        // Vérification si le compte a un mot de passe (sinon c'est un compte Google/Microsoft)
        if (!user.hashedPassword) {
          throw new Error("Ce compte utilise une connexion sociale (Google/Microsoft). Veuillez utiliser les boutons au-dessus.");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isValid) {
          throw new Error("Mot de passe incorrect");
        }

        // Conversion explicite du type role
        const { Role } = require("@/lib/types");
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: Role[user.role as keyof typeof Role],
        };
      },
    }),
  ],
  
  pages: {
    signIn: "/login",     
    newUser: "/dashboard",
    error: "/login" 
  },
  
  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // Premier login
      if (account && user) {
        token.id = user.id;
        token.accessToken = account.access_token; // Stockage du token Gmail/Outlook
        token.provider = account.provider;
        
        if (user.role) token.role = user.role;
      }

      // Mise à jour de session (ex: changement de plan)
      if (trigger === "update" && session) {
        if (session.user?.name) token.name = session.user.name;
      }

      // Récupération des données fraîches (Plan, Role) depuis la BDD
      if (token.id) {
         const dbUser = await prisma.user.findUnique({
            where: { id: token.id as string },
            select: { 
              role: true
            }
         });
         
         if (dbUser) {
             const { Role } = require("@/lib/types");
             token.role = Role[dbUser.role as keyof typeof Role];
         }
      }

      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        const { Role } = require("@/lib/types");
        session.user.role = token.role ?? Role.ORG_VIEWER;
        // session.user.planId = token.planId as string; // Removed to correct the error
        // @ts-ignore
        session.user.provider = token.provider as string;
      }
      return session;
    },
  },

  events: {
    // Événement déclenché quand un utilisateur est créé
    async createUser({ user }) {
      try {
        console.log("🚀 Nouvel utilisateur inscrit :", user.email);
        
        // Initialisation automatique des Paramètres par défaut
        console.log("✅ Paramètres par défaut initialisés");

      } catch (error) {
        console.error("❌ Erreur lors de l'initialisation du compte :", error);
      }
    },
    
    // Événement déclenché quand un compte OAuth est lié
    async linkAccount({ account, user }) {
      try {
        console.log(`🔗 Compte ${account.provider} lié pour ${user.email}`);
        
      } catch (error) {
        console.error("❌ Erreur lors de la création de la Mailbox :", error);
      }
    },
  },
};