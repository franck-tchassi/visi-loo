"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';

const Logo: React.FC = () => (
    <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-14 h-14 flex items-center justify-center relative overflow-hidden"> {/* Increased size to w-12 h-12 */}
            <Image
                src="/logo-visiloo.png"
                alt="Visiloo Logo"
                width={54} // Corresponds to w-12 (48px)
                height={54} // Corresponds to h-12 (48px)
            />
            </div>
            <span className="text-[22px] font-bold tracking-tight text-[#3d4bbd]">visiloo</span>
        </div>
    </Link>
);

export default Logo;