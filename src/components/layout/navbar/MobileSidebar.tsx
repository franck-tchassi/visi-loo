"use client";

import React from 'react';
import { X, MapPin, Flame } from 'lucide-react';

import Link from 'next/link'; // Import Link
import { IconLinkItem, Language, NavItem, ResourceLinkItem } from '../../../../type';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  languages: Language[];
  businessTypes: IconLinkItem[];
  industryTypes: IconLinkItem[];
  resourceLinksCol1: ResourceLinkItem[];
  resourceLinksCol2: ResourceLinkItem[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navItems,
  languages,
  businessTypes,
  industryTypes,
  resourceLinksCol1,
  resourceLinksCol2,
}) => {
  return (
    <div className={`fixed inset-0 bg-white z-[60] xl:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="h-[72px] border-b border-gray-100 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <MapPin className="w-6 h-6 text-blue-600" />
             <span className="text-xl font-bold text-[#3d4bbd]">visiloo</span>
          </div>
          <button className="p-2" onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-4 last:border-b-0">
              <Link href={item.href || '#'} className="w-full flex items-center justify-between text-lg font-bold text-gray-900 py-2 hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
              {item.id === 'solutions' && (
                <div className="mt-4 grid grid-cols-1 gap-4 pl-4">
                  {businessTypes.concat(industryTypes).map((type, i) => (
                    <Link key={i} href={type.href} className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">{type.label}</Link>
                  ))}
                </div>
              )}
              {item.id === 'resources' && (
                <div className="mt-4 grid grid-cols-1 gap-4 pl-4">
                  {resourceLinksCol1.concat(resourceLinksCol2).map((l, i) => (
                    <Link key={i} href={l.href} className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">{l.label}</Link>
                  ))}
                </div>
              )}
              {item.id === 'pricing' && (
                <div className="mt-4 pl-4">
                  <Link href="#" className="text-gray-600 text-[15px] hover:text-blue-600 transition-colors">Pricing Details</Link>
                </div>
              )}
            </div>
          ))}
          {/* Mobile Languages */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Languages</h4>
            <div className="grid grid-cols-2 gap-4">
               {languages.map(l => (
                 <button key={l.code} className="text-left text-gray-600 font-medium hover:text-blue-600 transition-colors">{l.label}</button>
               ))}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col gap-4">
           <Link href="/auth" className="w-full bg-white border border-gray-200 text-blue-600 font-bold py-4 rounded-2xl shadow-sm hover:bg-gray-100 transition-colors text-center">Login</Link>
           <Link href="/auth" className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">
             <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
             Start 14 days free
           </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;