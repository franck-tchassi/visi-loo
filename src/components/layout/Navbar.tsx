// src/components/layout/Navbar.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Logo from './navbar/Logo';
import LanguageSwitcher from './navbar/LanguageSwitcher';
import AuthButtons from './navbar/AuthButtons';
import MobileMenuToggle from './navbar/MobileMenuToggle';
import DesktopNavLinks from './navbar/DesktopNavLinks';
import MobileSidebar from './navbar/MobileSidebar';
import { NavItem, Language, IconLinkItem, ResourceLinkItem } from '../../../type';
import { Store, Building2, Scale, Car, Landmark, Sparkles, ShoppingBasket, ShoppingBag, Shirt, Utensils, Stethoscope, PlayCircle, History, Video, Youtube, Mic2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>({ code: 'fr', label: 'French' });
  // isDesktopMenuOpen state is no longer needed as NavigationMenu handles its own open/close state

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]); // Removed isDesktopMenuOpen from dependency array

  const languages: Language[] = [
    { code: 'pl', label: 'Polish' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'German' },
    { code: 'fr', label: 'French' },
    { code: 'es', label: 'Spanish' },
    { code: 'pt-br', label: 'Portuguese (Brazil)' },
  ];

  const navItems: NavItem[] = [
    { label: 'Fonctionnalité', hasDropdown: true, type: 'mega', id: 'product' },
    { label: 'Secteurs', hasDropdown: true, type: 'mega', id: 'solutions' },
    { label: 'Ressources', hasDropdown: true, type: 'mega', id: 'resources' },
    { label: 'Pricing', hasDropdown: false, type: 'simple', id: 'pricing', href: '/pricing' },
  ];

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

  const resourceLinksCol1: ResourceLinkItem[] = [
    { label: 'Témoignages Grandes Entreprises', href: '#' },
    { label: 'Témoignages TPE/PME', href: '#' },
    { label: 'Guides pratiques', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Livres blancs', href: '#' },
    { label: 'Baromètres', href: '#' },
  ];

  const resourceLinksCol2: ResourceLinkItem[] = [
    { label: 'Visite guidée de l’app Visiloo', icon: <PlayCircle />, href: '#' },
    { label: 'Nouveautés de l’app Visiloo', icon: <History />, href: '#' },
    { label: 'Événements & Webinaires', icon: <Video />, href: '#' },
    { label: 'Visiloo sur YouTube', icon: <Youtube />, href: '#' },
    { label: 'Podcast "Marketing Stories"', icon: <Mic2 />, href: '#' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 h-[72px] flex items-center shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            <Logo />
            <DesktopNavLinks navItems={navItems} />
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher
              languages={languages}
              selectedLang={selectedLang}
              onSelectLang={setSelectedLang}
            />
            <AuthButtons />
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </nav>
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        languages={languages}
        businessTypes={businessTypes}
        industryTypes={industryTypes}
        resourceLinksCol1={resourceLinksCol1}
        resourceLinksCol2={resourceLinksCol2}
      />
    </>
  );
};

export default Navbar;