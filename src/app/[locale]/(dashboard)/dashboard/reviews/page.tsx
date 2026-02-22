"use client";

import React, { useState } from 'react';
import { 
  Download, BarChart2, SlidersHorizontal, Calendar, Search, 
  X, Check, Sparkles, Zap, Send, Smile, Plus, Bookmark, ChevronRight,
  AtSign, Star, User, Info, Pencil
} from 'lucide-react';
import { toast } from 'sonner';

const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'voice' | 'invite'>('voice');
  
  // States for Invitation Tab
  const [clientName, setClientName] = useState('Céline');
  const [phoneNumber, setPhoneNumber] = useState('06 12 34 56 78');
  const [acceptedLegals, setAcceptedLegals] = useState(true);

  const handleSendInvitation = () => {
    if (clientName && phoneNumber && acceptedLegals) {
      toast.success(`Invitation envoyée à ${clientName} !`);
      // Logic to send invitation
    } else {
      toast.error("Veuillez remplir tous les champs et accepter les informations légales.");
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10 animate-fade-in px-4">
      
      {/* Top Header Actions (Icons Settings & Person removed as requested) */}
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-[28px] font-black text-gray-900 tracking-tight">Mes avis</h1>
        <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Download size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <BarChart2 size={20} />
            </button>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex space-x-10 border-b border-gray-100 mb-8">
        <button 
            onClick={() => setActiveTab('voice')}
            className={`pb-4 text-sm font-black transition-all border-b-2 uppercase tracking-tight ${activeTab === 'voice' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
            Voix du client
        </button>
        <button 
            onClick={() => setActiveTab('invite')}
            className={`pb-4 text-sm font-black transition-all border-b-2 uppercase tracking-tight ${activeTab === 'invite' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
        >
            Envoyer une invitation
        </button>
      </div>

      {activeTab === 'voice' ? (
        <div className="space-y-6 animate-fade-in">
            {/* Filter Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-3 bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-all">
                    <span className="text-sm font-bold text-gray-500">Tous mes établissements</span>
                    <ChevronRight size={18} className="text-gray-300 rotate-90" />
                </div>
                <div className="md:col-span-3 bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-center space-x-3 shadow-sm cursor-pointer hover:bg-gray-50 transition-all">
                    <Calendar size={18} className="text-gray-400" />
                    <span className="text-sm font-bold text-gray-400">Date de début</span>
                    <ArrowRight size={14} className="text-gray-300" />
                    <span className="text-sm font-bold text-gray-400">Date de fin</span>
                </div>
                <div className="md:col-span-4 bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center shadow-sm group focus-within:border-blue-200 transition-all">
                    <Search size={20} className="text-gray-300 mr-3 group-focus-within:text-blue-500" />
                    <input type="text" placeholder="Rechercher par nom, contenu..." className="bg-transparent border-none outline-none text-sm font-medium w-full text-gray-700" />
                </div>
                <div className="md:col-span-2 bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-all">
                    <span className="text-sm font-bold text-gray-500">Filtres</span>
                    <SlidersHorizontal size={18} className="text-gray-400" />
                </div>
            </div>

            <div className="flex items-center text-sm font-black text-gray-900 tracking-tight py-2">
                149 avis / 66 enquêtes
            </div>

            {/* RESTORED REVIEWS LIST */}
            <div className="space-y-4">
                {/* Card 1: Google Review */}
                <div className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-50 group hover:shadow-md transition-all relative">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-black text-gray-900 text-base">Stéphanie VILLENEUVE</h4>
                                <p className="text-xs text-gray-400 font-bold mt-0.5">Mon établissement - Jean Moulin</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} strokeWidth={i < 4 ? 0 : 2} className={i === 4 ? "text-gray-200" : ""} />)}
                                    </div>
                                    <span className="text-xs text-gray-400 font-bold">10 Octobre 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-3 py-1.5 bg-pink-50 text-pink-600 text-[10px] font-black rounded-full flex items-center">
                                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div> Accueil
                            </span>
                            <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div> Accessibilité
                            </span>
                            <button className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full flex items-center hover:bg-blue-100 transition-colors">
                                <Plus size={12} className="mr-1.5" strokeWidth={4} /> Tag
                            </button>
                            <button className="p-2 text-gray-200 hover:text-gray-400">
                                <Bookmark size={20} />
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-6">
                        Très facile d'accès, que ce soit en transport ou en voiture ! L'établissement est bien situé et offre de bonnes indications pour s'y rendre. Une fois sur place, tout est bien pensé pour faciliter la visite. L'accueil est chaleureux, et on se sent tout de suite à l'aise.
                    </p>

                    {/* AI Response Area */}
                    <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6">
                        <div className="relative">
                            <textarea 
                                placeholder="Votre réponse..."
                                className="w-full bg-transparent border-none outline-none text-gray-400 font-bold text-sm resize-none h-16 placeholder:text-gray-300"
                            />
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center text-purple-500 group">
                                        <div className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors">
                                            <Sparkles size={18} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest ml-1 opacity-0 group-hover:opacity-100 transition-opacity">Beta</span>
                                    </button>
                                    <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Zap size={18} />
                                    </button>
                                    <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Smile size={18} />
                                    </button>
                                    <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                        <AtSign size={18} />
                                    </button>
                                </div>
                                <button className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shadow-sm">
                                    <Send size={18} fill="currentColor" className="ml-0.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: NPS Review */}
                <div className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-gray-50 group hover:shadow-md transition-all relative">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center overflow-hidden border border-orange-100">
                                <div className="w-8 h-8 rounded-full border-4 border-emerald-400 border-t-orange-400 transform rotate-45"></div>
                            </div>
                            <div>
                                <h4 className="font-black text-gray-900 text-base">Marc Lambert</h4>
                                <p className="text-xs text-gray-400 font-bold mt-0.5">Mon établissement - Jean Moulin</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">NPS 9</span>
                                    <span className="text-xs text-gray-400 font-bold">2 Octobre 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-3 py-1.5 bg-pink-50 text-pink-600 text-[10px] font-black rounded-full flex items-center">
                                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div> Accueil
                            </span>
                            <span className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full flex items-center">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div> Service
                            </span>
                            <span className="px-3 py-1.5 bg-yellow-50 text-yellow-600 text-[10px] font-black rounded-full flex items-center">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div> Ambiance
                            </span>
                            <button className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full flex items-center hover:bg-blue-100 transition-colors">
                                <Plus size={12} className="mr-1.5" strokeWidth={4} /> Tag
                            </button>
                            <button className="p-2 text-gray-200 hover:text-gray-400">
                                <Bookmark size={20} />
                            </button>
                        </div>
                    </div>

                    <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-4">
                        J'ai passé un excellent moment ! L'équipe est accueillante, le service est efficace, et on sent qu'ils mettent un vrai soin dans ce qu'ils font. Le cadre est agréable et l'ambiance est parfaite. Je recommande vivement cet établissement à tous ceux qui cherchent une expérience de qualité. Merci encore !
                    </p>
                </div>
            </div>
        </div>
      ) : (
        /* INVITE TAB CONTENT (Matches Your Screenshot) */
        <div className="space-y-10 animate-fade-in max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
                
                {/* Left Side: Form */}
                <div className="space-y-8">
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">Inviter un client</h2>
                    
                    <div className="space-y-4">
                        {/* Location Select Box */}
                        <div className="relative bg-white border border-gray-100 rounded-xl p-4 shadow-sm group">
                            <label className="block text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">
                                Sélectionnez un établissement<span className="text-red-500 ml-0.5">*</span>
                            </label>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-800">Mon établissement (Lyon, 12 rue Jean Moulin)</span>
                                <div className="p-1 bg-gray-100 rounded-full text-gray-400 group-hover:bg-gray-200 transition-colors cursor-pointer">
                                    <X size={14} strokeWidth={3} />
                                </div>
                            </div>
                        </div>

                        {/* Client Name Input */}
                        <div className="relative bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center group">
                            <div className="mr-4 text-gray-400">
                                <User size={20} />
                            </div>
                            <div className="flex-1">
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">
                                    Nom du client
                                </label>
                                <input 
                                    type="text" 
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-sm font-bold text-gray-800 p-0 placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        {/* Phone Number Input */}
                        <div className="relative bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center group">
                            <div className="mr-4 w-7 flex justify-center">
                                <div className="text-xl">🇫🇷</div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">
                                    Numéro de téléphone du client<span className="text-red-500 ml-0.5">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full bg-transparent border-none outline-none text-sm font-bold text-gray-800 p-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Legal Checkbox */}
                    <div className="flex items-center space-x-3">
                        <div 
                            onClick={() => setAcceptedLegals(!acceptedLegals)}
                            className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors ${acceptedLegals ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'}`}
                        >
                            {acceptedLegals && <Check size={14} className="text-white" strokeWidth={4} />}
                        </div>
                        <div className="flex items-center text-sm font-bold text-gray-500">
                            J'ai lu et j'accepte les informations légales
                            <Info size={16} className="ml-2 text-gray-300 cursor-help" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Preview */}
                <div className="space-y-8">
                    <h2 className="text-xl font-black text-gray-900 tracking-tight">Mon SMS</h2>

                    <div className="space-y-4">
                        {/* Sender Info */}
                        <div className="bg-gray-100/60 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                            <div className="text-sm font-bold text-gray-700">
                                <span className="text-gray-900 font-black">Nom de l'expéditeur :</span> Mon établissement - Jean Moulin
                            </div>
                            <Info size={18} className="text-gray-400" />
                        </div>

                        {/* SMS Bubble matching screenshot exactly */}
                        <div className="relative">
                            <div className="bg-[#007FFF] text-white rounded-[1.8rem] rounded-bl-none p-10 shadow-xl shadow-blue-100 relative">
                                <button className="absolute top-6 right-6 p-1.5 hover:bg-white/10 rounded transition-colors">
                                    <Pencil size={18} />
                                </button>
                                <div className="text-[15px] font-medium leading-relaxed">
                                    <p className="mb-6">Bonjour {clientName || '[Nom]'},</p>
                                    <p className="mb-1">Merci pour votre visite dans notre établissement.</p>
                                    <p className="mb-1">Laissez un avis en cliquant sur le lien suivant :</p>
                                    <p className="font-black underline">www.partoo.fr/u/AbC</p>
                                    <p className="mt-6">Merci !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive Send Button (matching screenshot width and height) */}
            <div className="pt-6">
                <button 
                    onClick={handleSendInvitation}
                    className="w-full py-5 bg-[#007FFF] hover:bg-[#0066CC] text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-blue-100 transform active:scale-[0.99] tracking-tight"
                >
                    Envoyer l'invitation
                </button>
            </div>
        </div>
      )}

    </div>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default Reviews;