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
                    <motion.a

                        whileHover={{ scale: 1.2 }}


                        href="#about" className="text-black text-xl">About</motion.a>
                    <motion.a

                        whileHover={{ scale: 1.2 }}

                        href="#work" className="text-black text-xl">Work</motion.a>
                </div>

                <div className="flex items-center">
                    <span className="mr-0 transform scale-x-150 text-black text-xl">→</span>
                    <div className="relative h-8 w-32 overflow-hidden group flex ml-3 items-center">
                        <a href="#contact"
                            className="absolute cursor-pointer transition-all duration-500 ease-out group-hover:-translate-y-6 group-hover:opacity-0 text-black text-xl hidden md:flex"
                        >
                            Contact Me
                        </a>
                        <span className="absolute cursor-pointer transition-all duration-500 ease-out translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-black text-xl">
                            Now
                        </span>
                    </div>

                    <MenuButton />
                </div>



            </div>
        </motion.nav>
    );
};

export default Navbar;