'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { animate, hover } from 'motion';
import { splitText } from 'motion-plus';
import { useMotionValue } from 'motion/react';

const Footer = () => {
  const [localTime, setLocalTime] = useState<string>("");
  const connectRef = useRef<HTMLSpanElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short',
      };
      setLocalTime(now.toLocaleTimeString(undefined, options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!connectRef.current) return;

    const { chars } = splitText(connectRef.current);

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() ** 2 + velocityY.get() ** 2
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <footer className="bg-black z-40 text-white pt-20 sm:pt-30 px-8 sm:px-20">
      <div className="w-full">
        <div className="text-left mb-8">
          <p className="text-white uppercase text-base sm:text-xl">Lets Work Together</p>
          <div className="flex w-full items-center sm:mt-2">
            <h2 className="text-gray-500 text-xl sm:text-6xl font-bold">pvt</h2>
            <span className="text-xl sm:text-6xl font-bold">shrutisri649@gmail.com</span>
            <a
              href="mailto:shrutisri649@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-blue-600 rounded-full sm:p-2'
            >
              <ArrowUpRight className="w-6 sm:w-8 h-6 sm:h-8 text-gray-300" />
            </a>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-wrap justify-between text-gray-400 text-sm">
          <nav className="flex space-x-6">
            <Link href="#" className="hover:text-white">Home</Link>
            <Link href="#" className="hover:text-white">About</Link>
            <Link href="#" className="hover:text-white">Projects</Link>
          </nav>
          <button
            onClick={() => scroll.scrollToTop({ duration: 3000, smooth: 'easeInOutQuint' })}
            className="hover:text-white cursor-pointer transition-all duration-300"
          >
            Back to top
          </button>
        </div>

        <div className="mt-6 flex sm:flex-row flex-col space-y-3 justify-between text-gray-500 text-xs">
          <span>2025 © Edition</span>
          <span>Local Time: {localTime}</span>
          <div className="flex flex-col space-y-3 space-x-4">
            <div className='flex space-x-4'>
              <Link href="https://www.linkedin.com/in/shrutisrivastava08/" className="hover:text-white">LinkedIn</Link>
              <Link href="#" className="hover:text-white">Threads</Link>
              <Link href="https://github.com/Sshrutisri123" target='_blank' className="hover:text-white">Github</Link>
            </div>
          </div>
        </div>

        {/* CONNECT SCATTER ANIMATION */}
        <div className='hidden relative w-full h-72 sm:flex justify-center overflow-hidden'>
          <span
            ref={connectRef}
            className='absolute text-[16rem] m-0 p-0 flex justify-center split-char'
          >
            CONNECT
          </span>
        </div>

        <div className='sm:hidden flex justify-center py-16'>
          <button className="relative px-8 py-4 text-5xl font-bold text-white bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 rounded-full shadow-lg shadow-white/10 hover:from-white/30 hover:to-white/10 hover:shadow-white/20 transition-all duration-300">
            CONNECT
          </button>
        </div>
      </div>

      {/* Styles for .split-char */}
      <style>{`
        .split-char {
          will-change: transform, opacity;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
