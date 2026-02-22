"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
    X, ArrowLeft, Store, MapPin, 
    Search, Globe, Phone, Clock, Calendar, ChevronRight, Loader2, Info, Plus, Check, Star, Layout, ChevronDown, Settings
} from 'lucide-react';
import { toast } from 'sonner';

const CreateLocation: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
      name: '',
      category: '',
      address: '',
      city: '',
      zip: '',
      country: 'France',
      phone: '',
      website: '',
      descShort: '',
      descLong: '',
      method: '' as 'manual' | 'import' | '',
      serviceType: '' as 'store' | 'area' | 'hybrid' | ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Mock Google Import
  const handleGoogleImport = () => {
      setLoading(true);
      toast.info("Importation depuis Google en cours...");
      setTimeout(() => {
          setLoading(false);
          setStep(12); // Go to Google Auth step
          toast.success("Importation Google terminée !");
      }, 1500);
  };

  const handleFinalizeCreation = () => {
    toast.success("Fiche validée avec succès !");
    router.push('/app/locations');
  };

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col overflow-y-auto font-sans animate-in fade-in duration-300">
      
      {/* Navbar (Always fixed top) */}
      <div className="flex items-center justify-between px-8 md:px-12 py-6 w-full max-w-7xl mx-auto z-20">
            <button 
                onClick={() => {
                    if (step > 1) {
                        prevStep();
                    } else {
                        router.push('/app/dashboard');
                    }
                }}
                className="p-3 rounded-full bg-white shadow-sm hover:shadow-md text-gray-500 hover:text-gray-700 transition-all border border-gray-100"
            >
                {step === 1 ? <X size={24} /> : <ArrowLeft size={24} />}
            </button>
            
            {/* Minimal Progress Indicator */}
            <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Étape {step} / 13</span>
                <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-500 ease-out rounded-full" style={{ width: `${(step / 13) * 100}%` }}></div>
                </div>
            </div>
      </div>

      {/* Main Content Area - Centered & Full Width */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-8 flex flex-col justify-center min-h-[600px]">
            
            {/* STEP 1: METHOD SELECTION */}
            {step === 1 && (
                <div className="w-full space-y-12 animate-in slide-in-from-bottom-8 fade-in duration-500 text-center">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Sélectionnez une méthode pour <br/>ajouter votre établissement</h2>
                        <p className="text-xl text-gray-500 font-medium">Comment souhaitez-vous ajouter le nouvel établissement ?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4">
                        <button 
                            onClick={handleGoogleImport}
                            className="relative group p-10 bg-white rounded-[2.5rem] border-2 border-gray-100 hover:border-blue-500 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 text-center flex flex-col items-center cursor-pointer overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Importer depuis Google</h3>
                            <p className="text-base text-gray-500 leading-relaxed px-4">Importez votre fiche Google pour en récupérer les informations et confiez-nous sa gestion.</p>
                            {loading && <Loader2 className="mt-6 animate-spin text-blue-500 mx-auto w-8 h-8" />}
                        </button>

                        <button 
                            onClick={() => {
                                setFormData(prev => ({ ...prev, method: 'manual' }));
                                nextStep();
                            }}
                            className="relative group p-10 bg-white rounded-[2.5rem] border-2 border-gray-100 hover:border-blue-500 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 text-center flex flex-col items-center cursor-pointer overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider border border-blue-100">Nouveau</div>
                            <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <div className="relative">
                                    <Store className="w-10 h-10 text-blue-600" />
                                    <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                                        <Plus size={14} className="text-white" strokeWidth={3} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Créer manuellement</h3>
                            <p className="text-base text-gray-500 leading-relaxed px-4">Créez un nouvel établissement et renseignez toutes les informations nécessaires.</p>
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 2: SERVICE TYPE */}
            {step === 2 && (
                <div className="w-full space-y-16 animate-in slide-in-from-right-8 fade-in duration-300 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Comment vos clients accèdent-ils à vos services ?</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                        {/* Option 1: In Store */}
                        <button 
                            onClick={() => { setFormData({...formData, serviceType: 'store'}); nextStep(); }}
                            className="group relative p-8 bg-white rounded-[2rem] border-2 border-gray-100 hover:border-gray-200 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-80 hover:-translate-y-1"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <div className="relative">
                                    <Store className="w-12 h-12 text-gray-700" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"></div>
                                    <div className="absolute top-0 left-0 w-full h-2 bg-pink-400 rounded-full opacity-0"></div> 
                                    <svg className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-4" viewBox="0 0 40 16">
                                        <path d="M0 16C0 16 5 0 20 0C35 0 40 16 40 16" fill="#F472B6" />
                                        <path d="M5 16V6M15 16V6M25 16V6M35 16V6" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Dans mes locaux</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">Mes clients viennent à mon établissement.</p>
                        </button>

                        {/* Option 2: Service Area */}
                        <button 
                            onClick={() => { setFormData({...formData, serviceType: 'area'}); nextStep(); }}
                            className="group relative p-8 bg-white rounded-[2rem] border-2 border-gray-100 hover:border-gray-200 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-80 hover:-translate-y-1"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                                    <MapPin className="w-8 h-8 text-pink-500 fill-pink-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Je me déplace</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">Je me rends chez mes clients.</p>
                        </button>

                        {/* Option 3: Hybrid */}
                        <button 
                            onClick={() => { setFormData({...formData, serviceType: 'hybrid'}); nextStep(); }}
                            className="group relative p-8 bg-white rounded-[2rem] border-2 border-gray-100 hover:border-gray-200 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-80 hover:-translate-y-1"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative">
                                <Store className="w-10 h-10 text-gray-700 absolute left-4 bottom-5" />
                                <div className="absolute right-3 top-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                    <MapPin className="w-6 h-6 text-pink-500 fill-pink-500" />
                                </div>
                                <svg className="absolute top-3 left-3 w-8 h-3" viewBox="0 0 40 16">
                                    <path d="M0 16C0 16 5 0 20 0C35 0 40 16 40 16" fill="#F472B6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Les deux</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">Mes clients viennent à mon établissement et je me rends également chez eux.</p>
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 3: COUNTRY */}
            {step === 3 && (
                <div className="w-full space-y-12 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Dans quel pays se situe votre <br/> établissement ?</h2>
                        <p className="text-xl text-gray-500">Sélectionnez le pays dans lequel se situe votre établissement.</p>
                    </div>
                    
                    <div className="relative text-left max-w-lg mx-auto">
                        <label className="block text-sm font-bold text-blue-600 mb-2 ml-1">Pays *</label>
                        <div className="relative group">
                            <select 
                                value={formData.country}
                                onChange={(e) => setFormData({...formData, country: e.target.value})}
                                className="w-full p-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none cursor-pointer transition-all appearance-none shadow-sm hover:border-blue-300"
                            >
                                <option value="France">France</option>
                                <option value="Belgique">Belgique</option>
                                <option value="Suisse">Suisse</option>
                                <option value="Canada">Canada</option>
                                <option value="Maroc">Maroc</option>
                                <option value="Algérie">Algérie</option>
                            </select>
                            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                                <ChevronDown size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

            {/* STEP 4: NAME */}
            {step === 4 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Entrez le nom de votre <br/> établissement</h2>
                        <p className="text-xl text-gray-500">Saisissez le nom de votre établissement pour vérifier s'il existe déjà.</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl flex items-start space-x-4 text-left max-w-2xl mx-auto shadow-sm">
                        <div className="bg-orange-100 p-1.5 rounded-full mt-0.5">
                            <Info className="text-orange-600" size={18} strokeWidth={3} />
                        </div>
                        <div className="text-sm text-orange-900 leading-relaxed flex-1">
                            <span className="font-bold block mb-1 text-base">Utilisez le nom officiel de votre établissement.</span>
                            Ne saisissez pas d'informations superflues comme la ville ou les horaires.
                        </div>
                        <button className="text-xs font-bold text-orange-700 border border-orange-300 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-colors whitespace-nowrap bg-white">En savoir plus</button>
                    </div>

                    <div className="max-w-xl mx-auto text-left">
                        <label className="block text-xs font-bold text-red-500 uppercase tracking-wider mb-2 ml-1">Nom de l'entreprise *</label>
                        <div className="relative group">
                            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={24} />
                            <input 
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Test SMB PROD"
                                className="w-full pl-14 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                autoFocus
                            />
                        </div>

                        {/* Autocomplete Results */}
                        {formData.name && (
                            <div className="mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2">
                                <div className="p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between transition-colors border-b border-gray-100 group">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mr-4 shadow-sm group-hover:border-blue-200">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5" alt="G" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-base text-gray-900 group-hover:text-blue-700">France Matériaux - SMB</p>
                                            <p className="text-sm text-gray-500">50 Avenue Jean Jaurès</p>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                    onClick={nextStep}
                                    className="p-5 bg-gray-100 hover:bg-blue-50 cursor-pointer flex items-center justify-between transition-colors group"
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                            <Plus size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-base text-gray-900 group-hover:text-blue-700">{formData.name}</p>
                                            <p className="text-sm text-gray-500 group-hover:text-blue-500">Créer un établissement avec ce nom</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-gray-400 group-hover:text-blue-500" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* STEP 5: CATEGORY */}
            {step === 5 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Quelle est votre catégorie ?</h2>
                        <p className="text-xl text-gray-500">Choisissez la catégorie qui décrit le mieux votre activité principale.</p>
                    </div>
                     
                    <div className="max-w-xl mx-auto text-left space-y-6">
                        <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-400 mb-0.5 uppercase tracking-wider">Nom de l'entreprise</label>
                                <div className="font-bold text-xl text-gray-900 flex items-center">
                                    <Search size={18} className="mr-2 text-gray-400" />
                                    {formData.name || 'Test SMB PROD'}
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Check size={16} strokeWidth={3} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-red-500 uppercase tracking-wider mb-2 ml-1">Catégorie principale *</label>
                            <div className="relative">
                                <input 
                                    type="text"
                                    value={formData.category}
                                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    placeholder="Agence d'assurance"
                                    className="w-full px-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>
                             <p className="text-sm text-gray-500 mt-3 ml-1 flex items-start leading-tight">
                                <Info size={16} className="mr-2 flex-shrink-0 text-gray-400 mt-0.5" />
                                La catégorie principale détermine les attributs et services disponibles.
                             </p>
                        </div>

                        <div className="border border-gray-200 rounded-2xl bg-gray-50 overflow-hidden opacity-60 cursor-not-allowed">
                             <div className="p-4 flex justify-between items-center">
                                 <span className="font-bold text-gray-500">Catégories additionnelles</span>
                                 <ChevronDown className="text-gray-400 transform -rotate-90" />
                             </div>
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <button 
                            onClick={nextStep} 
                            disabled={!formData.category} 
                            className="px-12 py-4 bg-[#0F172A] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl disabled:shadow-none hover:-translate-y-0.5"
                        >
                            Continuer
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 6: ADDRESS (FULL SCREEN) */}
             {step === 6 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Saisissez l'adresse de votre <br/> entreprise</h2>
                        <p className="text-xl text-gray-500">Ajoutez une adresse où vos clients peuvent visiter votre établissement en personne.</p>
                    </div>
                    
                    <div className="max-w-xl mx-auto space-y-6 text-left">
                        {/* Country Read-only */}
                        <div className="bg-gray-100 border-2 border-gray-200 p-4 rounded-2xl text-gray-600 font-medium flex justify-between items-center">
                            <div>
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1 block">Pays *</span>
                                <span className="font-bold text-gray-900 text-lg">{formData.country}</span>
                            </div>
                            <button onClick={() => setStep(3)} className="text-blue-600 font-bold text-sm hover:underline bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">Modifier</button>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-red-500 uppercase tracking-wider mb-2 ml-1">Adresse *</label>
                            <div className="relative group">
                                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={24} />
                                <input 
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    placeholder="1 Rue de la Pépinière"
                                    className="w-full pl-14 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Code postal</label>
                                <input 
                                    type="text"
                                    value={formData.zip}
                                    onChange={(e) => setFormData({...formData, zip: e.target.value})}
                                    placeholder="75008"
                                    className="w-full px-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs font-bold text-red-500 uppercase tracking-wider mb-2 ml-1">Ville *</label>
                                <div className="relative">
                                    <input 
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        placeholder="Paris"
                                        className="w-full px-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

            {/* STEP 7: MAP (FULL SCREEN) */}
             {step === 7 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-3xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Où êtes-vous situés ?</h2>
                        <p className="text-xl text-gray-500">Faites glisser et zoomez sur la carte, puis placez le marqueur à l'endroit exact où se trouve votre établissement.</p>
                    </div>
                    
                    <div className="h-[500px] w-full bg-gray-100 rounded-[2.5rem] border-4 border-white shadow-2xl relative overflow-hidden flex items-center justify-center group cursor-move">
                        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] opacity-30 bg-center bg-cover"></div>
                        
                        {/* Fake Google Maps Controls */}
                        <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg flex text-sm font-bold text-gray-600 overflow-hidden border border-gray-200">
                             <div className="px-5 py-3 border-r border-gray-200 hover:bg-gray-50 cursor-pointer">Plan</div>
                             <div className="px-5 py-3 hover:bg-gray-50 cursor-pointer">Satellite</div>
                        </div>
                        <div className="absolute bottom-8 right-8 flex flex-col space-y-3">
                             <div className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50 cursor-pointer text-2xl">+</div>
                             <div className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-50 cursor-pointer text-2xl">-</div>
                        </div>

                        <MapPin size={64} className="text-red-600 drop-shadow-2xl animate-bounce mb-8 filter drop-shadow-lg" fill="#DC2626" />
                        
                        {/* Address Overlay */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 max-w-xs text-left">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Position actuelle</p>
                            <p className="text-sm font-bold text-gray-900 leading-tight">{formData.address}, {formData.city}</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

            {/* STEP 8: CONTACT (FULL SCREEN) */}
            {step === 8 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Quelles coordonnées voulez-vous <br/> partager ?</h2>
                        <p className="text-xl text-gray-500">Indiquez ces informations sur votre fiche pour que vos clients puissent vous contacter.</p>
                    </div>
                    
                    <div className="space-y-8 max-w-xl mx-auto text-left">
                        <div className="relative">
                            <label className="block text-xs font-bold text-red-500 uppercase tracking-wider mb-2 ml-1">Numéro de téléphone *</label>
                            <div className="flex group rounded-2xl shadow-sm border-2 border-gray-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all overflow-hidden bg-white">
                                <div className="flex items-center justify-center w-24 bg-gray-50 border-r border-gray-200 font-bold text-gray-700 text-lg">
                                    <span className="mr-2 text-2xl">🇫🇷</span> +33
                                </div>
                                <input 
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    placeholder="06 12 34 56 78"
                                    className="flex-1 px-6 py-5 bg-white border-none focus:outline-none transition-all font-medium text-xl placeholder-gray-300"
                                />
                            </div>
                            {formData.phone && !formData.phone.match(/^\d{10}$/) && (
                                <p className="text-sm text-red-500 mt-2 font-medium ml-1 flex items-center"><Info size={16} className="mr-1"/> Le format du téléphone n'est pas correct</p>
                            )}
                        </div>

                         <div className="relative">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Site Web (recommandé)</label>
                            <div className="relative">
                                <Globe className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                                <input 
                                    type="url"
                                    value={formData.website}
                                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                                    placeholder="https://www.mon-site.com"
                                    className="w-full pl-14 pr-5 py-5 bg-white border-2 border-gray-200 rounded-2xl text-xl font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none shadow-sm transition-all"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

             {/* STEP 9: HOURS & DATE (FULL SCREEN) */}
             {step === 9 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Ajouter des horaires ou une <br/> date d'ouverture</h2>
                        <p className="text-xl text-gray-500">Indiquez vos horaires d'ouverture actuels ou planifiez une ouverture future.</p>
                    </div>
                    
                    <div className="max-w-xl mx-auto text-left space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Date d'ouverture</label>
                            <div className="relative">
                                <Calendar className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
                                <input type="date" className="w-full pl-14 pr-5 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-xl outline-none font-medium text-gray-600 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm" />
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-extrabold text-gray-900 text-xl">Horaires d'ouverture</h3>
                                <button className="text-xs font-bold text-gray-700 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm bg-white flex items-center">
                                    <Settings size={14} className="mr-2" /> Plage horaire de référence
                                </button>
                            </div>

                            <div className="space-y-3">
                                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map(day => (
                                    <div key={day} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                                        <span className="font-bold text-gray-900 text-lg w-32">{day}</span>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-14 h-8 bg-gray-200 rounded-full relative cursor-pointer transition-colors group-hover:bg-gray-300">
                                                <div className="w-6 h-6 bg-white rounded-full shadow-md border border-gray-200 absolute left-1 top-1 transition-transform"></div>
                                            </div>
                                            <span className="text-sm text-gray-500 font-bold w-12 text-center">Fermé</span>
                                        </div>
                                        <div className="text-gray-300 group-hover:text-blue-500 transition-colors bg-gray-50 group-hover:bg-blue-50 p-2 rounded-lg">
                                            <Plus size={20} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

            {/* STEP 10: DESCRIPTION (FULL SCREEN) */}
            {step === 10 && (
                <div className="w-full space-y-10 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Présentez votre établissement <br/> et ses points forts</h2>
                        <p className="text-xl text-gray-500">Donnez plus d'informations sur votre établissement aux clients.</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl flex items-start space-x-4 text-left max-w-2xl mx-auto shadow-sm">
                        <Info className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm text-orange-900 leading-relaxed">
                            <span className="font-bold text-orange-800 block mb-1">Utilisez des mots-clés pertinents pour décrire votre établissement et ses services.</span>
                            Assurez-vous que la description est claire, concise, et reflète l'essence de votre activité.
                        </div>
                    </div>
                    
                    <div className="space-y-6 max-w-2xl mx-auto text-left">
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-1 focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all shadow-sm">
                            <div className="p-6">
                                <label className="block text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">Description courte</label>
                                <textarea 
                                    value={formData.descShort}
                                    onChange={(e) => setFormData({...formData, descShort: e.target.value})}
                                    maxLength={80}
                                    placeholder="Une phrase d'accroche..."
                                    className="w-full bg-transparent border-none outline-none h-24 resize-none text-gray-900 text-xl font-medium placeholder-gray-300"
                                />
                            </div>
                            <div className="border-t border-gray-100 p-3 text-right text-xs text-gray-400 font-bold bg-gray-50 rounded-b-xl">
                                {formData.descShort.length} / 80
                            </div>
                        </div>

                         <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6">
                            <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Description longue</label>
                            <textarea 
                                value={formData.descLong}
                                onChange={(e) => setFormData({...formData, descLong: e.target.value})}
                                className="w-full bg-transparent border-none outline-none h-48 resize-none text-gray-700 text-lg placeholder-gray-400"
                                placeholder="Racontez votre histoire, décrivez vos services..."
                            />
                        </div>
                    </div>
                    
                    <div className="pt-4">
                        <button onClick={nextStep} className="px-12 py-4 bg-[#0F172A] text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Continuer</button>
                    </div>
                </div>
            )}

             {/* STEP 11: INTERNAL SUCCESS (FULL SCREEN) */}
             {step === 11 && (
                <div className="w-full space-y-12 animate-in zoom-in-95 fade-in duration-500 text-center py-10 max-w-2xl mx-auto flex flex-col justify-center items-center">
                     <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center mb-4 relative border-4 border-white shadow-2xl">
                         <div className="absolute top-2 right-2 text-6xl animate-bounce">🎉</div>
                         <div className="relative">
                             <div className="w-24 h-24 bg-[#0F172A] rounded-3xl flex items-center justify-center shadow-xl rotate-12">
                                 <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                             </div>
                             {/* Partoo Logo Mock */}
                             <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 font-bold text-gray-900 text-3xl flex items-center whitespace-nowrap">
                                <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div> partoo
                             </span>
                         </div>
                     </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold text-gray-900 leading-tight">Votre business a été créé avec <br/> succès sur Partoo !</h2>
                        <p className="text-gray-500 leading-relaxed text-xl font-medium max-w-xl mx-auto">
                            Vous avez déjà terminé l'étape la plus importante ! Il ne reste plus qu'à maximiser votre présence en ligne en créant une fiche Google.
                        </p>
                    </div>
                    
                    <div className="pt-8 space-y-6 w-full max-w-md">
                        <button 
                            onClick={nextStep}
                            className="w-full py-5 bg-blue-600 text-white font-bold text-xl rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1"
                        >
                            Créer ma fiche Google
                        </button>
                        
                        <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-left shadow-sm hover:border-gray-200 transition-colors cursor-pointer group" onClick={() => router.push('/app/locations')}>
                             <p className="text-sm font-bold text-gray-900 mb-2">Vous ne désirez pas associer votre établissement à Google ?</p>
                             <div className="text-blue-600 text-sm font-bold group-hover:underline flex items-center">
                                Créer uniquement sur Partoo <ArrowLeft size={16} className="ml-1 rotate-180" />
                             </div>
                        </div>
                    </div>
                </div>
            )}

            {/* STEP 12: GOOGLE AUTH MOCK (FULL SCREEN) */}
             {step === 12 && (
                <div className="w-full space-y-12 animate-in slide-in-from-right-8 fade-in duration-300 text-center max-w-2xl mx-auto">
                     <div className="space-y-6">
                        <div className="flex justify-center mb-2">
                            <span className="text-5xl font-bold text-gray-300 tracking-tight">Google</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">Sélectionnez votre compte Google</h2>
                        <p className="text-xl text-gray-500">Choisissez le compte Google où vous souhaitez créer la fiche de votre établissement.</p>
                    </div>
                    
                    <div className="space-y-4">
                        <div 
                            onClick={nextStep}
                            className="bg-white p-6 rounded-3xl flex items-center justify-between border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className="flex items-center space-x-5">
                                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                                    J
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-blue-600 font-bold uppercase mb-1 bg-blue-50 inline-block px-2 py-0.5 rounded-md">Compte connecté</p>
                                    <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">jean.dupont@gmail.com</p>
                                </div>
                            </div>
                            <ChevronRight size={24} className="text-gray-300 group-hover:text-blue-500" />
                        </div>

                        <div className="bg-gray-50 p-6 rounded-3xl flex items-center justify-between border-2 border-transparent hover:bg-white hover:border-gray-200 transition-colors cursor-pointer text-gray-500 hover:text-gray-900">
                             <span className="font-bold ml-2">Utiliser un autre compte</span>
                             <Plus size={24} />
                        </div>
                    </div>

                    <div className="pt-8">
                        <button 
                            onClick={nextStep} 
                            className="px-12 py-4 bg-[#0F3D78] text-white font-bold text-lg rounded-2xl hover:bg-[#0A2A54] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                        >
                            Confirmer la création
                        </button>
                    </div>
                </div>
            )}

            {/* STEP 13: FINAL SUCCESS (FULL SCREEN) */}
             {step === 13 && (
                <div className="w-full space-y-12 animate-in zoom-in-95 fade-in duration-500 text-center py-16 flex flex-col items-center justify-center h-full max-w-3xl mx-auto">
                     <div className="relative w-64 h-64 mx-auto mb-8 bg-gradient-to-tr from-yellow-50 to-orange-50 rounded-full flex items-center justify-center overflow-visible border-4 border-white shadow-2xl">
                         <div className="text-[8rem] filter drop-shadow-sm animate-bounce">🥳</div>
                         <div className="absolute -top-4 -right-10 transform rotate-12 text-6xl">🎉</div>
                         <div className="absolute bottom-0 -left-4 transform -rotate-12 text-6xl">✨</div>
                     </div>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-extrabold text-[#0F172A] leading-tight">Votre fiche est prête ! <br/>Validez-la pour être visible.</h2>
                        <p className="text-gray-500 leading-relaxed font-medium text-xl max-w-2xl mx-auto">
                            Félicitations ! Votre fiche Google est prête à être publiée. Il ne vous reste plus qu'à la valider pour apparaître dans les résultats de recherche.
                        </p>
                    </div>
                    
                    <div className="pt-12 w-full max-w-sm">
                        <button 
                            onClick={handleFinalizeCreation}
                            className="w-full py-5 bg-[#0F3D78] text-white font-bold text-xl rounded-2xl hover:bg-[#0A2A54] transition-all shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                        >
                            Valider ma fiche maintenant
                        </button>
                        <p className="text-gray-400 text-sm mt-4 font-medium">Cela ne prendra que quelques secondes.</p>
                    </div>
                </div>
            )}

      </div>
    </div>
  );
};

export default CreateLocation;