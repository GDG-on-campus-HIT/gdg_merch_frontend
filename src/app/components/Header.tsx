'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { text: 'HOME', path: '/', color: '#4285F4' },
    { text: 'ABOUT US', path: '/about', color: '#EA4335' },
    { text: 'PROJECT', path: '/project', color: '#FBBC05' },
    { text: 'NEW ARRIVALS', path: '/new', color: '#34A853' },
  ];

  return (
    <header className="flex justify-between items-center py-3 px-4 sm:px-6 lg:px-20 relative z-50">
      {/* Logo */}
      {/* Logo */}
<div className="flex flex-col items-start group cursor-pointer">
  <div className="relative">
    {/* Main logo */}
    <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide transform group-hover:scale-105 transition-all duration-500">
      <span 
        className="inline-block text-[#4285F4] transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
      >
        G
      </span>
      <span 
        className="inline-block text-[#EA4335] transform group-hover:-rotate-6 group-hover:scale-110 transition-all duration-300 delay-75"
      >
        D
      </span>
      <span 
        className="inline-block text-[#FBBC05] transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 delay-150"
      >
        G
      </span>
    </div>
    
    {/* Animated underline */}
    <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </div>
  
  {/* Subtitle with enhanced styling */}
  <div className="relative mt-2 overflow-hidden">
    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 tracking-wider font-medium transform group-hover:translate-x-2 transition-transform duration-300">
      <span className="relative">
        Google Developer Group | Haldia
        {/* Animated background highlight */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10 rounded" />
      </span>
    </p>
    
    {/* Floating particles effect */}
    <div className="absolute top-0 left-0 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
    <div className="absolute top-1 right-4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-150" />
    <div className="absolute -top-1 right-8 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300" />
  </div>
</div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 xl:gap-16 font-semibold text-lg xl:text-xl tracking-wide text-white">
        {navigationItems.map((item) => (
          <Link
            key={item.text}
            href={item.path}
            className="relative transition-all duration-300"
            style={{ '--hover-color': item.color } as React.CSSProperties}
          >
            <span
              className="hover:scale-105 transition-all duration-300"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
            >
              {item.text}
            </span>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300"
              style={{ backgroundColor: item.color, width: '0%' }}
              onMouseEnter={(e) => (e.currentTarget.style.width = '100%')}
              onMouseLeave={(e) => (e.currentTarget.style.width = '0%')}
            ></span>
          </Link>
        ))}
      </nav>

      {/* Sign In Button */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:block">
          <Link href="/signin">
            <button className="px-6 lg:px-8 xl:px-12 py-2 lg:py-3 xl:py-4 rounded-full relative gradient-card text-white text-sm lg:text-base xl:text-lg font-medium hover:shadow-xl transition duration-200 border border-white/10 whitespace-nowrap">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="relative z-20">Sign In</span>
            </button>
          </Link>
        </div>

        <div className="block lg:hidden">
          <Link href="/signin">
            <button className="px-3 sm:px-4 py-2 rounded-full relative gradient-card text-white text-xs sm:text-sm font-medium hover:shadow-xl transition duration-200 border border-white/10 whitespace-nowrap">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="relative z-20">Sign In</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white text-2xl sm:text-3xl p-2 z-50 hover:scale-110 transition-transform duration-200"
          aria-label="Toggle Mobile Menu"
        >
          <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
  className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-black/50 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/30">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="text-white text-2xl p-2 hover:scale-110 transition-transform duration-200 hover:bg-white/10 rounded-full"
            aria-label="Close Mobile Menu"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 space-y-3">
          {navigationItems.map((item) => (
            <Link
              key={item.text}
              href={item.path}
              onClick={closeMobileMenu}
              className="relative group px-5 py-3 text-lg font-semibold text-white rounded-xl bg-black/60 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
              style={{ '--hover-color': item.color } as React.CSSProperties}
            >
              <span className="transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                {item.text}
              </span>
              <span
                className="mobile-underline absolute left-5 -bottom-1 h-[2px] w-0 group-hover:w-4/5 transition-all duration-300"
                style={{ backgroundColor: item.color }}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
