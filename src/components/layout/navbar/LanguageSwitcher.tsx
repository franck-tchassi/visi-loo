"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Languages } from 'lucide-react';
import { Language } from '../../../../type';


interface LanguageSwitcherProps {
  languages: Language[];
  selectedLang: Language;
  onSelectLang: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages, selectedLang, onSelectLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={langRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex items-center gap-1 cursor-pointer hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors group"
      >
        <Languages className="w-[18px] h-[18px] text-gray-600 group-hover:text-blue-600" />
        <span className="text-[15px] font-semibold text-gray-700 group-hover:text-blue-600 uppercase">{selectedLang.code}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 py-3 min-w-[180px] z-[70] overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onSelectLang(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-gray-50 ${selectedLang.code === lang.code ? 'text-blue-600 bg-blue-50/50' : 'text-gray-700'}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;