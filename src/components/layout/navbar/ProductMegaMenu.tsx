"use client";

import React from 'react';
import { Globe, Store, Star, MessageSquareQuote, BarChart, MessageCircle, MessageSquare, Sparkles } from 'lucide-react';
import FeatureSection from './product-mega-menu/FeatureSection';
import JimAIPanel from './product-mega-menu/JimAIPanel';
import { IconLinkItem, JimAIFeature } from '../../../../type';


const ProductMegaMenu: React.FC = () => {
  const visibilityFeatures: IconLinkItem[] = [
    { label: 'Presence Management', icon: <Globe />, href: '#' },
    { label: 'Store Locator', icon: <Store />, href: '#' },
  ];

  const reputationFeatures: IconLinkItem[] = [
    { label: 'Review Management', icon: <Star />, href: '#' },
    { label: 'Feedback Management', icon: <MessageSquareQuote />, href: '#' },
    { label: 'Benchmark Concurrentiel', icon: <BarChart />, href: '#' },
  ];

  const messagingFeatures: IconLinkItem[] = [
    { label: 'Messages', icon: <MessageCircle />, href: '#' },
    { label: 'Visiloo Chat', icon: <MessageSquare />, href: '#' },
    { label: 'Chatbot IA', icon: <Sparkles />, href: '#' },
  ];

  const jimAIFeatures: JimAIFeature[] = [
    { text: 'Assistant IA pour les avis' },
    { text: 'Agent IA pour les messages' },
    { text: 'Intègre FAQ et Local Data' },
    { text: 'Prompts personnalisés' },
  ];

  return (
    <div className="flex w-[1100px]">
      <FeatureSection
        title="Visibilité"
        items={visibilityFeatures}
        iconBgColor="bg-[#00a3ff]/10"
        iconColor="text-[#00a3ff]"
      />
      <div className="border-l border-gray-100" />
      <FeatureSection
        title="Réputation"
        items={reputationFeatures}
        iconBgColor="bg-[#ff9900]/10"
        iconColor="text-[#ff9900]"
      />
      <div className="border-l border-gray-100" />
      <FeatureSection
        title="Messageries"
        items={messagingFeatures}
        iconBgColor="bg-[#4ade80]/10"
        iconColor="text-[#4ade80]"
      />
      <div className="border-l border-gray-100" />
      <JimAIPanel
        features={jimAIFeatures}
        ctaText="En savoir plus"
        ctaHref="#"
      />
    </div>
  );
};

export default ProductMegaMenu;