'use client';

import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import PrimaryButton from './ui/PrimaryButton';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] px-3 xs:px-4 sm:px-6 lg:px-12 xl:px-20 py-6 xs:py-8 lg:py-0">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 max-w-none lg:max-w-xl z-10 mt-4 xs:mt-6 sm:mt-8 md:mt-12 lg:mt-0 order-2 lg:order-1">
        {/* Tag */}
        <div className="relative w-full max-w-[160px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[240px] h-10 xs:h-11 sm:h-12 mb-4 xs:mb-5 sm:mb-6 px-[2px] rounded-full mx-auto lg:mx-0
                         bg-gray-600 shadow-[0_0_25px_rgba(255,255,255,0.1)] group overflow-hidden">
          <div className="absolute inset-[2px] bg-black/70 backdrop-blur-sm rounded-full
                           flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold
                           text-white px-3 xs:px-4 sm:px-5">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r
                             from-transparent via-white/20 to-transparent translate-x-[-100%]
                             group-hover:translate-x-[100%] transition-transform
                             duration-[1200ms] ease-in-out" />
            <i className="bx bx-diamond text-white text-sm xs:text-base sm:text-lg animate-bounce flex-shrink-0" />
            <span className="z-10 text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wider uppercase">INTRODUCING</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="leading-[0.85] xs:leading-[0.9] font-extrabold tracking-tight uppercase my-3 xs:my-4 sm:my-6 lg:my-8 w-full text-center lg:text-left">
          <div className="text-[14vw] xs:text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] flex gap-1 xs:gap-2 sm:gap-3 justify-center lg:justify-start">
            <span className="from-blue-400 to-blue-600 bg-gradient-to-b bg-clip-text text-transparent">
              GDG
            </span>
            <span className="from-red-400 to-red-600 bg-gradient-to-b bg-clip-text text-transparent">
              DEV
            </span>
          </div>
          <div className="text-[16vw] xs:text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] from-yellow-400 to-yellow-600 bg-gradient-to-b bg-clip-text text-transparent text-center lg:text-left -mt-1 xs:-mt-2">
            DRIP
          </div>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-full lg:max-w-2xl mb-4 xs:mb-6 sm:mb-8 font-light tracking-wide opacity-90 text-center lg:text-left mx-auto lg:mx-0 px-2 xs:px-0">
          We're the tech-savvy spirit of HIT—GDG on campus.
          <br className="hidden xs:block mb-1 sm:mb-2" />
          <span className="xs:hidden"> </span>
          Our exclusive merch hoodies fuse code, creativity, and campus pride.
          <br className="hidden xs:block mb-1 sm:mb-2" />
          <span className="xs:hidden"> </span>
          Wear innovation. Rep your tribe. Build the future in style.
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 px-0">
          <Link href="/new" className="w-auto">
            <PrimaryButton className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold tracking-wide whitespace-nowrap min-h-[44px] sm:min-h-[48px] md:min-h-[52px] flex items-center justify-center">
              New Arrivals
            </PrimaryButton>
          </Link>

          <Link href="/about" className="w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full relative gradient-card text-gray-700 dark:text-white text-sm sm:text-base md:text-lg font-semibold hover:shadow-2xl transition duration-200 border dark:border-white/10 whitespace-nowrap min-h-[44px] sm:min-h-[48px] md:min-h-[52px] flex items-center justify-center">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="relative z-20">Learn more</span>
            </button>
          </Link>
        </div>


      </div>

      {/* Right Side: 3D */}
      <div className="w-full lg:w-1/2 xl:w-[45%] h-[350px] xs:h-[350px] sm:h-[500px] md:h-[500px] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] mt-4 xs:mt-6 sm:mt-8 lg:mt-0 order-1 lg:order-2">
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