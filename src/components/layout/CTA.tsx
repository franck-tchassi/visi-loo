// src/components/layout/CTA.tsx

"use client";

import React from 'react';

import { Star, TrendingUp, MapPin, Zap, MousePointerClick } from 'lucide-react';

export const CTA: React.FC = () => {


  return (
      <section className="py-24 bg-[#007FFF] relative overflow-hidden isolate">
         {/* Background Gradients & Patterns */}
         <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#007FFF,#0066CC)] z-0"></div>
         
         {/* Decorative Blurs */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
         
         {/* Grid Pattern Overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Left Column: Text Content */}
                <div className="text-left space-y-8 max-w-2xl">
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                        Propulsez votre entreprise en tête des résultats locaux.
                    </h2>
                    
                    <p className="text-lg text-blue-50 font-medium leading-relaxed">
                        Que vous soyez artisan, franchisé ou une agence, Visiloo vous donne les super-pouvoirs pour dominer votre zone de chalandise. Automatisez votre présence, répondez aux avis instantanément et regardez votre chiffre d'affaires grandir.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                        <button 
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#ffbe33] via-[#ffcf3d] to-[#ffbe33] hover:from-[#ffcf3d] hover:to-[#ffcf3d] text-[#0a1b3d] text-lg font-extrabold transition-all shadow-[0_15px_30px_-10px_rgba(255,190,51,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(255,190,51,0.6)] hover:-translate-y-1 flex items-center justify-center min-w-[280px]"
                        >
                        Commencer maintenant
                        <MousePointerClick size={20} className="ml-3 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Column: Visual Composition */}
                <div className="relative flex justify-center lg:justify-end">
                    
                    {/* Main Image Container */}
                    <div className="relative w-full max-w-[500px]">
                        {/* Blob Background behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-[3rem] rotate-6 opacity-40 blur-2xl transform scale-95 animate-pulse"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white/20 shadow-2xl bg-gray-900">
                            <img 
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
                                alt="Business Owner Success" 
                                className="w-full h-auto object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                            
                            {/* Inner Text Overlay */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                                    <p className="font-bold text-base mb-1">"Mon CA a augmenté de 30%"</p>
                                    <p className="text-xs text-blue-100 opacity-80">Sophie, Gérante de boutique</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1: Google Card */}
                        <div className="absolute -top-10 -left-10 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 w-64 hidden sm:block transform -rotate-3 hover:rotate-0 transition-transform hover:scale-105">
                            <div className="flex items-start space-x-3 mb-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="h-2.5 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                                    <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <span className="text-base font-bold text-gray-900">5.0</span>
                                    <div className="flex">
                                        {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12 avis</span>
                            </div>
                        </div>

                        {/* Floating Element 2: Growth Chart */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 w-56 hidden sm:block transform rotate-3 hover:rotate-0 transition-transform hover:scale-105">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vues Fiche</p>
                                    <p className="text-lg font-black text-gray-900">24.5K</p>
                                </div>
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                    <TrendingUp size={20} className="text-green-600" />
                                </div>
                            </div>
                            <div className="flex items-end space-x-2 h-16 justify-between">
                                <div className="w-full bg-blue-50 rounded-t-md h-[40%] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">1.2k</div>
                                </div>
                                <div className="w-full bg-blue-100 rounded-t-md h-[60%]"></div>
                                <div className="w-full bg-blue-200 rounded-t-md h-[50%]"></div>
                                <div className="w-full bg-blue-400 rounded-t-md h-[80%]"></div>
                                <div className="w-full bg-[#007FFF] rounded-t-md h-[100%] shadow-lg shadow-blue-500/30"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         </div>
      </section>
  );
};