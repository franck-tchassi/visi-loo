//src/app/[locale]/(landing)/contact/page.tsx

"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-[#0a1b3d]">Message envoyé !</h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.
          </p>
          <button 
            onClick={() => router.push('/')} // Use router.push to navigate back to home
            className="px-8 py-4 bg-[#2152ff] text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdff] pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contactez-nous
          </h2>
          <p className="text-[#0a1b3d] text-lg md:text-xl font-medium leading-relaxed px-4">
            Nous sommes là pour vous aider. Veuillez sélectionner un sujet ci-dessous lié à votre demande afin que la bonne personne puisse vous assister dès que possible.
          </p>
          <a 
            href="mailto:support@visiloo.com" 
            className="text-[#2152ff] text-lg font-bold hover:underline block transition-all"
          >
            support@visiloo.com
          </a>
          <div className="w-full h-px bg-gray-100 mt-12"></div>
        </div>

        {/* Main Content: Form + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Contact Form */}
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Input */}
              <div className="space-y-2">
                <input 
                  required
                  type="email"
                  placeholder="Adresse e-mail"
                  className="w-full h-[58px] px-8 bg-white border border-gray-200 rounded-full text-[15px] text-[#0a1b3d] focus:outline-none focus:ring-2 focus:ring-[#2152ff]/10 focus:border-[#2152ff] transition-all placeholder:text-gray-400 font-medium shadow-sm"
                />
              </div>

              {/* Subject Select */}
              <div className="relative">
                <select 
                  required
                  className="w-full h-[58px] px-8 bg-white border border-gray-200 rounded-full text-[15px] text-[#0a1b3d] focus:outline-none focus:ring-2 focus:ring-[#2152ff]/10 focus:border-[#2152ff] appearance-none cursor-pointer font-medium shadow-sm"
                >
                  <option value="" disabled selected>Choisir un sujet</option>
                  <option value="support">Support Technique</option>
                  <option value="sales">Service Commercial</option>
                  <option value="billing">Facturation</option>
                  <option value="other">Autre demande</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <textarea 
                  required
                  rows={6}
                  placeholder="Message"
                  className="w-full px-8 py-5 bg-white border border-gray-200 rounded-[32px] text-[15px] text-[#0a1b3d] focus:outline-none focus:ring-2 focus:ring-[#2152ff]/10 focus:border-[#2152ff] transition-all placeholder:text-gray-400 font-medium shadow-sm resize-none"
                ></textarea>
              </div>

              {/* Marketing Checkbox */}
              <label className="flex items-start gap-3 group cursor-pointer select-none py-2">
                <input 
                  type="checkbox" 
                  className="mt-1 w-5 h-5 rounded border-gray-300 text-[#2152ff] focus:ring-[#2152ff] transition-all cursor-pointer"
                />
                <span className="text-[13px] text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                  Ne manquez rien ! Cochez cette case pour recevoir des offres exclusives, du savoir-faire marketing et des mises à jour de produits par e-mail.
                </span>
              </label>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="h-[58px] px-10 bg-[#5c7fff] hover:bg-[#2152ff] text-white rounded-full font-bold text-lg flex items-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-blue-500/20 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Envoyer un message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000">
            <div className="relative w-full max-w-[550px]">
              {/* Illustration SVG representation based on image */}
              <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-2xl">
                {/* Envelope Base */}
                <path d="M50,150 L550,150 L550,450 L50,450 Z" fill="#fff" />
                <path d="M50,150 L300,320 L550,150" fill="none" stroke="#f1f1f1" strokeWidth="2" />
                
                {/* Yellow Backing */}
                <path d="M40,180 L560,180 L560,460 L40,460 Z" fill="#ffcc00" opacity="0.8" />
                <path d="M40,180 L300,340 L560,180" fill="#ffeaa7" />
                
                {/* Characters Sim - Man Right */}
                <circle cx="530" cy="350" r="15" fill="#1a1f36" />
                <path d="M520,365 L540,365 L550,460 L510,460 Z" fill="#2152ff" />
                
                {/* Character Sim - Man Left */}
                <circle cx="70" cy="380" r="15" fill="#1a1f36" />
                <path d="M60,395 L80,395 L90,460 L50,460 Z" fill="#ff4d94" />
                
                {/* Big @ Symbol */}
                <circle cx="300" cy="300" r="80" fill="none" stroke="#2152ff" strokeWidth="15" />
                <text x="300" y="325" textAnchor="middle" fontSize="120" fontWeight="900" fill="#2152ff">@</text>
                
                {/* Floating Elements */}
                <rect x="480" y="280" width="80" height="30" rx="15" fill="#2152ff" opacity="0.2" />
                <circle cx="500" cy="295" r="8" fill="#a3acb9" />
                <rect x="515" y="292" width="30" height="6" rx="3" fill="#a3acb9" />
              </svg>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;