"use client";

import React from 'react';
import { ChevronDown, Clock, Check, Info, Facebook, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LocationDetails: React.FC = () => {
  const router = useRouter();

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-fade-in px-4">
      
      {/* Top Header Actions (Screenshot Match) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
        <h1 className="text-[28px] font-black text-gray-900 tracking-tight">Mon établissement</h1>
        <div className="flex space-x-3">
            <button className="flex items-center px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-4 h-4 mr-2.5" />
                À connecter
            </button>
            <button className="flex items-center px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all">
                <Facebook size={18} className="text-blue-600 mr-2.5" fill="currentColor" />
                À connecter
            </button>
        </div>
      </div>

      {/* Top Grid: Identity & Score (Screenshot Match) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Identity Card */}
        <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-50 overflow-hidden group hover:shadow-md transition-all">
            {/* Soft Gradient Banner */}
            <div className="h-32 bg-gradient-to-r from-[#F3E8FF] via-[#E0F2FE] to-[#F0FDF4]"></div>
            
            <div className="px-10 pb-10 flex items-start relative">
                {/* Logo Floral Centré verticalement sur la bordure */}
                <div className="w-32 h-32 bg-white rounded-full p-1.5 shadow-xl -mt-16 flex-shrink-0 z-10 border border-gray-50">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                         {/* Mock Flower Logo from Image */}
                         <div className="relative w-20 h-20">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-200 rounded-full opacity-60"></div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-purple-300 rounded-full opacity-60"></div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-200 rounded-full opacity-60"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-100 rounded-full opacity-60"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rotate-45 transform"></div>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="ml-8 mt-4 flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Nom de mon établissement</h2>
                            <p className="text-gray-400 text-sm font-bold mt-2 leading-relaxed">
                                12 rue Jean Moulin<br/>
                                69123 Lyon, France
                            </p>
                        </div>
                        <button onClick={() => router.push('edit')} className="p-2 text-gray-300 hover:text-blue-500 transition-colors">
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Completion Score Card (Dark Mode as in Screenshot) */}
        <div className="bg-[#101827] rounded-[1.5rem] shadow-xl p-8 text-white relative overflow-hidden flex flex-col justify-center border border-gray-800">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
             
             <div className="relative z-10 flex justify-between items-center gap-6">
                 <div className="space-y-6 flex-1">
                     <div className="flex items-center space-x-3">
                        <div className="p-2.5 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="font-black text-xl tracking-tight leading-tight">Continuez d'améliorer votre score !</h3>
                     </div>
                     
                     <div>
                        <p className="text-slate-300 text-sm font-black mb-1">Votre score de complétion</p>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-[240px]">
                            Ajoutez un maximum d'informations pour améliorer votre visibilité
                        </p>
                     </div>
                     
                     <div className="text-orange-400 text-sm font-black tracking-wide">
                        1 information manquante
                     </div>
                 </div>

                 {/* Gauge Donut 83% */}
                 <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                     <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                        <circle cx="64" cy="64" r="54" stroke="#1F2937" strokeWidth="12" fill="none" />
                        <circle cx="64" cy="64" r="54" stroke="#10B981" strokeWidth="12" fill="none" strokeDasharray="339" strokeDashoffset="58" strokeLinecap="round" />
                     </svg>
                     <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-[32px] font-black leading-none tracking-tighter">83%</span>
                        <span className="text-[9px] font-black uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-1 tracking-widest">Complétés</span>
                     </div>
                     <div className="absolute top-0 right-0 p-1 text-slate-600">
                        <Info size={16} strokeWidth={3} />
                     </div>
                 </div>
             </div>
        </div>
      </div>

      {/* Hours Management Section (Screenshot Match) */}
      <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-50 p-10">
        <h3 className="text-xl font-black text-gray-900 mb-10 tracking-tight">Gérez vos horaires</h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Weekly Schedule Table */}
            <div className="lg:col-span-7 space-y-3">
                {[
                    { day: 'Lundi', hours: '09:00 - 12:00 | 14:00 - 17:00' },
                    { day: 'Mardi', hours: '09:00 - 12:00 | 14:00 - 17:00' },
                    { day: 'Mercredi', hours: '09:00 - 12:00 | 14:00 - 17:00', extra: '+1' },
                    { day: 'Jeudi', hours: '09:00 - 12:00 | 14:00 - 17:00', active: true },
                    { day: 'Vendredi', hours: '09:00 - 12:00 | 14:00 - 17:00' },
                    { day: 'Samedi', hours: '09:00 - 12:30 | 14:00 - 17:00' },
                    { day: 'Dimanche', hours: 'Fermé' },
                ].map((schedule, idx) => (
                    <div key={idx} className={`flex items-center px-5 py-3 rounded-2xl transition-all ${schedule.active ? 'bg-blue-50/30' : 'hover:bg-gray-50'}`}>
                        <span className="font-black text-gray-900 w-32 text-[15px]">{schedule.day}</span>
                        <span className="text-gray-600 font-bold text-[15px] flex-1">{schedule.hours}</span>
                        <div className="flex items-center space-x-6">
                            {schedule.extra && (
                                <div className="flex items-center text-gray-400 font-bold text-sm bg-slate-50 px-2 py-1 rounded-lg">
                                    <Clock size={16} className="mr-2" /> {schedule.extra}
                                </div>
                            )}
                            {schedule.active ? (
                                <ChevronDown size={20} className="text-gray-400 -rotate-90 transform" />
                            ) : (
                                <div className="w-5"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Special Hours Cards */}
            <div className="lg:col-span-5 space-y-4">
                <button className="w-full flex items-center justify-between p-7 bg-white border border-gray-100 rounded-[1.5rem] hover:border-emerald-500 hover:shadow-lg transition-all group">
                    <div className="flex items-center space-x-5">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                <Check size={18} strokeWidth={4} />
                            </div>
                        </div>
                        <div className="text-left">
                            <h4 className="font-black text-gray-900 text-lg tracking-tight">Horaires exceptionnels</h4>
                            <p className="text-xs text-gray-400 font-bold mt-1.5 flex items-center">
                                <span className="mr-2">💼</span> Toussaint, Jour de l'An, 19 janv
                            </p>
                        </div>
                    </div>
                    <ChevronRight size={24} className="text-gray-300 group-hover:text-emerald-500" />
                </button>

                <button className="w-full flex items-center justify-between p-7 bg-white border border-gray-100 rounded-[1.5rem] hover:border-emerald-500 hover:shadow-lg transition-all group">
                    <div className="flex items-center space-x-5">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                <Check size={18} strokeWidth={4} />
                            </div>
                        </div>
                        <div className="text-left">
                            <h4 className="font-black text-gray-900 text-lg tracking-tight">Horaires supplémentaires</h4>
                            <p className="text-xs text-gray-400 font-bold mt-1.5 flex items-center">
                                <span className="mr-2">🍳</span> Petit-déjeuner, Brunch, Dîner, Accès +2
                            </p>
                        </div>
                    </div>
                    <ChevronRight size={24} className="text-gray-300 group-hover:text-emerald-500" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;