'use client'
import { useState } from "react";


const MenuButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="relative mr-3 sm:hidden w-8 h-4 flex flex-col justify-between items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Top Line */}
      <span
        className={`block h-0.5 w-8 bg-black rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      {/* Bottom Line */}
      <span
        className={`block h-0.5 w-8 bg-black rounded transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  )
}

export default MenuButton;