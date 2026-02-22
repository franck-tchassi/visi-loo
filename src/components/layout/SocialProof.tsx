"use client";

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dorota Hucał",
    role: "Nutritionniste",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    text: "J'apprécie beaucoup les conseils détaillés sur la mise à jour de mon profil d'entreprise et les mots-clés à utiliser. Un outil très utile !",
    visual: "mixed"
  },
  {
    id: 2,
    name: "Steven",
    role: "Gérant, Triangular Force",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    text: "J'utilise la plateforme depuis seulement quelques semaines et la montée dans les classements est vraiment impressionnante.",
    visual: "none"
  },
  {
    id: 3,
    name: "Katarzyna Dobrzyńska",
    role: "Directrice, PH Promoto",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    text: "En deux jours, nous étions #1 sur Google pour les mots-clés qui nous intéressaient dans presque toute la ville ! Impressionnant.",
    visual: "success"
  },
  {
    id: 4,
    name: "Marc Weber",
    role: "Restaurateur, Le Gourmet",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    text: "Visiloo a simplifié la gestion de mes avis. Je gagne 2h par semaine et ma note moyenne est passée de 4.1 à 4.7 en trois mois.",
    visual: "success"
  },
  {
    id: 5,
    name: "Sophie Martin",
    role: "Coiffeuse, Studio 12",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    stars: 5,
    text: "L'interface est super intuitive. J'adore la fonctionnalité de posts automatiques qui garde ma fiche Google active sans effort.",
    visual: "mixed"
  }
];


export const SocialProof: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const getVisibleCards = () => {
    if (isMobile) return [activeIndex];
    
    const prev = (activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    const next = (activeIndex + 1) % TESTIMONIALS.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleCards();

  return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative overflow-hidden">
        {/* Background blobs - subtler */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-50/40 rounded-full mix-blend-multiply filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-4xl mx-auto mb-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Ce que nos clients disent de nous
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                    Découvrez comment Visiloo aide des entreprises de toutes tailles à exceller en ligne.
                </p>
                
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-[1200px] mx-auto">
                
                {/* Navigation Arrows (Desktop) */}
                <button 
                    onClick={prevSlide}
                    className="hidden cursor-pointer lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white text-slate-400 hover:text-blue-600 rounded-full shadow-md border border-slate-100 items-center justify-center hover:scale-105 transition-all duration-300"
                >
                    <ChevronLeft size={20} />
                </button>

                <button 
                    onClick={nextSlide}
                    className="hidden cursor-pointer lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white text-slate-400 hover:text-blue-600 rounded-full shadow-md border border-slate-100 items-center justify-center hover:scale-105 transition-all duration-300"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Cards Container */}
                <div className="flex justify-center items-center h-[420px] relative perspective-1000">
                    {visibleIndices.map((index, i) => {
                        const testimonial = TESTIMONIALS[index];
                        const isActive = index === activeIndex;
                        
                        let containerClass = "transition-all duration-500 ease-out absolute top-1/2 -translate-y-1/2";
                        
                        if (isActive) {
                            containerClass += " z-30 scale-100 opacity-100";
                        } else if (i === 0) { // Left card
                            containerClass += " z-10 scale-90 opacity-40 -translate-x-[55%] blur-[0.5px] cursor-pointer hover:opacity-60";
                        } else { // Right card
                            containerClass += " z-10 scale-90 opacity-40 translate-x-[55%] blur-[0.5px] cursor-pointer hover:opacity-60";
                        }
                        
                        if(isMobile) {
                            containerClass = "w-full px-4 relative";
                        }

                        return (
                            <div 
                                key={testimonial.id} 
                                onClick={() => !isActive && goToSlide(index)}
                                className={containerClass}
                                style={{ width: isMobile ? '100%' : '460px' }}
                            >
                                <div className={`bg-white rounded-3xl p-8 h-full flex flex-col relative transition-all duration-500 ${isActive ? 'shadow-xl shadow-blue-100/50 border border-blue-200' : 'shadow-md border border-gray-50'}`}>
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-8 opacity-[0.03]">
                                        <Quote size={80} className="text-slate-900 fill-current" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex space-x-1 mb-6">
                                        {[...Array(5)].map((_, starIdx) => (
                                            <Star key={starIdx} size={16} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    
                                    {/* Text */}
                                    <p className={`text-slate-600 leading-relaxed mb-8 flex-1 font-medium ${isActive ? 'text-base' : 'text-sm'}`}>
                                        "{testimonial.text}"
                                    </p>
                                    
                                    {/* Content Row: Visual + Profile */}
                                    <div className="flex items-end justify-between mt-auto gap-4">
                                        <div className="flex items-center">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name} 
                                                className={`rounded-full object-cover ring-2 ring-white shadow-sm ${isActive ? 'w-10 h-10' : 'w-8 h-8'}`} 
                                            />
                                            <div className="ml-3">
                                                <h4 className={`font-bold text-slate-900 ${isActive ? 'text-sm' : 'text-xs'}`}>{testimonial.name}</h4>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{testimonial.role}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-2 mt-8">
                {TESTIMONIALS.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${
                            idx === activeIndex 
                            ? 'w-8 h-1.5 bg-slate-800' 
                            : 'w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

        </div>
      </section>
  );
};