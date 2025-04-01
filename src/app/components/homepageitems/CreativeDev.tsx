'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CreativeDev = () => {
    const text1 = "CREATIVE"
        const text2 = 'DEVELOPER'
    
        // Function to wrap each letter in a motion.span and animate
        const animateText = (text: string) => {
            return text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 100 }} // Start from below and hidden
                    animate={{ y: 0 }}  // Move to normal position when animated
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1, // Stagger the delay for each letter
                    }}
                >
                    {char}
                </motion.span>
            ));
        };
  return (
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-semibold">
        <motion.div 
        className="inline-flex overflow-hidden">
            {animateText(text1)}
        </motion.div></h1>
    <h1 className="text-black text-4xl md:text-8xl sm:text-9xl font-semibold">
        <motion.div className="inline-flex overflow-hidden">
            {animateText(text2)}
        </motion.div></h1>
</div>
  )
}

export default CreativeDev
