//src/components/layout/navbar/SolutionsMegaMenu.tsx

"use client";

import React from 'react';
import { Store, Building2, Scale, Car, Landmark, Sparkles, ShoppingBasket, ShoppingBag, Shirt, Utensils, Stethoscope } from 'lucide-react';
import SolutionSection from './solutions-mega-menu/SolutionSection';
import { IconLinkItem } from '../../../../type';


const SolutionsMegaMenu: React.FC = () => {
  const businessTypes: IconLinkItem[] = [
    { label: 'TPE/PME', icon: <Store />, href: '#' },
    { label: 'Grandes entreprises', icon: <Building2 />, href: '#' },
    { label: 'Secteur public', icon: <Scale />, href: '#' },
  ];

  const industryTypes: IconLinkItem[] = [
    { label: 'Automobile', icon: <Car />, href: '#' },
    { label: 'Banque & Assurance', icon: <Landmark />, href: '#' },
    { label: 'Beauté', icon: <Sparkles />, href: '#' },
    { label: 'Distribution alimentaire', icon: <ShoppingBasket />, href: '#' },
    { label: 'Magasins spécialisés', icon: <ShoppingBag />, href: '#' },
    { label: 'Mode', icon: <Shirt />, href: '#' },
    { label: 'Restauration', icon: <Utensils />, href: '#' },
    { label: 'Santé', icon: <Stethoscope />, href: '#' },
  ];

  return (
    <div className="flex w-[850px]">
      <SolutionSection title="Type d'entreprise" items={businessTypes} />
      <SolutionSection title="Type d'industrie" items={industryTypes} isGrid />
    </div>
  );
};

export default SolutionsMegaMenu;