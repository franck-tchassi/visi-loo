"use client";

import React from 'react';
import { IconLinkItem } from '../../../../../type';


interface SolutionSectionProps {
  title: string;
  items: IconLinkItem[];
  isGrid?: boolean;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ title, items, isGrid = false }) => (
  <div className={`flex-1 p-10 bg-white ${isGrid ? 'border-l border-gray-100' : ''}`}>
    <h3 className="text-[#0a1b3d] font-bold text-lg mb-8 tracking-tight">{title}</h3>
    <div className={isGrid ? "grid grid-cols-2 gap-x-8 gap-y-6" : "space-y-6"}>
      {items.map((item, idx) => (
        <a key={idx} href={item.href} className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            {React.cloneElement(item.icon as React.ReactElement)}
          </div>
          <span className="text-[#3d4452] group-hover:text-blue-600 font-semibold transition-colors text-[16px]">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default SolutionSection;