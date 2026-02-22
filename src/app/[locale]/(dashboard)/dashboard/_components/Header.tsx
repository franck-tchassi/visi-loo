"use client";

import React, { useState } from 'react';
import { ChevronDown, User, Building2, Plus, Check, LogOut, Menu } from 'lucide-react';
import { MOCK_ORGS } from '@/lib/constants';
import { Organization } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const router = useRouter();
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [activeOrg, setActiveOrg] = useState<Organization>(MOCK_ORGS[0]);
  const [isCreateOrgModalOpen, setIsCreateOrgModalOpen] = useState(false);
  const [newOrgName, setNewOrgName] = useState('');

  const handleOrgSwitch = (org: Organization) => {
    setActiveOrg(org);
    setIsOrgDropdownOpen(false);
  };

  const handleCreateOrg = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOrgName.trim()) {
        toast.success(`Organisation "${newOrgName}" créée avec succès !`);
        setIsCreateOrgModalOpen(false);
        setNewOrgName('');
        setIsOrgDropdownOpen(false);
    }
  };

  return (
    <header className="h-16 md:h-20 bg-[#F3F5F9] flex items-center justify-between px-4 md:px-8 sticky top-0 z-20 transition-all">
      
      <div className="flex items-center space-x-4">
        {/* Mobile Hamburger Menu */}
        <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 text-gray-500 hover:bg-gray-200 rounded-lg md:hidden"
        >
            <Menu size={24} />
        </button>

        {/* ORGANIZATION SWITCHER */}
        <div className="relative">
            <button 
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className="flex items-center space-x-2 bg-white px-2 py-1.5 md:px-3 md:py-2 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
            >
                <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <Building2 size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="text-left hidden md:block">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Organisation</p>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors max-w-[150px] truncate">
                        {activeOrg.name}
                    </p>
                </div>
                {/* Mobile specific label */}
                <div className="text-left block md:hidden">
                    <p className="text-sm font-bold text-gray-800 max-w-[120px] truncate">
                        {activeOrg.name}
                    </p>
                </div>
                <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* ORG DROPDOWN MENU */}
            {isOrgDropdownOpen && (
                <>
                <div className="fixed inset-0 z-10" onClick={() => setIsOrgDropdownOpen(false)}></div>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2 border-b border-gray-100 bg-gray-50">
                        <span className="text-xs font-bold text-gray-500 uppercase px-2">Mes organisations</span>
                    </div>
                    <div className="max-h-60 overflow-y-auto p-2 space-y-1">
                        {MOCK_ORGS.map(org => (
                            <button 
                                key={org.id}
                                onClick={() => handleOrgSwitch(org)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${activeOrg.id === org.id ? 'bg-blue-50 text-blue-700 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <span className="truncate">{org.name}</span>
                                {activeOrg.id === org.id && <Check size={14} />}
                            </button>
                        ))}
                    </div>
                    <div className="p-2 border-t border-gray-100">
                        <button 
                            onClick={() => { setIsCreateOrgModalOpen(true); setIsOrgDropdownOpen(false); }}
                            className="w-full flex items-center justify-center px-3 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors border border-dashed border-gray-300"
                        >
                            <Plus size={14} className="mr-2" /> Créer une organisation
                        </button>
                    </div>
                </div>
                </>
            )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* User Profile Dropdown */}
        <div className="relative">
            <div 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-800 flex items-center justify-center text-white border-2 border-white shadow-sm cursor-pointer ml-2 hover:ring-2 hover:ring-green-200 transition-all"
            >
                <User size={18} className="md:w-5 md:h-5" />
            </div>

            {isUserDropdownOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsUserDropdownOpen(false)}></div>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-2">
                            <button 
                                onClick={() => router.push('/app/settings')}
                                className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <User size={16} className="mr-2 text-gray-400" /> Mon profil
                            </button>
                            <button 
                                onClick={() => router.push('/')}
                                className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                            >
                                <LogOut size={16} className="mr-2" /> Déconnexion
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
      </div>

      {/* CREATE ORG MODAL */}
      {isCreateOrgModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Nouvelle Organisation</h3>
                    <button onClick={() => setIsCreateOrgModalOpen(false)} className="text-gray-400 hover:text-gray-600"><Plus size={24} className="rotate-45" /></button>
                </div>
                <form onSubmit={handleCreateOrg} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nom de l'organisation</label>
                        <input 
                            type="text" 
                            autoFocus
                            placeholder="Ex: Franck's Agency"
                            value={newOrgName}
                            onChange={(e) => setNewOrgName(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                    </div>
                    <div className="flex space-x-3">
                        <button type="button" onClick={() => setIsCreateOrgModalOpen(false)} className="flex-1 py-3 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50">Annuler</button>
                        <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">Créer</button>
                    </div>
                </form>
            </div>
        </div>
      )}

    </header>
  );
};

export default Header;