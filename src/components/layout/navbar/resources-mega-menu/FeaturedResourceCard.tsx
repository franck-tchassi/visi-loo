"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedResourceCardProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const FeaturedResourceCard: React.FC<FeaturedResourceCardProps> = ({ title, description, ctaText, ctaHref }) => (
  <div className="w-[380px] p-10 bg-white flex flex-col">
    <div className="rounded-2xl overflow-hidden bg-[#eef6ff] p-4 mb-6 relative aspect-[16/10] flex items-center justify-center">
       <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[140px] h-[180px] bg-[#0a1b3d] rounded-lg shadow-2xl rotate-[-12deg] translate-x-[-10px] border border-white/20 p-4 flex flex-col justify-end">
            <div className="h-1 w-8 bg-blue-400 mb-2"></div>
            <div className="text-[8px] text-white/50 font-bold uppercase tracking-widest">Baromètre 2025</div>
          </div>
          <div className="absolute w-[140px] h-[180px] bg-[#1a237e] rounded-lg shadow-2xl rotate-[8deg] translate-x-[20px] border border-white/20 p-4 flex flex-col justify-end">
            <div className="h-1 w-8 bg-blue-400 mb-2"></div>
            <div className="text-[8px] text-white/50 font-bold uppercase tracking-widest">Baromètre 2025</div>
          </div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-blue-600 shadow-sm">visiloo</div>
       </div>
    </div>
    <h4 className="text-[#0a1b3d] font-extrabold text-xl mb-3">{title}</h4>
    <p className="text-[#4b5563] text-[14px] leading-relaxed mb-6">
      {description}
    </p>
    <a href={ctaHref} className="text-blue-600 font-bold text-[15px] flex items-center gap-2 group">
      {ctaText}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

export default FeaturedResourceCard;