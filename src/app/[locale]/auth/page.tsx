"use client";

import React, { useState, useEffect } from 'react';
import { 
  Eye,
  ArrowLeft,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

const AuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot-password'>('login');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderForgotPassword = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <button 
        onClick={() => setMode('login')}
        className="flex items-center gap-2 text-[#635bff] font-bold text-[14px] mb-8 hover:text-[#0a2540] transition-colors"
      >
        <ArrowLeft size={16} /> Se connecter
      </button>
      
      <h1 className="text-[22px] md:text-[26px] font-bold text-[#1a1f36] mb-4 leading-tight tracking-tight">
        Réinitialiser votre mot de passe
      </h1>
      <p className="text-[#4f5b76] text-[14px] md:text-[15px] mb-8 font-medium">
        Saisissez l'adresse e-mail associée à votre compte Visiloo et nous vous enverrons un lien pour réinitialiser votre mot de passe.
      </p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <label className="block text-[14px] font-medium text-[#4f5b76]">
            E-mail
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3acb9]" size={18} />
            <input 
              type="email" 
              placeholder="jean.dupont@exemple.com"
              className="w-full h-[44px] pl-11 pr-4 bg-white border border-[#e6e6e6] rounded-md text-[15px] text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 focus:border-[#635bff] transition-all shadow-sm"
            />
          </div>
        </div>

        <button className="w-full h-[44px] bg-[#635bff] text-white rounded-md font-semibold text-[15px] hover:bg-[#0a2540] shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3)] active:scale-[0.98] transition-all">
          Envoyer le lien de réinitialisation
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative">
      {/* BACKGROUND GRADIENT MESH - Optimisé pour mobile */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9d1ff] via-[#635bff] to-[#ff4d94] opacity-100"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,_#ff8da1_0%,_transparent_60%)] opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_#3d4bbd_0%,_transparent_60%)] opacity-60"></div>
        
        {/* Slanted white background - Ajusté pour mobile */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[50%] md:h-[45%] bg-white z-0" 
          style={{ 
            clipPath: isMobile 
              ? 'polygon(0 25%, 100% 0, 100% 100%, 0% 100%)'
              : 'polygon(0 35%, 100% 0, 100% 100%, 0% 100%)' 
          }}
        ></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 flex flex-col flex-1">
        {/* HEADER */}
        <header className="w-full px-6 md:px-12 pt-6 md:pt-12 pb-4">
          <div className="max-w-[1200px] mx-auto flex justify-start">
            <Link href="/" className="cursor-pointer inline-block">
              <div className="flex items-center gap-2 group">
                <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden"> {/* Increased size to w-12 h-12 */}
                   <Image
                     src="/logo-visiloo.png"
                     alt="Visiloo Logo"
                     width={48} // Corresponds to w-12 (48px)
                     height={48} // Corresponds to h-12 (48px)
                   />
                </div>
                <span className="text-[22px] font-bold tracking-tighter text-white drop-shadow-sm">visiloo</span>
              </div>
            </Link>
          </div>
        </header>

        {/* MAIN CONTENT AREA - Scrollable sur mobile */}
        <main className="flex-1 flex flex-col items-center px-4 py-4 md:py-12 overflow-y-auto">
          <div className="w-full max-w-[480px] my-auto animate-in fade-in slide-in-from-top-4 duration-500">
            
            {/* THE AUTH CARD */}
            <div className="bg-white rounded-[10px] shadow-[0_20px_60px_-20px_rgba(50,50,93,0.25),0_15px_40px_-20px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="p-6 md:p-12">
                {mode === 'forgot-password' ? renderForgotPassword() : (
                  <>
                    <h1 className="text-[22px] md:text-[26px] font-bold text-[#1a1f36] mb-8 md:mb-10 leading-tight tracking-tight">
                      {mode === 'login' ? "Connectez-vous à votre compte" : "Créez votre compte Visiloo"}
                    </h1>

                    <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                      
                      {/* FULL NAME FIELD (Only for Sign Up) */}
                      {mode === 'signup' && (
                        <div className="space-y-1.5 animate-in fade-in slide-in-from-left-2 duration-300">
                          <label className="block text-[14px] font-medium text-[#4f5b76]">
                            Nom complet
                          </label>
                          <input 
                            type="text" 
                            placeholder="Jean Dupont"
                            className="w-full h-[44px] px-4 bg-white border border-[#e6e6e6] rounded-md text-[15px] text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 focus:border-[#635bff] transition-all shadow-sm"
                          />
                        </div>
                      )}

                      {/* EMAIL FIELD */}
                      <div className="space-y-1.5">
                        <label className="block text-[14px] font-medium text-[#4f5b76]">
                          E-mail
                        </label>
                        <input 
                          type="email" 
                          defaultValue={mode === 'login' ? "franck.tchassi@laplateforme.io" : ""}
                          placeholder={mode === 'login' ? "" : "jean.dupont@exemple.com"}
                          className="w-full h-[44px] px-4 bg-white border border-[#e6e6e6] rounded-md text-[15px] text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 focus:border-[#635bff] transition-all shadow-sm"
                        />
                      </div>

                      {/* PASSWORD FIELD */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-[14px] font-medium text-[#4f5b76]">
                            Mot de passe
                          </label>
                          {mode === 'login' && (
                            <button 
                              type="button"
                              onClick={() => setMode('forgot-password')}
                              className="text-[13px] md:text-[14px] font-bold text-[#635bff] hover:text-[#0a2540] transition-colors focus:outline-none whitespace-nowrap"
                            >
                              Mot de passe oublié ?
                            </button>
                          )}
                        </div>
                        <div className="relative">
                          <input 
                            type={showPassword ? 'text' : 'password'} 
                            defaultValue={mode === 'login' ? "••••••••••••••••" : ""}
                            placeholder={mode === 'login' ? "" : "Au moins 8 caractères"}
                            className="w-full h-[44px] px-4 bg-white border border-[#e6e6e6] rounded-md text-[15px] text-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 focus:border-[#635bff] transition-all shadow-sm"
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4f5b76] hover:text-[#1a1f36] transition-colors"
                          >
                            <Eye size={18} className="opacity-40" />
                          </button>
                        </div>
                      </div>

                      {/* REMEMBER ME / TERMS */}
                      <div className="flex items-start gap-2.5 pt-1">
                        <input 
                          type="checkbox" 
                          id="remember"
                          defaultChecked
                          className="w-4 h-4 rounded border-[#dcdfe4] text-[#635bff] focus:ring-[#635bff] cursor-pointer mt-0.5 flex-shrink-0"
                        />
                        <label htmlFor="remember" className="text-[14px] text-[#4f5b76] font-medium cursor-pointer select-none leading-snug">
                          {mode === 'login' 
                            ? "Se souvenir de moi sur cet appareil" 
                            : "J'accepte les conditions d'utilisation et la politique de confidentialité."}
                        </label>
                      </div>

                      {/* MAIN SUBMIT BUTTON */}
                      <button className="w-full h-[44px] bg-[#635bff] text-white rounded-md font-semibold text-[15px] hover:bg-[#0a2540] shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3)] active:scale-[0.98] transition-all">
                        {mode === 'login' ? "Se connecter" : "Créer un compte"}
                      </button>

                      {/* DIVIDER */}
                      <div className="relative py-2 flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-[#e6e6e6]"></div>
                        </div>
                        <span className="relative px-4 bg-white text-[12px] font-bold text-[#a3acb9] uppercase tracking-wider">OU</span>
                      </div>

                      {/* SECONDARY BUTTON - Google */}
                      <div>
                        <button className="w-full h-[44px] bg-white border border-[#dcdfe4] rounded-md font-medium text-[15px] text-[#1a1f36] hover:border-[#a3acb9] flex items-center justify-center gap-3 shadow-sm transition-all active:bg-[#f6f9fc]">
                          <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                          {mode === 'login' ? "Me connecter avec Google" : "M'inscrire avec Google"}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {/* FOOTER OF THE CARD */}
              <div className="bg-[#f7f8f9] py-6 px-6 md:px-12 text-center border-t border-[#e6e6e6]">
                <p className="text-[14px] text-[#4f5b76] font-medium">
                  {mode === 'signup' ? (
                    <>
                      Vous avez déjà un compte ? 
                      <button 
                        onClick={() => { setMode('login'); window.scrollTo(0, 0); }}
                        className="text-[#635bff] font-bold hover:text-[#0a2540] transition-colors ml-1"
                      >
                        Se connecter
                      </button>
                    </>
                  ) : (
                    <>
                      Vous découvrez Visiloo ? 
                      <button 
                        onClick={() => { setMode('signup'); window.scrollTo(0, 0); }}
                        className="text-[#635bff] font-bold hover:text-[#0a2540] transition-colors ml-1"
                      >
                        Créez un compte
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthPage;