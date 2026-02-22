"use client";

import React from 'react';
import { IconLinkItem } from '../../../../../type';


interface FeatureSectionProps {
  title: string;
  items: IconLinkItem[];
  iconBgColor: string; // e.g., 'bg-[#00a3ff]/10'
  iconColor: string; // e.g., 'text-[#00a3ff]'
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, items, iconBgColor, iconColor }) => (
  <div className="flex-1 p-10 bg-white">
    <h3 className="text-[#0a1b3d] font-bold text-lg mb-8 tracking-tight">{title}</h3>
    <ul className="space-y-6">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.href} className="flex items-center gap-4 group">
            <div className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center group-hover:${iconBgColor.replace('/10', '/20')} transition-colors`}>
              {React.cloneElement(item.icon as React.ReactElement)}
            </div>
            <span className="text-[#3d4452] group-hover:text-blue-600 font-semibold transition-colors text-[16px]">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureSection;