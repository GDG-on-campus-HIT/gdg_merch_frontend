'use client';

import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import PrimaryButton from './ui/PrimaryButton';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-0">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 max-w-none lg:max-w-xl z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-0 order-2 lg:order-1">
        {/* Tag */}
        <div className="relative w-full sm:w-56 md:w-64 h-10 sm:h-12 mb-4 sm:mb-6 px-[2px] rounded-full mx-auto lg:mx-0
                         bg-gray-600 shadow-[0_0_25px_rgba(255,255,255,0.1)] group overflow-hidden">
          <div className="absolute inset-[2px] bg-black/70 backdrop-blur-sm rounded-full
                           flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold
                           text-white px-3">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r
                             from-transparent via-white/20 to-transparent translate-x-[-100%]
                             group-hover:translate-x-[100%] transition-transform
                             duration-[1200ms] ease-in-out" />
            <i className="bx bx-diamond text-white text-sm sm:text-base animate-bounce" />
            <span className="z-10">INTRODUCING</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="leading-[0.9] font-extrabold tracking-tight uppercase my-4 sm:my-6 lg:my-8 w-full text-center lg:text-left">
          <div className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] flex gap-2 sm:gap-3 justify-center lg:justify-start">
            <span className="from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
              GDG
            </span>
            <span className="from-red-400 to-red-600 bg-gradient-to-b bg-clip-text text-transparent">
              DEV
            </span>
          </div>
          <div className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] from-yellow-400 to-yellow-600 bg-gradient-to-b bg-clip-text text-transparent text-center lg:text-left">
            DRIP
          </div>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-2xl mb-6 sm:mb-8 font-light tracking-wide opacity-90 text-center lg:text-left mx-auto lg:mx-0">
          We're the tech-savvy spirit of HIT—GDG on campus.
          <br className="hidden sm:block mb-2" />
          <span className="sm:hidden"> </span>
          Our exclusive merch hoodies fuse code, creativity, and campus pride.
          <br className="hidden sm:block mb-2" />
          <span className="sm:hidden"> </span>
          Wear innovation. Rep your tribe. Build the future in style.
        </p>

        {/* CTA Buttons - Fully Responsive */}
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-4 sm:gap-6 mt-6">
          <Link href="/new">
            <PrimaryButton className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold whitespace-nowrap">
              New Arrivals
            </PrimaryButton>
          </Link>

          <Link href="/about">
            <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full relative gradient-card text-gray-700 dark:text-white text-base sm:text-lg font-medium hover:shadow-2xl transition duration-200 border dark:border-white/10 min-w-fit whitespace-nowrap">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="relative z-20">Learn more</span>
            </button>
          </Link>
        </div>

      </div>

      {/* Right Side: 3D - Fully Responsive */}
      <div className="w-full lg:w-1/2 xl:w-[45%] h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] mt-8 lg:mt-0 order-1 lg:order-2">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <Spline 
            scene="https://prod.spline.design/TmpYRgjNQM984Kne/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;