//src/components/layout/navbar/DesktopNavLinks.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import { NavItem } from '../../../../type';
import ProductMegaMenu from './ProductMegaMenu';
import SolutionsMegaMenu from './SolutionsMegaMenu';
import ResourcesMegaMenu from './ResourcesMegaMenu';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

interface DesktopNavLinksProps {
  navItems: NavItem[];
}

const DesktopNavLinks: React.FC<DesktopNavLinksProps> = ({ navItems }) => {
  const renderMegaMenu = (id: string) => {
    switch (id) {
      case 'product':
        return <ProductMegaMenu />;
      case 'solutions':
        return <SolutionsMegaMenu />;
      case 'resources':
        return <ResourcesMegaMenu />;
      default:
        return null;
    }
  };

  return (
    <NavigationMenu className="hidden xl:flex h-full">
      <NavigationMenuList className="flex items-center h-full gap-6">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.id} className="h-full flex items-center">
            {item.hasDropdown ? (
              <>
                <NavigationMenuTrigger className={cn(
                  navigationMenuTriggerStyle(),
                  "h-full text-[15px] font-medium transition-colors hover:text-blue-600 text-gray-700 data-[state=open]:text-blue-600 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent"
                )}>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex">
                    {renderMegaMenu(item.id)}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href || '#'} legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "h-full text-[15px] font-medium transition-colors hover:text-blue-600 text-gray-700 bg-transparent hover:bg-transparent focus:bg-transparent"
                )}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavLinks;