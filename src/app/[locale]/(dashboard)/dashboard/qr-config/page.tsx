"use client";

import React, { useState } from 'react';
import { ArrowLeft, Download, Check, Star, Smartphone, Type, Palette, Layout, Link as LinkIcon, Sparkles, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const QrConfig: React.FC = () => {
  const router = useRouter();

  // Poster Config State
  const [posterConfig, setPosterConfig] = useState({
    color: '#2563EB', // Premium Blue
    link: 'visiloo',
    title: 'Votre avis compte !',
    description: 'Scannez le code pour partager votre expérience en quelques secondes.',
    showFooter: true,
    format: 'A4'
  });

  // Premium Colors Palette
  const BRAND_COLORS = [
    '#2563EB', // Royal Blue
    '#0F172A', // Slate Dark
    '#7C3AED', // Violet
    '#DB2777', // Pink
    '#DC2626', // Red
    '#EA580C', // Orange
    '#059669', // Emerald
    '#0D9488', // Teal
    'custom'   // Gradient placeholder
  ];

  const handleDownloadPdf = () => {
    toast.info("Téléchargement du PDF non implémenté.");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-slate-50 overflow-hidden font-sans">
      
      {/* 1. Top Bar - Actions */}
      <div className="h-16 px-6 bg-white border-b border-gray-200 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center">
            <button 
                onClick={() => router.back()} 
                className="mr-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
                <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg font-bold text-gray-800">Générateur d'affiche</h1>
        </div>
        <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-400 font-medium mr-2 hidden sm:block">Aperçu en temps réel</span>
            <button 
                onClick={handleDownloadPdf}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg shadow-lg shadow-slate-200 transition-all flex items-center transform hover:-translate-y-0.5"
            >
                <Download size={16} className="mr-2" />
                Télécharger PDF
            </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
          
          {/* 2. LEFT PANEL - Configuration (Scrollable) */}
          <div className="w-[380px] bg-white border-r border-gray-200 overflow-y-auto custom-scrollbar shrink-0 z-10 flex flex-col">
              <div className="p-6 space-y-8">
                
                {/* Section: Colors */}
                <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                        <Palette size={14} className="mr-2" /> Identité Visuelle
                    </h3>
                    <div className="grid grid-cols-5 gap-3">
                        {BRAND_COLORS.map((color, idx) => (
                            <button 
                                key={idx}
                                onClick={() => color !== 'custom' && setPosterConfig(prev => ({...prev, color}))}
                                className={`w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center relative group ${
                                    posterConfig.color === color 
                                    ? 'ring-2 ring-offset-2 ring-blue-600 scale-110 shadow-md' 
                                    : 'hover:scale-105 border border-gray-100'
                                }`}
                                style={{
                                    backgroundColor: color === 'custom' ? 'transparent' : color,
                                    background: color === 'custom' ? 'linear-gradient(to right, #2563EB, #7C3AED)' : undefined
                                }}
                            >
                                {posterConfig.color === color && <Check size={16} className="text-white" />}
                            </button>
                        ))}
                    </div>
                </div>
              </div>
          </div>
          {/* Main Preview Area Placeholder */}
          <div className="flex-1 flex items-center justify-center p-8 bg-slate-200 overflow-y-auto">
              <div className="bg-white shadow-2xl p-12 rounded-lg max-w-lg w-full aspect-[1/1.4] flex flex-col items-center justify-center text-center">
                  <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-8">
                    <span className="text-gray-400 font-bold">QR CODE</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: posterConfig.color }}>{posterConfig.title}</h2>
                  <p className="text-gray-500 font-medium">{posterConfig.description}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default QrConfig;