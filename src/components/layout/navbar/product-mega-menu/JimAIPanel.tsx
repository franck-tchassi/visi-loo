"use client";

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { JimAIFeature } from '../../../../../type';


interface JimAIPanelProps {
  features: JimAIFeature[];
  ctaText: string;
  ctaHref: string;
}

const JimAIPanel: React.FC<JimAIPanelProps> = ({ features, ctaText, ctaHref }) => (
  <div className="w-[320px] bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-8 flex flex-col justify-between">
    <div className="text-white">
      <h3 className="font-bold text-lg mb-6 tracking-tight">Propulsé par Jim</h3>
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span className="text-[15px] font-medium leading-snug">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
    <a href={ctaHref} className="mt-8 bg-white text-[#7c3aed] rounded-full py-3.5 px-6 font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-lg">
      <Sparkles className="w-4 h-4" />
      {ctaText}
    </a>
  </div>
);

export default JimAIPanel;