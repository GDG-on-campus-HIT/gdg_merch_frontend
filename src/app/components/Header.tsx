'use client';

import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const toggleMobileMenu = (): void => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      {/* Logo */}
      <div className="flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            textShadow: '0px 0px 8px rgba(115, 65, 30, 0.8)',
          }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide"
        >
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">D</span>
          <span className="text-[#FBBC05]">G</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 mt-1 tracking-wider"
        >
          Google Developer Group | Haldia
        </motion.p>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-16 font-semibold text-xl tracking-wide">
        <a
          href="#"
          className="relative transition-all duration-300 hover:text-[#4285F4]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
            after:-bottom-1 after:bg-[#4285F4] hover:after:w-full after:transition-all after:duration-300"
        >
          HOME
        </a>
        <a
          href="#"
          className="relative transition-all duration-300 hover:text-[#EA4335]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
            after:-bottom-1 after:bg-[#EA4335] hover:after:w-full after:transition-all after:duration-300"
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="relative transition-all duration-300 hover:text-[#FBBC05]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
            after:-bottom-1 after:bg-[#FBBC05] hover:after:w-full after:transition-all after:duration-300"
        >
          PROJECT
        </a>
        <a
          href="#"
          className="relative transition-all duration-300 hover:text-[#34A853]
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
            after:-bottom-1 after:bg-[#34A853] hover:after:w-full after:transition-all after:duration-300"
        >
          NEW ARRIVALS
        </a>
      </nav>

      {/* Desktop Sign In Button */}
      <button
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full
          border-none font-semibold tracking-wide transition-all duration-300
          hover:bg-white hover:text-[#1A73E8] hover:shadow-lg hover:scale-105
          cursor-pointer z-50"
      >
        SIGN IN
      </button>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
        aria-label="Toggle Mobile Menu"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Navigation */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5
        md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-sm"
      >
        <nav className="flex flex-col gap-6 items-center">
          {[
            { text: 'HOME', color: '#4285F4' },
            { text: 'ABOUT US', color: '#EA4335' },
            { text: 'PROJECT', color: '#FBBC05' },
            { text: 'NEW ARRIVALS', color: '#34A853' },
          ].map((item) => (
            <a
              key={item.text}
              href="#"
              className={`relative transition-all duration-300 hover:text-[${item.color}]
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 
                after:-bottom-1 after:bg-[${item.color}] hover:after:w-full after:transition-all after:duration-300`}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
