// src/app/[locale]/(dashboard)/dashboard/page.tsx

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Send, MapPin, TrendingUp, MessageCircle, Plus, QrCode, ArrowRight, Unplug, FileText, UserPlus, Store, Info, Search, AlertCircle, X, CheckCircle2, Mail, Loader2, Globe, Camera, ScanLine, MessageSquare, Eye, Star
} from 'lucide-react';
import { CURRENT_USER } from '@/lib/constants';
import { OrganizationRole } from '@/lib/types';
import { toast } from 'sonner';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [isPresenceModalOpen, setIsPresenceModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteEmail) {
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setShowSuccess(true);
            toast.success("Invitation envoyée avec succès !");
            setTimeout(() => {
                setShowSuccess(false);
                setIsInviteModalOpen(false);
                setInviteEmail('');
            }, 2000);
        }, 1500);
    }
  };

  const DIRECTORIES = [
      { name: 'Google Business Profile', status: 'synced', category: 'Essentiel', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg', type: 'img' },
      { name: 'Facebook Local', status: 'synced', category: 'Essentiel', color: 'bg-[#1877F2]', text: 'f', type: 'icon' },
      { name: 'Apple Plans', status: 'synced', category: 'Essentiel', color: 'bg-gray-900', text: '', type: 'icon' },
      { name: 'Waze', status: 'synced', category: 'GPS', color: 'bg-[#33CCFF]', text: 'W', type: 'icon' }
  ];

  const SEO_GRID_POINTS = Array.from({ length: 9 }).map((_, i) => ({ id: i, rank: i === 4 ? 1 : Math.floor(Math.random() * 5) + 1, color: 'bg-green-500' }));

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
            <h1 className="text-2xl font-bold text-slate-900">Bonjour, {CURRENT_USER.name} 👋</h1>
            <p className="text-slate-500 mt-1">Gérez vos établissements et suivez votre croissance.</p>
        </div>
        <button 
            onClick={() => router.push('/dashboard/qr-config')}
            className="flex items-center px-4 py-2 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-lg text-sm font-bold hover:bg-yellow-100 transition-colors"
        >
            <QrCode size={16} className="mr-2" /> Booster d'avis
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button onClick={() => setIsInviteModalOpen(true)} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all group">
              <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mr-3"><Send size={18} /></div>
                  <span className="font-bold text-slate-700 text-sm">Inviter</span>
              </div>
              <Plus size={16} className="text-slate-400 group-hover:text-blue-500" />
          </button>
          <button onClick={() => router.push('/dashboard/posts')} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all group">
              <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mr-3"><FileText size={18} /></div>
                  <span className="font-bold text-slate-700 text-sm">Créer un post</span>
              </div>
              <Plus size={16} className="text-slate-400 group-hover:text-blue-500" />
          </button>
          <button onClick={() => router.push('/create-location')} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all group">
              <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mr-3"><Store size={18} /></div>
                  <span className="font-bold text-slate-700 text-sm">Établissement</span>
              </div>
              <Plus size={16} className="text-slate-400 group-hover:text-blue-500" />
          </button>
          <button onClick={() => setIsInviteModalOpen(true)} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all group">
              <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center mr-3"><UserPlus size={18} /></div>
                  <span className="font-bold text-slate-700 text-sm">Utilisateur</span>
              </div>
              <Plus size={16} className="text-slate-400 group-hover:text-blue-500" />
          </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div onClick={() => router.push('/dashboard/messages')} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 relative"><MessageCircle size={24} /></div>
                  <div><h3 className="text-lg font-bold text-slate-900">7 messages</h3><span className="text-sm font-bold text-blue-600">Répondre →</span></div>
              </div>
          </div>
          <div onClick={() => router.push('/dashboard/reviews')} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-50 rounded-full text-yellow-600"><Star size={24} fill="currentColor" /></div>
                  <div><h3 className="text-lg font-bold text-slate-900">12 avis</h3><span className="text-sm font-bold text-blue-600">Répondre →</span></div>
              </div>
          </div>
          <div onClick={() => setIsPresenceModalOpen(true)} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-50 rounded-full text-red-500"><Unplug size={24} /></div>
                  <div><h3 className="text-lg font-bold text-slate-900 leading-tight">1 erreur sync</h3><span className="text-sm font-bold text-blue-600">Rétablir →</span></div>
              </div>
          </div>
          <div onClick={() => router.push('/dashboard/locations')} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600"><Search size={24} /></div>
                  <div><h3 className="text-lg font-bold text-slate-900">45% complété</h3><span className="text-sm font-bold text-blue-600">Améliorer →</span></div>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-blue-300 transition-all">
            <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-blue-100 rounded text-blue-600"><Eye size={18} /></div>
                <span className="font-bold text-slate-800">Visibilité</span>
            </div>
            <span className="text-3xl font-black text-slate-900">23,989</span>
            <p className="text-xs text-green-600 font-bold mt-1">+12% vs mois dernier</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-yellow-300 transition-all">
            <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-yellow-100 rounded text-yellow-600"><Star size={18} /></div>
                <span className="font-bold text-slate-800">Note</span>
            </div>
            <span className="text-3xl font-black text-slate-900">4.8/5</span>
            <p className="text-xs text-green-600 font-bold mt-1">+0.2 vs mois dernier</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-purple-300 transition-all">
            <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-purple-100 rounded text-purple-600"><TrendingUp size={18} /></div>
                <span className="font-bold text-slate-800">Actions</span>
            </div>
            <span className="text-3xl font-black text-slate-900">842</span>
            <p className="text-xs text-slate-500 font-bold mt-1">Appels & Itinéraires</p>
          </div>
      </div>

      {isPresenceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-bold text-slate-900">Diffusion Annuaires</h3>
                    <button onClick={() => setIsPresenceModalOpen(false)} className="p-1 hover:bg-slate-200 rounded-full"><X size={20}/></button>
                </div>
                <div className="p-4 space-y-2">
                    {DIRECTORIES.map((dir, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs ${dir.color || 'bg-white border border-slate-200'}`}>
                                    {dir.type === 'img' ? <img src={dir.icon} className="w-5 h-5" alt=""/> : dir.text}
                                </div>
                                <span className="font-bold text-slate-800 text-sm">{dir.name}</span>
                            </div>
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">En ligne</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      )}

      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-slate-900">Inviter un membre</h3>
                    <button onClick={() => setIsInviteModalOpen(false)} className="p-1 hover:bg-slate-100 rounded-full"><X size={20} /></button>
                </div>
                <form onSubmit={handleSendInvite} className="p-6 space-y-4">
                    {showSuccess ? (
                        <div className="text-center py-6 text-green-600 font-bold">Invitation envoyée avec succès !</div>
                    ) : (
                        <>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
                                <input type="email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="nom@entreprise.com" required />
                            </div>
                            <button type="submit" disabled={isSending} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center">
                                {isSending ? <Loader2 size={20} className="animate-spin" /> : 'Envoyer l\'invitation'}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;