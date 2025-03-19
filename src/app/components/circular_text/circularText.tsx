"use client";

import React, { useEffect, useRef } from "react";

const CircularText: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      const innerText: string = textRef.current.innerText;

      textRef.current.innerHTML = innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform: rotate(${i * 11.9}deg); display: inline-block;">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="circle">
      <div className="circular_text">
        <p ref={textRef} className="text-black">
          Scroll to see my works-scroll-
        </p>
      </div>
      
      {/* Arrow in the center */}
      <div className="absolute text-black text-2xl">
        ↓
      </div>
    </div>
  );
};

export default CircularText;
