"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onClick }) => (
  <button
    className="xl:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
    onClick={onClick}
  >
    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
);

export default MobileMenuToggle;