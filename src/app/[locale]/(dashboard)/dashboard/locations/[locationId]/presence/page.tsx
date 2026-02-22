"use client";

import React, { useState, useEffect } from 'react';
import { PresenceService } from '@/services/presence.service';
import { CheckCircle2, AlertTriangle, RefreshCw, Globe, ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

const PresenceHub = () => {
  const params = useParams();
  const locationId = params.locationId as string;
  const [isSyncing, setIsSyncing] = useState(false);
  const [directories, setDirectories] = useState(PresenceService.getLocationPresence(locationId));

  const handleSync = async () => {
    setIsSyncing(true);
    toast.info("Synchronisation en cours...");
    await PresenceService.syncAll(locationId);
    setDirectories(PresenceService.getLocationPresence(locationId)); // Refresh data after sync
    setIsSyncing(false);
    toast.success("Synchronisation terminée !");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Presence Management</h1>
          <p className="text-slate-500 text-sm mt-1">Multi-diffusion de vos données sur le réseau Visiloo</p>
        </div>
        <button 
          onClick={handleSync}
          disabled={isSyncing}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center disabled:opacity-50"
        >
          {isSyncing ? <RefreshCw className="mr-2 animate-spin" size={18} /> : <RefreshCw className="mr-2" size={18} />}
          Lancer la synchronisation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Canaux de diffusion</h3>
              <span className="text-xs font-bold text-slate-400 uppercase">{directories.length} plateformes</span>
            </div>
            <div className="divide-y divide-slate-100">
              {directories.map(dir => (
                <div key={dir.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{dir.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{dir.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-extrabold px-2 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 flex items-center">
                       <CheckCircle2 size={12} className="mr-1" /> SYNCHRONISÉ
                    </span>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Score de visibilité</h3>
             <div className="flex items-end space-x-2">
                <span className="text-5xl font-black">85</span>
                <span className="text-xl font-bold text-blue-400 mb-1">/100</span>
             </div>
             <p className="text-slate-400 text-xs mt-4 leading-relaxed">Votre fiche est optimisée sur 95% des points critiques détectés par Léo.</p>
             <div className="mt-6 w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full w-[85%] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
             </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
             <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="font-bold text-slate-800">Alertes NAP</h3>
             </div>
             <p className="text-xs text-slate-500 mb-4">Aucune incohérence de nom, adresse ou téléphone détectée sur le web.</p>
             <button className="w-full py-2.5 text-xs font-bold text-slate-400 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                Relancer le scan complet
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceHub;