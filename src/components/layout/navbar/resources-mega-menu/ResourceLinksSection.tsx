"use client";

import React from 'react';
import { ResourceLinkItem } from '../../../../../type';


interface ResourceLinksSectionProps {
  title: string;
  items: ResourceLinkItem[];
}

const ResourceLinksSection: React.FC<ResourceLinksSectionProps> = ({ title, items }) => (
  <div className="flex-1 p-10 bg-white">
    <h3 className="text-[#0a1b3d] font-bold text-lg mb-8 tracking-tight">{title}</h3>
    <ul className="space-y-5">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.href} className="text-[#3d4452] hover:text-blue-600 font-medium transition-colors text-[15px] flex items-center gap-3">
            {item.icon && React.cloneElement(item.icon as React.ReactElement)}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ResourceLinksSection;