"use client";

import React from 'react';
import { 
  MessageCircle, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Check,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand & Social Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/logo-visiloo.png"
                    alt="Visiloo Logo"
                    width={77}
                    height={77}
                  />
                </div>
                <span className="text-[32px] font-bold tracking-tight text-[#3d4bbd]">visiloo</span>
              </div>
            </Link>
            
            <p className="text-[#6b7280] text-[15px] leading-relaxed max-w-sm">
              La plateforme marketing local tout-en-un pour centraliser votre présence, 
              booster votre e-réputation et piloter vos réseaux de points de vente.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, label: 'X', href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: '#' },
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Produit Column */}
          <div className="space-y-6">
            <h4 className="text-[#0a1b3d] font-bold text-[16px]">Produit</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Presence Management</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Review Management</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Store Locator</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors font-medium">Tarifs</a></li>
            </ul>
          </div>

          {/* Secteurs Column */}
          <div className="space-y-6">
            <h4 className="text-[#0a1b3d] font-bold text-[16px]">Secteurs</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Réseaux & Enseignes</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Agences Marketing</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">TPE & PME</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Secteur Public</a></li>
            </ul>
          </div>

          {/* Ressources Column */}
          <div className="space-y-6">
            <h4 className="text-[#0a1b3d] font-bold text-[16px]">Ressources</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors font-medium">
                  Blog
                  <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">New</span>
                </a>
              </li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Webinaires</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Études de cas</a></li>
            </ul>
          </div>

          {/* Entreprise Column */}
          <div className="space-y-6">
            <h4 className="text-[#0a1b3d] font-bold text-[16px]">Entreprise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">À propos</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Carrières</a></li>
              <li><a href="#" className="text-[#6b7280] hover:text-blue-600 text-[14px] transition-colors">Partenaires</a></li>
              <li>
                <a href="/contact" className="flex items-center gap-2 text-blue-600 font-bold text-[14px] group">
                  Contactez-nous
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#9ca3af] text-[13px] font-medium order-2 md:order-1">
            © 2024 Visiloo SAS. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="#" className="text-[#9ca3af] hover:text-blue-600 text-[13px] font-medium transition-colors">Confidentialité</a>
            <a href="#" className="text-[#9ca3af] hover:text-blue-600 text-[13px] font-medium transition-colors">CGV</a>
            <a href="#" className="text-[#9ca3af] hover:text-blue-600 text-[13px] font-medium transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;