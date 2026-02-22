// src/app/[locale]/(dashboard)/dashboard/_components/Sidebar.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutGrid, Store, Newspaper, Star, MessageCircle, PieChart, 
  Sparkles, Settings, LogOut, Receipt, X 
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose }) => {
  const pathname = usePathname();
  const router = useRouter();

  const linkClass = (href: string) => {
    const isActive = pathname.startsWith(href);
    return `w-10 h-10 flex items-center justify-center rounded-xl mb-4 md:mb-6 transition-all duration-200 group relative ${
      isActive 
        ? 'bg-blue-50 text-blue-600 shadow-sm' 
        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
    }`;
  };
    
  const aiLinkClass = (href: string) => {
    const isActive = pathname.startsWith(href);
    return `w-10 h-10 flex items-center justify-center rounded-xl mb-4 md:mb-6 transition-all duration-200 group relative ${
      isActive 
        ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md' 
        : 'text-purple-500 bg-purple-50 hover:bg-purple-100'
    }`;
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    if (onClose) onClose();
  };

  return (
    <>
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 md:w-20 
          bg-white border-r border-gray-100 
          flex flex-col items-center py-6 h-full shadow-xl md:shadow-sm
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 md:hidden">
            <X size={20} />
        </button>

        {/* Logo Visiloo - Nouveau logo PNG */}
        <div className="mb-8 md:mb-10 cursor-pointer hover:scale-105 transition-transform shrink-0" onClick={() => handleNavigate('/dashboard')}>
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            <Image 
              src="/logo-visiloo.png" 
              alt="Visiloo Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        <nav className="flex-1 flex flex-col items-center w-full px-4 md:px-0 overflow-y-auto scrollbar-hide">
          <div className="w-full space-y-1 md:space-y-0 flex flex-col items-center">
            {[
                { to: "/dashboard", icon: LayoutGrid, label: "Vue d'ensemble", color: "text-blue-500" },
                { to: "/dashboard/locations", icon: Store, label: "Présence", color: "text-orange-500" },
                { to: "/dashboard/posts", icon: Newspaper, label: "Posts", color: "text-pink-500" },
                { to: "/dashboard/reviews", icon: Star, label: "Avis", color: "text-yellow-500" },
                { to: "/dashboard/assistant", icon: Sparkles, label: "Assistant IA", isAi: true },
                { to: "/dashboard/messages", icon: MessageCircle, label: "Messages", color: "text-green-500" },
                { to: "/dashboard/statistics", icon: PieChart, label: "Statistiques", color: "text-purple-500" },
                { to: "/dashboard/billing", icon: Receipt, label: "Facturation", color: "text-gray-500" },
                { to: "/dashboard/settings", icon: Settings, label: "Paramètres", color: "text-gray-500" }
            ].map((item) => (
                <Link 
                    key={item.to}
                    href={item.to} 
                    className={`
                        ${item.isAi ? aiLinkClass(item.to) : linkClass(item.to)} 
                        md:w-10 md:justify-center w-full justify-start px-3 md:px-0
                    `}
                    onClick={() => onClose && onClose()}
                    title={item.label}
                >
                    <item.icon size={22} strokeWidth={1.5} className={`shrink-0 ${!item.isAi && item.color}`} />
                    <span className="md:hidden ml-4 font-bold text-sm text-gray-700">{item.label}</span>
                    {item.isAi && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 md:flex hidden">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                        </span>
                    )}
                </Link>
            ))}
          </div>
        </nav>

        <div className="mt-auto flex flex-col items-center space-y-4 w-full px-4 md:px-0 pb-4 shrink-0">
           <button onClick={() => router.push('/')} className="w-full md:w-10 h-10 flex items-center md:justify-center justify-start px-3 md:px-0 text-red-300 hover:text-red-500 rounded-xl hover:bg-red-50 transition-colors">
              <LogOut size={22} strokeWidth={1.5} className="shrink-0" />
              <span className="md:hidden ml-4 font-bold text-sm text-gray-700">Déconnexion</span>
           </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;