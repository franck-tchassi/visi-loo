"use client";
import React, { useState } from 'react';



import { 
  Check, Globe, Star, MessageSquare, MessageCircle, 
  Zap, Share2, PhoneForwarded, BarChart3, 
  ArrowRight, Eye, Smartphone, X, Shield, Sparkles, Clock, Rocket,
  Bot, MessageSquareQuote
} from 'lucide-react';
import FAQ from '@/components/layout/FAQ';

const Pricing: React.FC = () => {

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const comparisonData = [
    { feature: "Nombre d'établissements", free: "1 seul", essential: "Jusqu'à 3", premium: "Illimité" },
    { feature: "Diffusion Annuaires", free: "5 (Essentiels)", essential: "25+ (Global)", premium: "40+ (Premium)" },
    { feature: "Optimisation SEO Google", free: "Basique", essential: "Avancée", premium: "Expertise IA" },
    { feature: "Centralisation des avis", free: true, essential: true, premium: true },
    { feature: "Booster d'avis (SMS/QR)", free: false, essential: true, premium: true },
    { feature: "Assistant IA Léo", free: false, essential: false, premium: true },
    { feature: "Planification Réseaux Sociaux", free: false, essential: false, premium: true },
    { feature: "Webchat SMS & WhatsApp", free: false, essential: true, premium: true },
    { feature: "Call Deflector", free: false, essential: false, premium: true },
    { feature: "Support Client", free: "Communauté", essential: "Email 24h", premium: "Dédié & Téléphone" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200/30">
    

      <main className="pt-32 pb-24 relative overflow-hidden">
        
        {/* Removed dark background decorative elements */}

       
        <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
          
          
          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-[0.95]">
            Trouvez le plan Visiloo parfait pour votre croissance locale.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
            Commencez gratuitement, expérimentez la puissance de l'IA et passez à la vitesse supérieure quand vous êtes prêt.
          </p>

          {/* Luxury Billing Toggle */}
          <div className="inline-flex items-center p-1.5 bg-gray-100 border border-gray-200 rounded-full mb-20 shadow-sm">
            <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all duration-500 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'}`}
            >
                Mensuel
            </button>
            <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-full text-sm font-black transition-all duration-500 flex items-center ${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'}`}
            >
                Annuel <span className={`ml-2 px-2 py-0.5 rounded text-[10px] ${billingCycle === 'yearly' ? 'bg-blue-100 text-blue-700 font-black' : 'bg-gray-200 text-gray-600'}`}>-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-40 relative z-10">
          
          {/* Card 1: Discovery (Gratuit 3 jours) */}
          <div className="bg-white rounded-[3rem] border border-gray-200 p-8 flex flex-col transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 group shadow-sm">
             <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00D1B2]">Discovery</span>
                    <div className="flex items-center bg-[#00D1B2]/10 text-[#00D1B2] px-3 py-1 rounded-full text-[10px] font-black border border-[#00D1B2]/20">
                        <Clock size={12} className="mr-1.5" /> 3 JOURS
                    </div>
                </div>
                <h3 className="text-3xl font-black mb-1">Gratuit</h3>
                <p className="text-xs text-gray-500 font-bold">Pour tester l'interface Visiloo sans engagement.</p>
             </div>

             <button 
                
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 rounded-2xl font-black text-sm transition-all mb-10 shadow-sm"
             >
                Essayer gratuitement
             </button>

             <ul className="space-y-5 text-left">
                <li className="flex items-start text-sm font-bold text-gray-600">
                    <Check size={16} className="mr-3 text-[#00D1B2] shrink-0" strokeWidth={3} />
                    1 établissement configuré
                </li>
                <li className="flex items-start text-sm font-bold text-gray-600">
                    <Check size={16} className="mr-3 text-[#00D1B2] shrink-0" strokeWidth={3} />
                    Diffusion sur 5 annuaires majeurs
                </li>
                <li className="flex items-start text-sm font-bold text-gray-600">
                    <Check size={16} className="mr-3 text-[#00D1B2] shrink-0" strokeWidth={3} />
                    Centralisation des avis (Lecture seule)
                </li>
                <li className="flex items-start text-sm font-bold text-gray-400">
                    <X size={16} className="mr-3 shrink-0" strokeWidth={3} />
                    Pas d'automatisation IA
                </li>
             </ul>
          </div>

          {/* Card 2: Essential */}
          <div className="bg-white rounded-[3rem] border border-blue-200 p-8 flex flex-col shadow-xl relative transition-all duration-500 scale-105 z-20 group">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                Recommandé
             </div>
             
             <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Essential</span>
                </div>
                <div className="flex items-baseline">
                    <span className="text-5xl font-black tracking-tighter tabular-nums">{billingCycle === 'yearly' ? '149' : '179'}€</span>
                    <span className="ml-2 text-sm font-bold text-gray-500">/ mois HT</span>
                </div>
                <p className="text-xs text-gray-600 font-bold mt-2">Visibilité totale et gestion des avis simplifiée.</p>
             </div>

             <button 
                
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-base hover:bg-blue-700 transition-all mb-10 shadow-lg active:scale-[0.98]"
             >
                Souscrire
             </button>

             <div className="space-y-8 text-left">
                <div>
                    <h4 className="flex items-center text-blue-600 font-black text-xs mb-3 uppercase tracking-widest">
                        <Globe size={14} className="mr-2" /> Presence Management
                    </h4>
                    <ul className="space-y-3 text-[13px] font-bold text-gray-700">
                        <li className="flex items-start"><Check size={14} className="mr-3 text-blue-600 shrink-0" /> Diffusion sur 25+ plateformes (GPS, Annuaires)</li>
                        <li className="flex items-start"><Check size={14} className="mr-3 text-blue-600 shrink-0" /> Mise à jour en temps réel illimitée</li>
                    </ul>
                </div>
                <div>
                    <h4 className="flex items-center text-orange-500 font-black text-xs mb-3 uppercase tracking-widest">
                        <Star size={14} className="mr-2 fill-orange-500" /> E-Réputation
                    </h4>
                    <ul className="space-y-3 text-[13px] font-bold text-gray-700">
                        <li className="flex items-start"><Check size={14} className="mr-3 text-orange-500 shrink-0" /> Centralisation Avis Google & Meta</li>
                        <li className="flex items-start"><Check size={14} className="mr-3 text-orange-500 shrink-0" /> Booster d'avis (SMS & QR illimités)</li>
                    </ul>
                </div>
             </div>
          </div>

          {/* Card 3: Premium AI */}
          <div className="bg-gray-50 rounded-[3rem] border border-gray-200 p-8 flex flex-col transition-all duration-500 hover:bg-gray-100 group relative overflow-hidden shadow-sm">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>
             
             <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-purple-600">Premium AI</span>
                </div>
                <div className="flex items-baseline">
                    <span className="text-5xl font-black tracking-tighter tabular-nums">{billingCycle === 'yearly' ? '249' : '299'}€</span>
                    <span className="ml-2 text-sm font-bold text-gray-500">/ mois HT</span>
                </div>
                <p className="text-xs text-gray-600 font-bold mt-2">La puissance ultime de l'IA pour dominer le local.</p>
             </div>

             <button 
                
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-black text-base hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all mb-10 shadow-lg active:scale-[0.98]"
             >
                Contacter un expert
             </button>

             <div className="space-y-8 text-left">
                 <div>
                    <h4 className="flex items-center text-purple-600 font-black text-xs mb-3 uppercase tracking-widest">
                        <Sparkles size={14} className="mr-2" /> Intelligence Artificielle
                    </h4>
                    <ul className="space-y-3 text-[13px] font-bold text-gray-700">
                        <li className="flex items-start"><Check size={14} className="mr-3 text-purple-600 shrink-0" /> Réponses automatiques intelligentes (Léo)</li>
                        <li className="flex items-start"><Check size={14} className="mr-3 text-purple-600 shrink-0" /> Audit SEO prédictif par IA</li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="flex items-center text-green-600 font-black text-xs mb-3 uppercase tracking-widest">
                        <PhoneForwarded size={14} className="mr-2" /> Fonctions Avancées
                    </h4>
                    <ul className="space-y-3 text-[13px] font-bold text-gray-700">
                        <li className="flex items-start"><Check size={14} className="mr-3 text-green-600 shrink-0" /> Call Deflector (Voix vers SMS)</li>
                        <li className="flex items-start"><Check size={14} className="mr-3 text-green-600 shrink-0" /> Benchmark Concurrentiel complet</li>
                    </ul>
                 </div>
             </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="max-w-6xl mx-auto px-6 mb-40">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black mb-4">Anatomie des plans</h2>
                <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em]">Comparez chaque détail technique</p>
            </div>
            
            <div className="bg-gray-50 rounded-[3rem] border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-8 text-[11px] font-black text-gray-700 uppercase tracking-widest">Capacités</th>
                            <th className="p-8 text-center font-black text-base border-l border-gray-200">Gratuit</th>
                            <th className="p-8 text-center font-black text-base border-l border-gray-200 bg-blue-50 text-blue-700">Essential</th>
                            <th className="p-8 text-center font-black text-base text-purple-600 border-l border-gray-200">Premium AI</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {comparisonData.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-100 transition-colors">
                                <td className="p-6 text-sm font-bold text-gray-700">{row.feature}</td>
                                <td className="p-6 text-center border-l border-gray-200 opacity-60">
                                    {typeof row.free === 'boolean' ? (row.free ? <Check className="mx-auto text-green-500" size={18} strokeWidth={3} /> : <X className="mx-auto text-gray-400" size={16} />) : <span className="text-xs font-bold text-gray-600">{row.free}</span>}
                                </td>
                                <td className="p-6 text-center border-l border-gray-200 bg-blue-50">
                                    {typeof row.essential === 'boolean' ? (row.essential ? <Check className="mx-auto text-blue-600" size={20} strokeWidth={3} /> : <X className="mx-auto text-gray-400" size={16} />) : <span className="text-xs font-bold text-blue-600">{row.essential}</span>}
                                </td>
                                <td className="p-6 text-center border-l border-gray-200">
                                    {typeof row.premium === 'boolean' ? (row.premium ? <Check className="mx-auto text-purple-600" size={20} strokeWidth={3} /> : <X className="mx-auto text-gray-400" size={16} />) : <span className="text-xs font-bold text-purple-600">{row.premium}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Benefits Section with Luxury Styling */}
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-200">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-20 leading-tight tracking-tighter">
                Pourquoi choisir Visiloo ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                {[
                    { icon: Eye, title: "Visibilité Garantie", desc: "Remontez dans les résultats de recherche Google et dominez votre secteur géographique." },
                    { icon: Globe, title: "Synchronisation Totale", desc: "Mise à jour en 1 clic sur Google, Apple Plans, Waze et 40+ plateformes mondiales." },
                    { icon: Smartphone, title: "Booster de Croissance", desc: "Collectez 3x plus d'avis positifs grâce à nos solutions SMS et QR codes premium." },
                    { icon: Bot, title: "Intelligence Augmentée", desc: "Léo gère vos interactions clients avec une empathie et une précision inégalées." },
                    { icon: MessageCircle, title: "Messagerie Centralisée", desc: "Discutez simplement avec vos clients grâce à la centralisation des messages Google, Facebook et Instagram." },
                    { icon: Star, title: "Gestion des Avis Simplifiée", desc: "Gérez tous vos avis Google, Facebook et Tripadvisor au même endroit." },
                    { icon: BarChart3, title: "Performance en un Coup d'Œil", desc: "Consultez votre performance simplement (nombres d’appels, de visites sur votre site…)." },
                    { icon: MessageSquareQuote, title: "Réponses Faciles aux Avis", desc: "Répondez facilement aux avis de vos clients avec des messages prédéfinis et personnalisables." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-8 group">
                        <div className="w-20 h-20 rounded-[1.5rem] border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#00D1B2] group-hover:bg-[#00D1B2]/5 transition-all duration-700 shadow-sm">
                            <item.icon size={32} className="text-[#00D1B2] group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="pt-1">
                            <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-base font-medium text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>

     
      <FAQ />
     
    </div>
  );
};

export default Pricing;