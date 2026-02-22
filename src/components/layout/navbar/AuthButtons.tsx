"use client";

import React from 'react';
import { Flame } from 'lucide-react';
import Link from 'next/link'; // Import Link

const AuthButtons: React.FC = () => (
  <>
    <Link 
      href="/auth"
      className="hidden sm:block text-[15px] font-semibold text-blue-600 border border-blue-600/30 hover:border-blue-600 hover:bg-blue-50/50 px-6 py-2.5 rounded-full transition-all"
    >
      Login
    </Link>
    <Link 
      href="/auth"
      className="flex items-center gap-2 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-[14px] sm:text-[15px] font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
    >
      <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 fill-orange-400" />
      <span>Start 3 days free</span>
    </Link>
  </>
);

export default AuthButtons;