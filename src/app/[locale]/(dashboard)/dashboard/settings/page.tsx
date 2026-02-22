"use client";

import React, { useState } from 'react';
import { 
  User, Building2, CreditCard, Bell, Shield, Plus, Mail, CheckCircle2, 
  Loader2, X, MoreVertical, Trash2, Send, Star, UserPlus, Info, Pencil, ChevronRight
} from 'lucide-react';
import { CURRENT_USER, MOCK_ORGS, MOCK_TEAM } from '@/lib/constants';
import { OrganizationRole } from '@/lib/types';
import { toast } from 'sonner';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'organization' | 'billing' | 'notifications'>('profile');
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const getRoleBadgeColor = (role: OrganizationRole) => {
    switch (role) {
      case OrganizationRole.ADMIN: return 'bg-purple-50 text-purple-600 border-purple-100';
      case OrganizationRole.MANAGER: return 'bg-blue-50 text-blue-600 border-blue-100';
      case OrganizationRole.EDITOR: return 'bg-green-50 text-green-600 border-green-100';
      default: return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const handleSendInvitation = () => {
    toast.success("Invitation envoyée !");
    setIsInviteModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto h-full animate-fade-in flex flex-col md:flex-row gap-8 pb-10">
      
      {/* Sidebar de Navigation */}
      <div className="w-full md:w-64 flex-shrink-0">
          <h1 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Paramètres</h1>
          <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('profile')} 
                className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'profile' ? 'bg-white shadow-sm text-blue-600 border border-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <User size={18} className="mr-3" /> Mon Profil
              </button>
              <button 
                onClick={() => setActiveTab('organization')} 
                className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'organization' ? 'bg-white shadow-sm text-blue-600 border border-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <Building2 size={18} className="mr-3" /> Organisation
              </button>
              <button 
                onClick={() => setActiveTab('billing')} 
                className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'billing' ? 'bg-white shadow-sm text-blue-600 border border-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <CreditCard size={18} className="mr-3" /> Facturation
              </button>
              <button 
                onClick={() => setActiveTab('notifications')} 
                className={`w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'notifications' ? 'bg-white shadow-sm text-blue-600 border border-gray-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <Bell size={18} className="mr-3" /> Notifications
              </button>
          </nav>
      </div>

      {/* Zone de Contenu Principale */}
      <div className="flex-1">
          {activeTab === 'organization' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Informations Générales */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                      <div className="flex justify-between items-start mb-6">
                          <div>
                              <h2 className="text-lg font-black text-gray-900 tracking-tight">Informations de l'organisation</h2>
                              <p className="text-sm text-gray-500 font-medium">Gérez les détails de votre entreprise.</p>
                          </div>
                          <button className="text-sm text-blue-600 font-bold hover:underline flex items-center">
                            <Pencil size={14} className="mr-1.5" /> Modifier
                          </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Nom de l'organisation</label>
                              <div className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 font-bold text-sm">
                                {MOCK_ORGS[0].name}
                              </div>
                          </div>
                          <div>
                              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Propriétaire</label>
                              <div className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 font-bold text-sm">
                                {CURRENT_USER.name}
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Gestion des Membres */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-8 border-b border-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                          <div>
                              <h2 className="text-lg font-black text-gray-900 tracking-tight">Membres de l'équipe</h2>
                              <p className="text-sm text-gray-500 font-medium">Gérez les accès de vos collaborateurs.</p>
                          </div>
                          <button 
                            onClick={() => setIsInviteModalOpen(true)}
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center w-fit"
                          >
                            <UserPlus size={18} className="mr-2" /> Inviter un membre
                          </button>
                      </div>

                      <div className="divide-y divide-gray-50">
                          {MOCK_TEAM.map((member) => (
                              <div key={member.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                  <div className="flex items-center space-x-4">
                                      <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-gray-400">
                                          {member.avatar ? (
                                              <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                                          ) : (
                                              <User size={24} />
                                          )}
                                      </div>
                                      <div>
                                          <h4 className="text-sm font-black text-gray-900 tracking-tight">{member.name}</h4>
                                          <p className="text-xs text-gray-400 font-bold">{member.email}</p>
                                      </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4">
                                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getRoleBadgeColor(member.role)}`}>
                                          {member.role}
                                      </span>
                                      <span className={`text-[10px] font-black uppercase tracking-widest ${member.status === 'ACTIVE' ? 'text-green-500' : 'text-orange-400'}`}>
                                          {member.status === 'ACTIVE' ? 'ACTIF' : 'EN ATTENTE'}
                                      </span>
                                      <button className="p-2 text-gray-300 hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-all">
                                          <MoreVertical size={18} />
                                      </button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          )}

          {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl relative group">
                          <User size={48} />
                          <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-100 text-gray-400 hover:text-blue-600 transition-colors">
                            <Pencil size={14} strokeWidth={3} />
                          </button>
                      </div>
                      <div>
                          <h2 className="text-2xl font-black text-gray-900 tracking-tight">{CURRENT_USER.name}</h2>
                          <p className="text-gray-500 font-medium">{CURRENT_USER.email}</p>
                          <div className="mt-3 flex items-center space-x-2">
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-100">
                                {CURRENT_USER.role}
                            </span>
                            <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-gray-100">
                                ID: {CURRENT_USER.id}
                            </span>
                          </div>
                      </div>
                  </div>
                  
                  <hr className="border-gray-50" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Prénom & Nom</label>
                          <input type="text" value={CURRENT_USER.name} readOnly className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 font-bold text-sm focus:outline-none" />
                      </div>
                      <div className="space-y-2">
                          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email professionnel</label>
                          <input type="email" value={CURRENT_USER.email} readOnly className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-gray-700 font-bold text-sm focus:outline-none" />
                      </div>
                  </div>

                  <div className="pt-4">
                    <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-all flex items-center">
                        <Shield size={18} className="mr-2 text-gray-400" /> Modifier mon mot de passe
                    </button>
                  </div>
              </div>
          )}
          
          {['billing', 'notifications'].includes(activeTab) && (
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-16 text-center animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300 border-2 border-dashed border-gray-200">
                    {activeTab === 'billing' ? <CreditCard size={32} /> : <Bell size={32} />}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">Section {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
                  <p className="mt-2 font-bold text-gray-400 max-w-sm mx-auto">Cette fonctionnalité est en cours de configuration et sera disponible prochainement.</p>
                  <button onClick={() => setActiveTab('profile')} className="mt-8 text-blue-600 font-black text-sm hover:underline flex items-center justify-center mx-auto">
                    Retour au profil <ChevronRight size={16} className="ml-1" />
                  </button>
              </div>
          )}
      </div>

      {/* Modal d'Invitation Simplifiée */}
      {isInviteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                  <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                      <h3 className="text-xl font-black text-gray-900 tracking-tight">Nouvel invité</h3>
                      <button onClick={() => setIsInviteModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={24} /></button>
                  </div>
                  <div className="p-8 space-y-6">
                      <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email du collaborateur</label>
                          <input type="email" placeholder="nom@entreprise.com" className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Rôle</label>
                          <select className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold appearance-none">
                              <option>ADMIN</option>
                              <option selected>MANAGER</option>
                              <option>EDITOR</option>
                              <option>VIEWER</option>
                          </select>
                      </div>
                      <button onClick={handleSendInvitation} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center">
                          <Send size={18} className="mr-2" /> Envoyer l'invitation
                      </button>
                  </div>
              </div>
          </div>
      )}

    </div>
  );
};

export default Settings;