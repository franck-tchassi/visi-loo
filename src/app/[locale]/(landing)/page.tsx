// src/app/([locale])/(landing)/page.tsx

import React from 'react';

import Hero from '@/components/layout/Hero';
import { SocialProof } from '@/components/layout/SocialProof';
import Features  from '@/components/layout/Features';



const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* --- Hero Section --- */}
      <Hero />
      {/* --- Features Section --- */}
      <Features />
      {/* --- Social Proof Section --- */}
      <SocialProof />
      {/* --- Testimonials Section --- */}
    </div>
  );
};

export default LandingPage;