
"use client";

import reviewAllAnimation from '../../../public/lottie/review_all.json'; // Import your Lottie JSON file
import LottieAnimation from '../LottieAnimation';
import React from 'react';
import { 
  Globe, Star, Zap, Map, 
  LayoutDashboard, ListChecks, Users, 
  Bot, MessageSquare, Megaphone,
  BarChart, Shield, ArrowDown
} from 'lucide-react';

import Image from 'next/image'; // Import Image from next/image


// Icône personnalisée fournie par l'utilisateur
const CustomReviewTimelineIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 14 14" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M9.568 1.255a.466.466 0 0 1 .864 0l.587 1.433l1.593.14c.416.036.578.56.255.824l-.947.778a.47.47 0 0 0-.16.46l.314 1.452a.466.466 0 0 1-.715.486L10 5.92l-1.359.91a.466.466 0 0 1-.715-.487L8.24 4.89a.47.47 0 0 0-.16-.459l-.947-.778a.466.466 0 0 1 .255-.825l1.593-.14zM.983 6.37l.692-.043a8 8 0 0 1 2.448.227l1.16.292a1.32 1.32 0 0 1 .99 1.416v0c-.078.765-.79 1.3-1.546 1.166L3.622 9.23l3.897.699l4.037-.958a1.24 1.24 0 0 1 1.482.887v0c.16.603-.153 1.23-.73 1.465l-3.23 1.311a6.93 6.93 0 0 1-4.918.113L.813 11.562" 
      stroke={color} 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);


interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  emoji: string;
  color: string;
}

const featureData: FeatureItem[] = [
  { 
    badge: "Presence Management", 
    icon: <Globe />, 
    emoji: "🌍",
    title: "Soyez présent partout", 
    description: "Diffusez automatiquement vos informations (horaires, adresse, téléphone) sur Google, Facebook, Waze, Apple Plans et plus de 20 annuaires essentiels. Garantissez des données fiables partout.", 
    color: "bg-blue-600"
  },
  { 
    badge: "Review Management", 
    icon: <CustomReviewTimelineIcon />,
    emoji: "⭐",
    title: "Gérez votre réputation", 
    description: "Centralisez, filtrez et répondez à tous vos avis Google et Facebook depuis une interface unique. Utilisez nos modèles de réponses pour gagner du temps et améliorer votre e-réputation.", 
    color: "bg-orange-500"
  },
  { 
    badge: "Review Booster", 
    icon: <Zap />, 
    emoji: "🚀",
    title: "Boostez vos avis positifs", 
    description: "Sollicitez vos clients satisfaits par SMS ou QR Code juste après leur visite. Augmentez votre volume d'avis positifs et grimpez dans les résultats de recherche locale.", 
    color: "bg-yellow-500"
  },
  { 
    badge: "Messages Centralisés", 
    icon: <MessageSquare />, 
    emoji: "💬",
    title: "Une boîte de réception unique", 
    description: "Ne ratez plus aucune opportunité. Répondez aux messages provenant de Google Business Profile, Facebook Messenger et Instagram Direct depuis une boîte de réception unifiée.", 
    color: "bg-indigo-600"
  },
  { 
    badge: "Social Media Posting", 
    icon: <Megaphone />, 
    emoji: "📱",
    title: "Animez vos réseaux locaux", 
    description: "Planifiez et multidiffusez vos actualités, offres et événements sur Google Posts, Facebook et Instagram simultanément. Maintenez une activité régulière sans effort.", 
    color: "bg-pink-600"
  },
  { 
    badge: "Store Locator", 
    icon: <Map />, 
    emoji: "📍",
    title: "Guidez vos clients", 
    description: "Intégrez une carte interactive sur votre site web. Guidez vos clients vers le point de vente le plus proche et boostez le SEO de votre site vitrine avec des pages locales optimisées.", 
    color: "bg-emerald-600"
  },
  { 
    badge: "Réponses par IA", 
    icon: <Bot />, 
    emoji: "🤖",
    title: "L'IA au service de vos avis", 
    description: "Laissez notre Assistant IA (Léo) rédiger des réponses personnalisées, empathiques et sans fautes à vos avis clients en quelques secondes. Gardez le contrôle avant publication.", 
    color: "bg-purple-600"
  },
  { 
    badge: "Rapports & Analytics", 
    icon: <BarChart />, 
    emoji: "📊",
    title: "Mesurez votre succès", 
    description: "Suivez votre ROI avec précision : évolution du nombre de vues, clics vers le site, appels générés et demandes d'itinéraires. Exportez vos rapports en PDF ou Excel.", 
    color: "bg-blue-700"
  },
  { 
    badge: "Tableau de Bord Multi-sites", 
    icon: <LayoutDashboard />, 
    emoji: "🏢",
    title: "Pilotez votre réseau", 
    description: "Pilotez 1 ou 1000 établissements avec la même simplicité. Comparez les performances de vos points de vente, gérez les droits utilisateurs et harmonisez votre image de marque.", 
    color: "bg-slate-700"
  },
  { 
    badge: "Protection de marque", 
    icon: <Shield />, 
    emoji: "🛡️",
    title: "Sécurisez votre image", 
    description: "Détectez et signalez les doublons ou les fiches non revendiquées qui nuisent à votre image. Gardez le contrôle exclusif sur vos données d'entreprise.", 
    color: "bg-red-600"
  },
  { 
    badge: "Attributs & Services", 
    icon: <ListChecks />, 
    emoji: "✨",
    title: "Optimisez vos services", 
    description: "Mettez en avant vos spécificités (Click & Collect, Livraison, Accessibilité) grâce à la gestion avancée des attributs Google. Améliorez votre pertinence sur les recherches vocales.", 
    color: "bg-cyan-600"
  },
  { 
    badge: "Gestion d'équipes", 
    icon: <Users />, 
    emoji: "👥",
    title: "Collaborez en sécurité", 
    description: "Définissez des rôles précis (Administrateur, Manager local, Lecteur) pour vos collaborateurs. Validez les réponses aux avis avant publication pour une sécurité maximale.", 
    color: "bg-teal-600"
  }
];

