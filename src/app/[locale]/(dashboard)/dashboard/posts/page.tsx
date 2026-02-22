"use client";

import React, { useState } from 'react';
import { 
  Image as ImageIcon, Calendar as CalendarIcon, ChevronLeft, ChevronRight,
  Plus, Settings, HelpCircle, Wand2, Tag, ArrowRight, ArrowLeft, Bot, 
  Clock, RefreshCw, X, LayoutGrid, CheckCircle2, Sliders, ChevronDown,
  Share2, Facebook, MessageSquare, MousePointer2, Sparkles, Pencil, Eye
} from 'lucide-react';
import { toast } from 'sonner';

const Posts: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<'publications' | 'offers' | 'photos'>('publications');
  const [subTab, setSubTab] = useState('tous');
  
  // States: Offers
  const [isCreatingOffer, setIsCreatingOffer] = useState(false);

  // States: Photos
  const [isAddingPhotos, setIsAddingPhotos] = useState(false);
  const [photoMode, setPhotoMode] = useState<'ai' | 'manual'>('ai');

  // States: Publications (Posts)
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [postMode, setPostMode] = useState<'ai' | 'manual'>('ai');
  const [contentMode, setContentMode] = useState<'ai' | 'manual'>('ai');
  const [postData, setPostData] = useState({
    content: '',
    cta: 'Pas d\'appel à l\'action',
    shareOnFb: false
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // --- SUB-COMPONENT: CALENDAR ---
  const MiniCalendar = () => (
    <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-xl p-8 sticky top-24">
        <div className="flex items-center justify-between mb-8 px-2">
            <ChevronLeft size={20} className="text-gray-300 cursor-pointer" />
            <span className="font-bold text-gray-800 text-sm">Décembre 2025</span>
            <ChevronRight size={20} className="text-gray-300 cursor-pointer" />
        </div>
        
        <div className="grid grid-cols-7 gap-y-4 text-center mb-8">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <span key={d} className="text-[10px] font-bold text-gray-300 uppercase">{d}</span>
            ))}
            {days.map(d => (
                <div key={d} className={`h-8 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${d === 17 ? 'bg-white border-2 border-blue-500 text-blue-600 shadow-sm' : 'text-gray-400'}`}>
                    {d}
                </div>
            ))}
        </div>

        <div className="pt-6 border-t border-gray-50 space-y-3">
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Offre</span>
            </div>
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Publication</span>
            </div>
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Photo</span>
            </div>
        </div>
    </div>
  );

  // --- VIEW: PUBLICATIONS LIST (Screenshot 8) ---
  const PublicationsListView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Publications</h1>
        <button onClick={() => setIsCreatingPost(true)} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
            <Plus size={18} className="mr-2" strokeWidth={3} /> Créer un post
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex space-x-2 p-1 bg-white rounded-full border border-gray-100">
            {['Tous', 'Planifié', 'En ligne'].map((t) => (
                <button key={t} onClick={() => setSubTab(t.toLowerCase())} className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${subTab === t.toLowerCase() ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'text-gray-400 hover:text-gray-600'}`}>{t}</button>
            ))}
        </div>
        <span className="text-xs text-gray-400 font-medium">Nous synchronisons les modifications de Google toutes les 30 min. Actualisez la page.</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pt-4">
        <div className="xl:col-span-3 space-y-8">
            {/* AI SUGGESTION CARD */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden p-10 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-900">Choisissez un sujet pour créer et publier des publications en secondes</h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                        Localo AI vous suggère des sujets de publications et le meilleur moment pour les partager, le tout basé sur votre entreprise, les mots-clés surveillés et la concurrence. Choisissez-en un pour générer du contenu engageant en un clin d'œil ou créez-le vous-même.
                    </p>
                </div>

                <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">
                    Heure de publication suggérée : 23 décembre 2025 à 15:00
                </div>

                {/* HORIZONTAL CAROUSEL (MOCK) */}
                <div className="relative group">
                    <div className="flex space-x-6 overflow-hidden py-2">
                        {[
                            { title: "Simplify holiday review management: start the New Year stress-free.", cat: "Promote service benefits" },
                            { title: "Quick tips: How fast review responses enhance your local business visibility.", cat: "Educate customers" },
                            { title: "Focus on 2026: Strategize your online reputation for maximum local growth.", cat: "Generate business leads" }
                        ].map((card, i) => (
                            <div key={i} className="min-w-[340px] flex-1 bg-white border border-gray-100 rounded-3xl p-8 space-y-4 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                                <h4 className="text-base font-bold text-gray-800 leading-snug h-12 line-clamp-2">{card.title}</h4>
                                <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">{card.cat}</p>
                            </div>
                        ))}
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"><ChevronLeft size={24} className="text-gray-300" /></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"><ChevronRight size={24} className="text-gray-300" /></div>
                    {/* Progress Bar Mock */}
                    <div className="mt-8 flex items-center justify-center">
                        <div className="w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-gray-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:col-span-1"><MiniCalendar /></div>
      </div>
    </div>
  );

  // --- VIEW: ADD POST FLOW (Screenshots 9, 10, 11) ---
  const AddPostView = () => (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[calc(100vh-180px)] flex flex-col animate-in slide-in-from-bottom-2 duration-500">
        {/* Header INTEGRÉ */}
        <div className="px-10 py-6 border-b border-gray-50 flex justify-between items-center bg-white shrink-0">
            <div className="flex items-center space-x-4">
                <button onClick={() => setIsCreatingPost(false)} className="p-2 -ml-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ArrowLeft size={22} />
                </button>
                <h2 className="text-xl font-bold text-gray-800">Créer et publier une publication sur Google</h2>
            </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
            {/* LEFT PANEL - FORM */}
            <div className="w-full lg:w-[65%] p-12 overflow-y-auto custom-scrollbar space-y-10 bg-white">
                
                {/* 1. SELECTION DATE/HEURE (Screenshot 9) */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Choisir la date et l'heure</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <button 
                            onClick={() => setPostMode('ai')}
                            className={`p-8 rounded-[2rem] border-2 text-left transition-all ${postMode === 'ai' ? 'bg-blue-50/50 border-blue-600 shadow-blue-100' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 ${postMode === 'ai' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                    <Bot size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-lg font-bold ${postMode === 'ai' ? 'text-blue-700' : 'text-gray-900'}`}>Avec Localo AI</h4>
                                    <p className={`text-sm font-medium leading-tight ${postMode === 'ai' ? 'text-blue-600' : 'text-gray-400'}`}>Publiez automatiquement aux meilleurs moments grâce à notre algorithme.</p>
                                    {postMode === 'ai' && <p className="text-sm font-bold text-blue-700 mt-2">23 décembre 2025 à 15:00</p>}
                                </div>
                            </div>
                        </button>

                        <button 
                            onClick={() => setPostMode('manual')}
                            className={`p-8 rounded-[2rem] border-2 text-left transition-all ${postMode === 'manual' ? 'bg-blue-50/50 border-blue-600 shadow-blue-100' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 ${postMode === 'manual' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                    <Settings size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-lg font-bold ${postMode === 'manual' ? 'text-blue-700' : 'text-gray-900'}`}>Manuellement</h4>
                                    <p className={`text-sm font-medium leading-tight ${postMode === 'manual' ? 'text-blue-600' : 'text-gray-400'}`}>Vous choisissez précisément quand publier et gardez le contrôle total.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* 2. GENERER CONTENU (Screenshot 9 Bottom) */}
                <div className="bg-gray-50/50 rounded-[2.5rem] border border-gray-100 p-10 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">Générer du contenu</h3>
                        <Settings size={20} className="text-gray-400" />
                    </div>

                    {/* AI/Manual Toggle Box */}
                    <div className="flex space-x-2 p-1 bg-white rounded-full border border-gray-100 w-fit">
                        <button 
                            onClick={() => setContentMode('ai')}
                            className={`px-6 py-2 rounded-full text-xs font-bold flex items-center transition-all ${contentMode === 'ai' ? 'bg-gray-100 text-gray-800' : 'text-gray-400'}`}
                        >
                            <Bot size={14} className="mr-2" /> Avec Localo AI
                        </button>
                        <button 
                            onClick={() => setContentMode('manual')}
                            className={`px-6 py-2 rounded-full text-xs font-bold flex items-center transition-all ${contentMode === 'manual' ? 'bg-gray-100 text-gray-800' : 'text-gray-400'}`}
                        >
                            <Pencil size={14} className="mr-2" /> Manuel
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                        Écris ton idée de publication ci-dessous, ou clique pour en générer un automatiquement si rien ne te vient à l'esprit. Si tu as déjà du contenu prêt, colle-le ici et ajoute tes images.
                    </p>

                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Par exemple, « nos horaires d'ouverture changent pour les fêtes »"
                            className="w-full p-5 pr-32 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 transition-all text-sm font-medium"
                        />
                        <button className="absolute right-3 top-2 bottom-2 px-8 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-100 transition-all">
                            Générer
                        </button>
                    </div>

                    <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden">
                        <textarea 
                            value={postData.content}
                            onChange={e => setPostData({...postData, content: e.target.value})}
                            placeholder="Ta publication apparaîtra ici, ou colle le contenu que tu as déjà préparé !"
                            className="w-full h-40 p-6 resize-none outline-none text-sm font-medium text-gray-700"
                        />
                        <div className="absolute bottom-3 right-6 text-[10px] font-bold text-gray-300">
                            {postData.content.length} / 1500
                        </div>
                    </div>
                </div>

                {/* 3. AJOUTER IMAGE (Screenshot 10) */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Ajouter une image</h3>
                    <p className="text-gray-500 text-sm font-medium">Les posts avec images génèrent significativement plus d'engagement.</p>
                    
                    <div className="border-2 border-dashed border-gray-100 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-all group">
                        <div className="relative mb-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner text-blue-500 group-hover:scale-110 transition-transform">
                                <ImageIcon size={32} />
                            </div>
                            <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 border border-blue-100 shadow-sm"><Plus size={14} className="text-blue-600" strokeWidth={3} /></div>
                        </div>
                        <p className="text-gray-500 text-sm font-bold">Faites glisser votre image ici ou cliquez pour parcourir les fichiers</p>
                        <p className="text-gray-300 text-[10px] font-bold mt-1">Taille d'image recommandée 1260 x 570 pixels, avec un ratio de 16:9.</p>
                    </div>

                    <button className="w-full py-4 border border-blue-100 bg-blue-50/50 text-blue-600 rounded-2xl text-xs font-bold flex items-center justify-center hover:bg-blue-100 transition-all">
                        <ImageIcon size={16} className="mr-2" /> Sélectionner parmi vos photos publiées
                    </button>
                </div>

                {/* 4. PARTAGER AUTRES PLATEFORMES (Screenshot 11) */}
                <div className="space-y-6 bg-gray-50/30 border border-gray-100 rounded-[2.5rem] p-10">
                    <h3 className="text-lg font-bold text-gray-900">Partager sur d'autres plateformes</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className={`w-10 h-6 rounded-full relative transition-colors ${postData.shareOnFb ? 'bg-blue-600' : 'bg-gray-300'} cursor-pointer`} onClick={() => setPostData({...postData, shareOnFb: !postData.shareOnFb})}>
                                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${postData.shareOnFb ? 'left-5' : 'left-1'}`}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-600">Publier sur les plateformes, comme Facebook</span>
                        </div>
                    </div>
                </div>

                {/* 5. BOUTON D'ACTION (Screenshot 11 Bottom) */}
                <div className="space-y-6 bg-gray-50/30 border border-gray-100 rounded-[2.5rem] p-10 pb-16">
                    <h3 className="text-lg font-bold text-gray-900">Ajouter un bouton d'action (facultatif)</h3>
                    <p className="text-gray-500 text-sm font-medium">Choisissez l'un de ces boutons d'action suggérés pour engager vos clients.</p>
                    <div className="relative group">
                        <select 
                            value={postData.cta}
                            onChange={e => setPostData({...postData, cta: e.target.value})}
                            className="w-full p-4 pl-6 pr-12 bg-white border border-gray-200 rounded-2xl outline-none appearance-none text-sm font-medium text-gray-700 cursor-pointer shadow-sm hover:border-blue-200 transition-all"
                        >
                            <option>Pas d'appel à l'action</option>
                            <option>En savoir plus</option>
                            <option>S'inscrire</option>
                            <option>Acheter</option>
                            <option>Réserver</option>
                        </select>
                        <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL - PREVIEW (Screenshot 10/11 Right) */}
            <div className="hidden lg:flex lg:w-[35%] bg-[#F8FAFC] border-l border-gray-100 flex-col items-center pt-24 px-12">
                <div className="w-full space-y-10 animate-in fade-in duration-500">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <h4 className="text-gray-500 font-bold text-xl flex items-center">
                            👉 Aperçu de votre post
                        </h4>
                        
                        {/* THE PREVIEW CARD (Screenshot 10/11) */}
                        <div className="w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white overflow-hidden flex flex-col group">
                            <div className="aspect-[1.3/1] bg-blue-50 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                <div className="relative w-40 h-56 bg-white rounded-xl shadow-lg border border-blue-50 flex flex-col p-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="w-full h-2/3 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <ImageIcon className="text-blue-300" size={48} strokeWidth={1} />
                                    </div>
                                    <div className="flex-1 mt-4 space-y-2">
                                        <div className="w-3/4 h-1.5 bg-blue-50 rounded-full"></div>
                                        <div className="w-1/2 h-1.5 bg-blue-50 rounded-full"></div>
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md transform rotate-12">
                                       <Bot size={14} />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4"><Share2 size={20} className="text-blue-200" /></div>
                            </div>
                            
                            <div className="p-10 text-left space-y-2">
                                <h5 className="text-xl font-bold text-gray-800">Votre contenu</h5>
                                <p className="text-sm font-bold text-gray-400">Dans 7 Jours</p>
                            </div>
                        </div>

                        {/* CALENDAR LEGEND PREVIEW */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 w-full">
                            <div className="flex items-center space-x-6 justify-start">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Offre</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Publication</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Photo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* BOTTOM ACTION BAR - FIXÉ (Screenshot 9, 10, 11) */}
        <div className="px-10 py-8 border-t border-gray-50 bg-white flex justify-end items-center space-x-6 shrink-0 z-30">
            <button 
                onClick={() => setIsCreatingPost(false)} 
                className="px-8 py-3 text-gray-400 hover:text-gray-900 font-bold text-sm transition-colors"
            >
                Annuler
            </button>
            <button 
                onClick={() => toast.success("Publication planifiée avec succès !")}
                className="bg-blue-600 text-white px-12 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
                Planifier
            </button>
        </div>
    </div>
  );

  // --- VIEW: PHOTOS LIST ---
  const PhotosListView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Photos</h1>
        <button onClick={() => setIsAddingPhotos(true)} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center shadow-lg">
            <Plus size={18} className="mr-2" /> Ajouter des photos
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 group relative cursor-pointer">
            <img src={`https://picsum.photos/400/400?random=${i + 10}`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="text-white" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- VIEW: ADD PHOTOS ---
  const AddPhotosView = () => (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[calc(100vh-180px)] flex flex-col animate-in slide-in-from-bottom-2 duration-500">
        <div className="px-10 py-6 border-b border-gray-50 flex justify-between items-center bg-white shrink-0">
            <div className="flex items-center space-x-4">
                <button onClick={() => setIsAddingPhotos(false)} className="p-2 -ml-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ArrowLeft size={22} />
                </button>
                <h2 className="text-xl font-bold text-gray-800">Ajouter des photos</h2>
            </div>
        </div>

        <div className="flex-1 p-12 overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button 
                        onClick={() => setPhotoMode('ai')}
                        className={`p-8 rounded-[2rem] border-2 text-left transition-all ${photoMode === 'ai' ? 'bg-blue-50/50 border-blue-600 shadow-blue-100' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                    >
                        <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 ${photoMode === 'ai' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <Sparkles size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className={`text-lg font-bold ${photoMode === 'ai' ? 'text-blue-700' : 'text-gray-900'}`}>Optimisation IA</h4>
                                <p className={`text-sm font-medium leading-tight ${photoMode === 'ai' ? 'text-blue-600' : 'text-gray-400'}`}>Léo analyse et suggère les meilleures photos pour votre SEO local.</p>
                            </div>
                        </div>
                    </button>

                    <button 
                        onClick={() => setPhotoMode('manual')}
                        className={`p-8 rounded-[2rem] border-2 text-left transition-all ${photoMode === 'manual' ? 'bg-blue-50/50 border-blue-600 shadow-blue-100' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                    >
                        <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 ${photoMode === 'manual' ? 'bg-white border-blue-600 text-blue-600' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <LayoutGrid size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className={`text-lg font-bold ${photoMode === 'manual' ? 'text-blue-700' : 'text-gray-900'}`}>Upload Manuel</h4>
                                <p className={`text-sm font-medium leading-tight ${photoMode === 'manual' ? 'text-blue-600' : 'text-gray-400'}`}>Glissez-déposez vos propres fichiers directement sur vos fiches.</p>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="border-2 border-dashed border-gray-100 rounded-[2.5rem] p-20 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-all group">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                        <ImageIcon size={40} />
                    </div>
                    <p className="text-gray-500 text-lg font-bold">Cliquez ou glissez vos photos ici</p>
                    <p className="text-gray-300 text-sm mt-2">JPG, PNG jusqu'à 10MB par fichier.</p>
                </div>
            </div>
        </div>

        <div className="px-10 py-8 border-t border-gray-50 bg-white flex justify-end items-center space-x-6 shrink-0 z-30">
            <button 
                onClick={() => setIsAddingPhotos(false)} 
                className="px-8 py-3 text-gray-400 hover:text-gray-900 font-bold text-sm transition-colors"
            >
                Annuler
            </button>
            <button 
                onClick={() => toast.success("Photos publiées avec succès !")}
                className="bg-blue-600 text-white px-12 py-3.5 rounded-full font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all"
            >
                Publier les photos
            </button>
        </div>
    </div>
  );

  return (
    <div className="max-w-full mx-auto pb-10 space-y-8">
      {/* NOUVEAU MENU DE NAVIGATION HAUT DE PAGE (SANS MODAL) */}
      {!isCreatingOffer && !isAddingPhotos && !isCreatingPost && (
        <div className="flex space-x-12 border-b border-gray-100 mb-6">
            {[
                { id: 'publications', label: 'Publications' },
                { id: 'offers', label: 'Offres' },
                { id: 'photos', label: 'Photos' }
            ].map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveMainTab(tab.id as any)}
                    className={`pb-4 text-sm font-black transition-all border-b-2 uppercase tracking-[0.2em] ${activeMainTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
      )}

      {/* RENDER VIEWS */}
      {activeMainTab === 'publications' && !isCreatingPost && <PublicationsListView />}
      {activeMainTab === 'publications' && isCreatingPost && <AddPostView />}

      {activeMainTab === 'offers' && !isCreatingOffer && (
        <div className="space-y-6 animate-in fade-in duration-500">
           <div className="flex justify-between items-center"><h1 className="text-3xl font-bold text-gray-900">Offres</h1><button onClick={() => setIsCreatingOffer(true)} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center shadow-lg"><Plus size={18} className="mr-2" /> Créer une offre</button></div>
           <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pt-4"><div className="xl:col-span-3 bg-white rounded-[2.5rem] p-10 border border-gray-100 flex items-center justify-center text-gray-400 font-medium h-80">Aucune offre pour le moment.</div><div className="xl:col-span-1"><MiniCalendar /></div></div>
        </div>
      )}
      {activeMainTab === 'offers' && isCreatingOffer && (
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[calc(100vh-180px)] flex flex-col animate-in slide-in-from-bottom-2 duration-500">
               <div className="px-10 py-6 border-b border-gray-50 flex justify-between items-center"><div className="flex items-center space-x-4"><button onClick={() => setIsCreatingOffer(false)} className="p-2 text-gray-400 hover:text-blue-600"><ArrowLeft size={22} /></button><h2 className="text-xl font-bold text-gray-800">Créer une offre</h2></div></div>
               <div className="flex-1 p-12"><div className="max-w-2xl space-y-6"><h3 className="text-lg font-bold">Titre de l'offre</h3><input type="text" placeholder="Nom de l'offre" className="w-full p-4 border rounded-full" /></div></div>
               <div className="px-10 py-8 border-t border-gray-50 flex justify-end space-x-6"><button onClick={() => setIsCreatingOffer(false)} className="text-gray-400 font-bold">Annuler</button><button onClick={() => toast.success("Offre créée avec succès !")} className="bg-blue-600 text-white px-12 py-3.5 rounded-full font-bold shadow-xl">Continuer</button></div>
          </div>
      )}

      {activeMainTab === 'photos' && !isAddingPhotos && <PhotosListView />}
      {activeMainTab === 'photos' && isAddingPhotos && <AddPhotosView />}
    </div>
  );
};

export default Posts;