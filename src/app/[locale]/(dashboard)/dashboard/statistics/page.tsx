"use client";

import React, { useState } from 'react';
import { Download, User, Eye, MousePointer, Phone, Filter, Info, ChevronUp, ChevronDown, Search, Trophy, MapPin, Calendar, HelpCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { StatCard } from '../_components/StatCard';


const OVERVIEW_DATA = [
  { name: 'Jan', vues: 4000, clics: 2400 },
  { name: 'Fév', vues: 3000, clics: 1398 },
  { name: 'Mars', vues: 2000, clics: 9800 },
  { name: 'Avr', vues: 2780, clics: 3908 },
  { name: 'Mai', vues: 1890, clics: 4800 },
  { name: 'Juin', vues: 2390, clics: 3800 },
];

const REVIEWS_DATA = [
  { name: 'Jan', rating: 4.5, count: 12 },
  { name: 'Fév', rating: 4.2, count: 19 },
  { name: 'Mars', rating: 4.8, count: 3 },
  { name: 'Avr', rating: 3.9, count: 5 },
  { name: 'Mai', rating: 4.6, count: 20 },
  { name: 'Juin', rating: 4.9, count: 35 },
];

// Mock data strictly matching the screenshot structure
const COMPETITORS_LIST = [
    { 
        id: 1, 
        name: 'Leclerc', 
        shareOfVoice: 68, 
        position: 1, 
        evolution: 1, // +1
        reviews: 302, 
        rating: 4.6, 
        color: '#3b82f6', // blue
        isUser: false 
    },
    { 
        id: 2, 
        name: 'Carrefour', 
        shareOfVoice: 37, 
        position: 4, 
        evolution: -3, // -3
        reviews: 198, 
        rating: 4.4, 
        color: '#1e293b', // dark
        isUser: true // This will highlight the row
    },
    { 
        id: 3, 
        name: 'Intermarché', 
        shareOfVoice: 39, 
        position: 6, 
        evolution: 3, // +3
        reviews: 371, 
        rating: 4.2, 
        color: '#8b5cf6', // purple
        isUser: false 
    },
    { 
        id: 4, 
        name: 'Auchan', 
        shareOfVoice: 78, 
        position: 9, 
        evolution: 1, // +1
        reviews: 459, 
        rating: 3.9, 
        color: '#f59e0b', // yellow/orange
        isUser: false 
    },
    { 
        id: 5, 
        name: 'Super U', 
        shareOfVoice: 18, 
        position: 14, 
        evolution: -6, // -6
        reviews: 398, 
        rating: 3.8, 
        color: '#94a3b8', // gray
        isUser: false 
    }
];

const Statistics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'visibility' | 'reviews' | 'comparison'>('comparison');
  const [keyword, setKeyword] = useState('Supermarché');
  const [comparisonMetric, setComparisonMetric] = useState<'position' | 'reviews' | 'rating'>('position');

  const renderContent = () => {
    switch (activeTab) {
        case 'overview':
            return (
                <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard title="Vues sur la recherche" value="14,234" change="+12.5%" changeType="positive" icon={Eye} />
                        <StatCard title="Clics vers le site" value="3,456" change="+5.2%" changeType="positive" icon={MousePointer} />
                        <StatCard title="Appels" value="892" change="-2.1%" changeType="negative" icon={Phone} />
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px]">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Évolution du trafic</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={OVERVIEW_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                                <Tooltip />
                                <Line type="monotone" dataKey="vues" stroke="#3b82f6" strokeWidth={3} dot={false} />
                                <Line type="monotone" dataKey="clics" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            );
        case 'visibility':
            return (
                 <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Mots-clés principaux</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center text-sm mb-1"><span className="text-gray-600">boulangerie lyon</span><span className="font-bold">1,230 vues</span></div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[80%]"></div></div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between items-center text-sm mb-1"><span className="text-gray-600">meilleur croissant</span><span className="font-bold">850 vues</span></div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-blue-400 h-full w-[60%]"></div></div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center text-sm mb-1"><span className="text-gray-600">sandwicherie</span><span className="font-bold">600 vues</span></div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="bg-blue-300 h-full w-[40%]"></div></div>
                                </div>
                            </div>
                         </div>
                         <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-40 h-40 rounded-full border-[12px] border-blue-500 border-r-blue-100 mx-auto mb-6 flex items-center justify-center relative">
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-gray-900 block">75%</span>
                                        <span className="text-xs text-gray-500">Direct</span>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-6">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div> Direct
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="w-3 h-3 bg-blue-100 rounded-full mr-2"></div> Découverte
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            );
        case 'reviews':
             return (
                 <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[400px] animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-900">Volume d'avis par mois</h3>
                        <div className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">Note moyenne: <span className="text-gray-900 font-bold">4.6/5</span></div>
                    </div>
                    <ResponsiveContainer width="100%" height="85%">
                        <BarChart data={REVIEWS_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                            <Tooltip cursor={{fill: '#f3f4f6'}} />
                            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
            );
        case 'comparison':
        default:
            return (
                <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
                    
                    {/* Left Sidebar Menu - Metric Selectors */}
                    <div className="w-full lg:w-60 h-fit flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 space-y-1">
                            <button 
                                onClick={() => setComparisonMetric('position')}
                                className={`w-full text-left px-4 py-3 font-bold text-sm rounded-xl flex justify-between items-center transition-all ${
                                    comparisonMetric === 'position' 
                                    ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100' 
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                Position
                                {comparisonMetric === 'position' && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                            </button>
                            
                            <button 
                                onClick={() => setComparisonMetric('reviews')}
                                className={`w-full text-left px-4 py-3 font-bold text-sm rounded-xl flex justify-between items-center transition-all ${
                                    comparisonMetric === 'reviews' 
                                    ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100' 
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                Nombre d'avis
                                {comparisonMetric === 'reviews' && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                            </button>
                            
                            <button 
                                onClick={() => setComparisonMetric('rating')}
                                className={`w-full text-left px-4 py-3 font-bold text-sm rounded-xl flex justify-between items-center transition-all ${
                                    comparisonMetric === 'rating' 
                                    ? 'bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100' 
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                Note moyenne
                                {comparisonMetric === 'rating' && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>}
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 space-y-6">
                        
                        {/* Custom Filter Bar matching Screenshot */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Keyword Filter Badge */}
                            <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm flex items-center space-x-2 min-w-[220px]">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap">Mot clé :</span>
                                <input 
                                    type="text" 
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    className="text-sm font-bold text-gray-900 bg-transparent outline-none w-full"
                                />
                            </div>

                            {/* Establishment Filter Badge */}
                            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm flex items-center justify-between space-x-3 text-sm font-bold text-gray-700 hover:border-blue-300 transition-colors">
                                <span>Tous les établissements</span>
                                <ChevronDown size={16} className="text-gray-400" />
                            </button>

                            {/* Date Filter Badge */}
                            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm flex items-center space-x-2 text-sm font-bold text-gray-700 hover:border-blue-300 transition-colors">
                                <Calendar size={16} className="text-gray-400" />
                                <span>Décembre 2023</span>
                            </button>

                            {/* Comparison Filter Badge */}
                            <button className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm flex items-center space-x-2 text-sm font-bold text-gray-700 hover:border-blue-300 transition-colors">
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mr-1">Comparer à :</span>
                                <span>Mois précédent</span>
                                <ChevronDown size={16} className="text-gray-400 ml-1" />
                            </button>
                            
                            <div className="ml-auto">
                                <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Competitors List Table */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            {/* Table Header */}
                            <div className="grid grid-cols-12 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="col-span-5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nom</div>
                                <div className="col-span-2 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-center cursor-pointer hover:text-gray-600">
                                    Position <ChevronDown size={12} className="ml-1" />
                                </div>
                                <div className="col-span-3 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-center cursor-pointer hover:text-gray-600">
                                    Avis <ChevronDown size={12} className="ml-1" />
                                </div>
                                <div className="col-span-2 text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-end cursor-pointer hover:text-gray-600">
                                    Note <ChevronDown size={12} className="ml-1" />
                                </div>
                            </div>

                            {/* Table Body */}
                            <div className="divide-y divide-gray-50">
                                {COMPETITORS_LIST.map((comp) => (
                                    <div 
                                        key={comp.id} 
                                        className={`grid grid-cols-12 items-center px-6 py-5 transition-all hover:bg-gray-50/50 ${
                                            comp.isUser ? 'bg-yellow-50/60 hover:bg-yellow-50' : ''
                                        }`}
                                    >
                                        {/* Name & Share of Voice */}
                                        <div className="col-span-5 flex items-start">
                                            <div 
                                                className="w-4 h-4 rounded-sm mr-4 mt-1 flex-shrink-0" 
                                                style={{ backgroundColor: comp.color }}
                                            ></div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-1">
                                                    {comp.name}
                                                </h4>
                                                <div className="flex items-center text-xs text-gray-500 font-medium">
                                                    {comp.shareOfVoice}% d'apparition
                                                    <Info size={12} className="text-gray-300 ml-1.5 cursor-help" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Position & Evolution */}
                                        <div className="col-span-2 flex items-center justify-center">
                                            <span className="text-base font-bold text-gray-900 mr-3">{comp.position}</span>
                                            {comp.evolution > 0 ? (
                                                <span className="flex items-center text-[11px] font-bold text-green-600">
                                                    <ChevronUp size={14} className="stroke-[4] mr-0.5" /> {Math.abs(comp.evolution)}
                                                </span>
                                            ) : comp.evolution < 0 ? (
                                                <span className="flex items-center text-[11px] font-bold text-red-500">
                                                    <ChevronDown size={14} className="stroke-[4] mr-0.5" /> {Math.abs(comp.evolution)}
                                                </span>
                                            ) : (
                                                <span className="text-[11px] font-bold text-gray-300 ml-1">-</span>
                                            )}
                                        </div>

                                        {/* Reviews */}
                                        <div className="col-span-3 text-center">
                                            <span className="text-sm font-medium text-gray-600">{comp.reviews}</span>
                                        </div>

                                        {/* Rating */}
                                        <div className="col-span-2 text-right">
                                            <span className={`text-base font-bold ${
                                                comp.rating >= 4.5 ? 'text-green-600' : 
                                                comp.rating >= 4.0 ? 'text-green-500' : 
                                                'text-yellow-600'
                                            }`}>
                                                {comp.rating.toString().replace('.', ',')}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
      </div>

      <div className="flex space-x-8 border-b border-gray-200 text-sm font-medium text-gray-500">
        <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-3 hover:text-gray-700 transition-colors ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-600 font-bold' : ''}`}
        >
            Vue d'ensemble
        </button>
        <button 
            onClick={() => setActiveTab('visibility')}
            className={`pb-3 hover:text-gray-700 transition-colors ${activeTab === 'visibility' ? 'border-b-2 border-blue-500 text-blue-600 font-bold' : ''}`}
        >
            Visibilité
        </button>
        <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-3 hover:text-gray-700 transition-colors ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-600 font-bold' : ''}`}
        >
            Avis
        </button>
        <button 
            onClick={() => setActiveTab('comparison')}
            className={`pb-3 hover:text-gray-700 transition-colors ${activeTab === 'comparison' ? 'border-b-2 border-blue-500 text-blue-600 font-bold' : ''}`}
        >
            Comparaison
        </button>
      </div>

      {activeTab !== 'comparison' && (
      <div className="flex flex-wrap gap-4 items-center">
         <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center justify-between min-w-[200px] shadow-sm hover:border-gray-300 transition-colors">
            Tous les établissements <span className="text-gray-400 ml-2">›</span>
         </button>

         <div className="bg-white border border-gray-200 rounded-lg p-1 flex items-center shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
             <div className="px-3 py-1">
                <p className="text-[10px] text-gray-500 uppercase font-bold flex items-center">Période</p>
                <p className="text-sm font-bold text-gray-900 flex items-center">📅 Décembre 2023</p>
             </div>
         </div>

         <div className="bg-white border border-gray-200 rounded-lg p-1 flex items-center shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
             <div className="px-3 py-1">
                <p className="text-[10px] text-gray-500 uppercase font-bold flex items-center">Comparer à</p>
                <p className="text-sm font-bold text-gray-900 flex items-center">Mois précédent ▼</p>
             </div>
         </div>
         
         <div className="ml-auto">
             <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
                <Download size={18} />
             </div>
         </div>
      </div>
      )}

      {renderContent()}
    </div>
  );
};

export default Statistics;