const VisualMockup: React.FC<{ color: string, emoji: string, badge: string }> = ({ color, emoji, badge }) => {
  if (badge === "Review Management") {
    return (
      <div className="relative w-full h-full flex items-center justify-center ">
        <Image
          src="/features/avis.png"
          alt="Review Management"
          width={520} // Adjusted to fit the max-w-[320px] container
          height={520} // Adjusted to maintain aspect ratio (16/11)
          className="object-contain w-full h-full"
        />
      </div>
    );
  }
  if (badge === "Store Locator") {
    return (
      <div className="relative w-full h-full flex items-center justify-center ">
        <Image
          src="/features/atablisment.png"
          alt="Store Locator"
          width={520} // Adjusted to fit the max-w-[320px] container
          height={520} // Adjusted to maintain aspect ratio (16/11)
          className="object-contain w-full h-full"
        />
      </div>
    );
  }
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 bg-slate-50">
      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-500`}>
        <span className="text-2xl">{emoji}</span>
      </div>
      <div className="absolute top-4 right-4 w-20 h-1.5 bg-slate-200 rounded-full"></div>
      <div className="absolute top-7 right-4 w-12 h-1.5 bg-slate-200 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-24 h-1.5 bg-slate-200 rounded-full opacity-50"></div>
    </div>
  );
};

const SnakePath: React.FC = () => {
  // We have 12 items.
  const peaks = Array.from({ length: 12 }, (_, i) => ({
    x: i % 2 === 0 ? 46 : 54,
    y: ((i + 0.5) * 100) / 12
  }));

  // Construct path string
  let pathD = `M 50 0 `;
  peaks.forEach((peak, i) => {
    const prevY = i === 0 ? 0 : peaks[i - 1].y;
    const midY = (prevY + peak.y) / 2;
    pathD += `C ${50} ${midY}, ${peak.x} ${midY}, ${peak.x} ${peak.y} `;
  });
  pathD += `L 50 100`;

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
      {/* Decorative Arrow Start */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 z-30">
        <ArrowDown className="w-4 h-4 text-white" />
      </div>

      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Main Dotted Path */}
        <path 
          d={pathD}
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="0.3" 
          strokeDasharray="1 3"
          strokeLinecap="round"
          className="opacity-20"
        />
      </svg>

      {/* Decorative Arrow End */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 z-30">
        <ArrowDown className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              🔥 9 clients sur 10 recherchent des entreprises locales en ligne
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Optimisez votre présence Google, suivez les actions essentielles et augmentez votre visibilité dans les recherches locales grâce à une solution simple et efficace. Attirez plus de clients directement depuis Google.
            </p>
        </div>

        {/* Features Timeline */}
        <div className="relative">
          <div className="relative">
            <SnakePath />
            
            <div className="relative z-10">
              {featureData.map((feature, index) => {
                const isEven = index % 2 === 0;
                const iconPositionClass = isEven ? 'lg:left-[46%]' : 'lg:left-[54%]';
                
                return (
                  <div 
                    key={index} 
                    className={`relative min-h-[450px] flex flex-col lg:flex-row items-center justify-between py-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Timeline Icon Node - Perfectly aligned with SVG peaks */}
                    <div className={`absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20 transition-all duration-700 ${iconPositionClass} -translate-x-1/2`}>
                      <div className={`w-9 h-9 rounded-xl ${feature.color} flex items-center justify-center text-white ring-4  group-hover:scale-110 transition-transform duration-300`}>
                        {React.cloneElement(feature.icon as React.ReactElement)}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`w-full lg:w-[38%] ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center group`}>
                      <div className={`flex items-center gap-1.5 mb-4 justify-center ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <span className="text-blue-600 font-bold text-[11px] tracking-tight flex items-center gap-0.5 uppercase">
                          <span className="text-base leading-none">°</span> {feature.badge}
                        </span>
                      </div>
                      
                      <h3 className={`text-2xl md:text-3xl font-black text-[#1a2b4b] mb-5 leading-tight flex items-start justify-center gap-3 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row lg:justify-start'}`}>
                        <span className="text-2xl transition-transform group-hover:scale-110 duration-500">{feature.emoji}</span>
                        {feature.title}
                      </h3>
                      
                      <p className={`text-[15px] text-slate-500 leading-relaxed font-medium mb-8 max-w-[360px] mx-auto ${isEven ? 'lg:mr-0' : 'lg:ml-0'}`}>
                        {feature.description}
                      </p>

                      <button className="px-7 py-2.5 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all text-[11px] active:scale-95 uppercase tracking-wider">
                        En savoir plus
                      </button>
                    </div>

                    {/* Visual Side */}
                    <div className={`w-full lg:w-[38%] flex items-center justify-center mt-10 lg:mt-0`}>
                       
                      <div className="relative w-full max-w-[520px] aspect-[16/11]   overflow-hidden    group">
                        <VisualMockup color={feature.color} emoji={feature.emoji} badge={feature.badge} />
                      </div>
                      
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Features;