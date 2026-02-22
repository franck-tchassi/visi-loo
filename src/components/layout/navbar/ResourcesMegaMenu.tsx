//src/components/layout/navbar/ResourcesMegaMenu.tsx

"use client";

import React from 'react';
import { PlayCircle, History, Video, Youtube, Mic2 } from 'lucide-react';
import ResourceLinksSection from './resources-mega-menu/ResourceLinksSection';
import FeaturedResourceCard from './resources-mega-menu/FeaturedResourceCard';
import { ResourceLinkItem } from '../../../../type';


const ResourcesMegaMenu: React.FC = () => {
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

  const featuredCard = {
    title: 'Baromètre 2025',
    description: 'Découvrez une analyse détaillée de la présence et des avis des grandes marques et enseignes sur Google !',
    ctaText: "Télécharger l'étude complète",
    ctaHref: '#',
  };

  return (
    <div className="flex w-[1050px]">
      <ResourceLinksSection title="Ressources" items={resourceLinksCol1} />
      <ResourceLinksSection title="Découvrir" items={resourceLinksCol2} />
      <FeaturedResourceCard
        title={featuredCard.title}
        description={featuredCard.description}
        ctaText={featuredCard.ctaText}
        ctaHref={featuredCard.ctaHref}
      />
    </div>
  );
};

export default ResourcesMegaMenu;