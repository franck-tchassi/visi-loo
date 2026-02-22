"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulation d'envoi
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#f8faff] to-[#f1f4ff] rounded-[32px] p-8 md:p-16 border border-blue-50/50 shadow-sm overflow-hidden">
          
          {/* Decorative elements */}
          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-blue-200/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-48 h-48 bg-indigo-200/20 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Content Left */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1b3d] mb-4 leading-tight">
                Abonnez-vous à notre newsletter.
              </h2>
              <p className="text-[#6b7280] text-[18px] md:text-[20px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Recevez nos dernières actualités et offres.
              </p>
            </div>

            {/* Form Right */}
            <div className="w-full max-w-md">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-8 border border-green-100 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1b3d] mb-2">C'est noté !</h3>
                  <p className="text-[#6b7280] text-sm">Merci pour votre inscription. Vous recevrez bientôt nos actualités.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full h-16 px-6 rounded-2xl bg-white border border-gray-100 text-[#0a1b3d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm group-hover:border-gray-200"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-2 top-2 bottom-2 bg-[#2152ff] hover:bg-[#1a41cc] text-white px-6 rounded-xl font-bold flex items-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Envoi...' : (
                        <>
                          <span className="hidden sm:inline">S'abonner</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
