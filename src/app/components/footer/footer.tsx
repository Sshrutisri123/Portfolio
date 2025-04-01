'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black z-40 text-white pt-20 sm:pt-30 px-8 sm:px-20">
      <div className="w-full">
        <div className="text-left mb-8">
          <p className="text-white uppercase text-base sm:text-xl">Lets Work Together</p>
          <div className="flex w-full items-center sm:mt-2">
            <h2 className="text-gray-500 text-xl sm:text-6xl font-bold">pvt</h2>
            <span className="text-xl sm:text-6xl font-bold">shrutisri649@gmail.com</span>
            <Link className='bg-blue-600 rounded-full sm:p-2' href="mailto:riteshpandey02@gmail.com" target="_blank">
              <ArrowUpRight className="w-6 sm:w-8 h-6 sm:h-8 text-gray-300" />
            </Link>
          </div>
        </div>

        <hr className="border-gray-700 mb-6"/>

        <div className="flex flex-wrap justify-between text-gray-400 text-sm">
          <nav className="flex space-x-6">
            <Link href="#" className="hover:text-white">Home</Link>
            <Link href="#" className="hover:text-white">About</Link>
            <Link href="#" className="hover:text-white">Projects</Link>
          </nav>
          <Link href="#" className="hover:text-white">Back to top</Link>
        </div>

        <div className="mt-6 flex sm:flex-row flex-col space-y-3 justify-between text-gray-500 text-xs">
          <span>2025 © Edition</span>
          <span>Local Time: 2:31 AM GMT+5:30</span>
          <div className="flex flex-col space-y-3 space-x-4">
            <h3>Socials</h3>
            <div className='flex space-x-4'>
              <Link href="#" className="hover:text-white">LinkedIn</Link>
              <Link href="#" className="hover:text-white">Threads</Link>
              <Link href="#" className="hover:text-white">Github</Link>
            </div>
          </div>
        </div>

        <div className='hidden relative w-full h-72 sm:flex justify-center overflow-hidden'>
          <span className='absolute text-[16rem] m-0 p-0 flex justify-center'>CONNECT</span>
        </div>

        <div className='sm:hidden flex justify-center py-16'>
          <button className="relative  px-8 py-4 text-5xl font-bold text-white bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 rounded-full shadow-lg shadow-white/10 hover:from-white/30 hover:to-white/10 hover:shadow-white/20 transition-all duration-300">
            CONNECT
          </button>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
