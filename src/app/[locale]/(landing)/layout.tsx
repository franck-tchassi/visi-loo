// app/[locale]/layout.tsx


import React from "react";
import Footer from "@/components/layout/Footer";
import {CTA} from "@/components/layout/CTA";
import Navbar  from "@/components/layout/Navbar";
import Newsletter from "@/components/layout/Newsletter";

interface LayoutProps {
  children: React.ReactNode;
 
}

export default async function LocaleLayout({ children }: LayoutProps) {
  

  return (
    
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main>{children}</main>
        <CTA  />
        <Newsletter />
        <Footer />
    </div>
    
  );
}
