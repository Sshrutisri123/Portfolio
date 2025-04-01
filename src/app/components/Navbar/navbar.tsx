"use client";

import React from 'react';
import Image from 'next/image';
import MenuButton from '@/app/components/MenuButton/menuButton';
import { motion } from 'framer-motion';
const Navbar: React.FC = () => {
    return (
        <motion.nav className="w-screen p-4 fixed">
            <div className="container mx-auto flex justify-between items-center">

                {/* Left side: Icon and Name */}
                <div className="flex ml-[-15] sm:ml-0 gap-4 items-center">
                    <Image
                        src="/Logo.png"
                        alt="Icon image"
                        width={40}
                        height={40}
                        unoptimized
                    />
                    <span className="text-black text-xl ml-[-9] sm:ml-0">Shruti</span>
                </div>

                {/* Middle: About and Work */}
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className="text-black text-xl">About</a>
                    <a href="#work" className="text-black text-xl">Work</a>
                </div>

                {/* Right side: Contact Me */}
                <div className='flex'>
                    <a href="#contact" className="text-black text-xl hidden md:flex">
                        <span className="mr-2 transform scale-x-150">→</span>Contact Me</a>
                        <MenuButton/>
                </div>

            </div>
        </motion.nav>
    );
};

export default Navbar;