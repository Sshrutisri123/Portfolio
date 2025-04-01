'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SubtitleText = () => {

    // Split the text into individual words
    const text = 'Blending design, code, and innovation to craft seamless';
    const words = text.split(' '); // Split by spaces to get words
    const text2 = 'digital experiences';
    const words2 = text2.split(' ');

    return (
        <div className="flex flex-col items-center">
            {/* First Line Animation (Blending design...) */}
            <motion.div
                className="flex flex-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2,
                    staggerChildren: 0.1, // Stagger delay for each word in the first line
                }}
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }} // Start from below
                        animate={{ opacity: 1, y: 0 }}  // Move to normal position
                        transition={{
                            type: 'spring',
                            duration: 0.8,
                            delay: index * 0.1, // Delay based on word index for staggered effect
                        }}
                    >
                        {word}&nbsp; {/* Add space between words */}
                    </motion.span>
                ))}
            </motion.div>

            {/* Second Line Animation (digital experiences) */}
            <motion.div
                className="flex flex-row mt-2" // Added margin for spacing between the lines
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1,  // Delay to make sure the second line animates after the first one
                    duration: 2,
                    staggerChildren: 0.1, // Stagger delay for each word in the second line
                }}
            >
                {words2.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }} // Start from below
                        animate={{ opacity: 1, y: 0 }}  // Move to normal position
                        transition={{
                            type: 'spring',
                            duration: 0.8,
                            delay: index * 0.1, // Delay based on word index for staggered effect
                        }}
                    >
                        {word}&nbsp; {/* Add space between words */}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default SubtitleText;
