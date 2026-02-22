'use client';

import React from 'react';
import { Star, StarHalf, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-24 px-4 sm:px-8 mt-[72px]"> {/* Added mt-[72px] to push content below fixed navbar */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        

        {/* Main Headline - Correct sizing matching the image proportions */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#333] tracking-tight leading-[1.15] mb-8 max-w-3xl">
          Centralisez votre présence en ligne et boostez votre visibilité locale.
        </h1>

        {/* Sub-headline - Balanced and readable */}
        <p className="text-[17px] md:text-[18px] text-[#4b5563] max-w-2xl mx-auto mb-14 leading-[1.6]">
          Solution complète pour gérer vos canaux, générer plus d’avis clients et publier du contenu IA.
        </p>
          
        {/* Main CTA Button - Electric Blue matching reference with requested text */}
        <button className="group cursor-pointer flex items-center gap-2 bg-[#2152ff] hover:bg-[#1a41cc] text-white px-8 py-4 rounded-lg text-[16px] font-bold transition-all hover:translate-y-[-1px] shadow-lg shadow-blue-500/10">
          Essayez 3 jours gratuit
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};

export default Hero;