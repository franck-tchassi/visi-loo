"use client";

import React from 'react';
import { Search, SlidersHorizontal, Plus, LayoutGrid, Diamond, Hexagon, Gem, ChevronRight, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Locations: React.FC = () => {
  const router = useRouter();

  const handleLocationClick = (id: string) => {
    router.push(`/app/locations/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto pb-10 animate-fade-in relative px-4">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-4">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Tous les établissements</h1>
        <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-all flex items-center">
                <LayoutGrid size={16} className="mr-2 text-gray-400" />
                Créer un groupe
            </button>
            <button 
                onClick={() => router.push('/create-location')}
                className="px-4 py-2 bg-[#60A5FA] hover:bg-blue-500 rounded-xl text-xs font-bold text-white shadow-lg shadow-blue-100 transition-all flex items-center"
            >
                <Plus size={18} className="mr-1.5" strokeWidth={3} />
                Établissement
            </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-gray-50 flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="56" stroke="#F8FAFC" strokeWidth="12" fill="none" />
                    <circle cx="64" cy="64" r="56" stroke="#F97316" strokeWidth="12" fill="none" strokeDasharray="351" strokeDashoffset="122" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-gray-800 leading-none">65%</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">complétés</span>
                </div>
            </div>
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-800 leading-tight">Complétion moyenne de vos établissements</h3>
                <p className="text-gray-400 text-xs font-medium leading-relaxed max-w-xs">
                    Complétez et tenez à jour vos informations pour améliorer votre visibilité.
                </p>
                <button className="text-blue-500 font-black text-xs hover:underline flex items-center justify-center md:justify-start group">
                    Modification groupée <Plus size={14} className="ml-1 transition-transform group-hover:rotate-90" />
                </button>
            </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-3 gap-3">
            <div className="bg-[#64748B] rounded-3xl p-4 flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-pink-400"></div>
                <span className="text-[9px] font-bold text-slate-300 mb-4 uppercase tracking-widest">Faible</span>
                <div className="mb-4 p-3 bg-slate-500/30 rounded-2xl group-hover:scale-110 transition-transform">
                    <Diamond className="text-pink-400 fill-pink-400" size={24} />
                </div>
                <span className="text-3xl font-black">0</span>
            </div>
            <div className="bg-[#64748B] rounded-3xl p-4 flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-400"></div>
                <span className="text-[9px] font-bold text-slate-300 mb-4 uppercase tracking-widest">Bon</span>
                <div className="mb-4 p-3 bg-slate-500/30 rounded-2xl group-hover:scale-110 transition-transform">
                    <Hexagon className="text-orange-300 fill-orange-300" size={24} />
                </div>
                <span className="text-3xl font-black">108</span>
            </div>
            <div className="bg-[#64748B] rounded-3xl p-4 flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400"></div>
                <span className="text-[9px] font-bold text-slate-300 mb-4 uppercase tracking-widest">Très bon</span>
                <div className="mb-4 p-3 bg-slate-500/30 rounded-2xl group-hover:scale-110 transition-transform">
                    <Gem className="text-emerald-300 fill-emerald-300" size={24} />
                </div>
                <span className="text-3xl font-black">1</span>
            </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
                type="text" 
                placeholder="Chercher par établissement, ville, nom ..." 
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all shadow-sm font-medium"
            />
        </div>
        <button className="px-6 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-400 shadow-sm hover:bg-gray-50 flex items-center transition-all">
            Filtres <SlidersHorizontal size={18} className="ml-2 opacity-40" />
        </button>
      </div>

      {/* List Section */}
      <div className="space-y-3">
        <h2 className="text-sm font-black text-gray-900 tracking-tight mb-4">Vos établissements (109)</h2>
        <div className="space-y-3">
            {[
                { id: '1', name: 'Mon établissement', address: '190 Rue Championnet, 75018 Paris, FR', comp: 65, color: 'bg-orange-400' },
                { id: '2', name: 'Mon établissement', address: '37 Av. des Champs-Élysées, 75008 Paris, FR', comp: 59, color: 'bg-orange-300' },
                { id: '3', name: 'Mon établissement', address: '6 Rue Vavin, 75006 Paris, FR', comp: 71, color: 'bg-emerald-400' }
            ].map((loc) => (
                <div 
                    key={loc.id}
                    onClick={() => handleLocationClick(loc.id)}
                    className="group flex items-center bg-white p-5 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
                >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${loc.color}`}></div>
                    <div className="w-8 mr-4 flex-shrink-0">
                        <input type="checkbox" onClick={(e) => e.stopPropagation()} className="w-4 h-4 rounded border-gray-200 text-blue-600" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gray-50 overflow-hidden mr-6 border border-gray-50 flex-shrink-0">
                        <img src={`https://picsum.photos/200/200?random=${loc.id}`} alt="" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{loc.name}</h3>
                        <p className="text-xs text-gray-400 mt-1 font-bold truncate">{loc.address}</p>
                    </div>
                    <div className={`w-32 text-right font-black text-xl tabular-nums ${loc.comp > 70 ? 'text-emerald-500' : 'text-orange-500'}`}>
                        {loc.comp}%
                    </div>
                    <div className="w-10 flex justify-end text-gray-200 group-hover:text-blue-400 transition-colors">
                        <ChevronRight size={24} />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;