'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] px-6 lg:px-20">
      {/* Left Side */}
      <div className="max-w-xl z-10 mt-32 md:mt-24 lg:mt-0 lg:w-1/2">
        {/* Tag */}
        <div className="relative w-[95%] sm:w-48 h-10 mb-6 px-[2px] rounded-full 
                        bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] 
                        shadow-[0_0_25px_rgba(255,255,255,0.2)] group overflow-hidden">
          <div className="absolute inset-[2px] bg-black/70 backdrop-blur-sm rounded-full 
                          flex items-center justify-center gap-2 text-sm font-semibold 
                          text-white px-3">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                            from-transparent via-white/20 to-transparent translate-x-[-100%] 
                            group-hover:translate-x-[100%] transition-transform 
                            duration-[1200ms] ease-in-out" />
            <i className="bx bx-diamond text-[#FBBC05] text-base animate-bounce" />
            <span className="z-10">INTRODUCING</span>
          </div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="leading-[0.9] font-extrabold tracking-tight uppercase my-4 lg:my-8 w-full"
        >
          <div className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] flex gap-3 cursor-pointer">
            <motion.span
              className="text-[#4285F4]"
              whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(66, 133, 244, 0.8)' }}
              transition={{ duration: 0.3 }}
            >
              GDG
            </motion.span>
            <motion.span
              className="text-[#EA4335]"
              whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(234, 67, 53, 0.8)' }}
              transition={{ duration: 0.3 }}
            >
              DEV
            </motion.span>
          </div>
          <motion.div
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] text-[#FBBC05] cursor-pointer"
            whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(251, 188, 5, 0.8)' }}
            transition={{ duration: 0.3 }}
          >
            DRIP
          </motion.div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white text-sm sm:text-base leading-relaxed max-w-md mb-8"
        >
          WE’RE THE TECH-SAVVY SPIRIT OF HIT—GDG ON CAMPUS. <br />
          OUR EXCLUSIVE MERCH HOODIES FUSE CODE, CREATIVITY, AND CAMPUS PRIDE. <br />
          WEAR INNOVATION. REP YOUR TRIBE. BUILD THE FUTURE IN STYLE.
        </motion.p>
      </div>

      {/* Right Side: 3D */}
      <div className="w-full lg:w-[50vw] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[80vh] xl:h-[90vh] mt-10 lg:mt-0">
        <Spline scene="https://prod.spline.design/TmpYRgjNQM984Kne/scene.splinecode" />
      </div>
    </main>
  );
};

export default Hero;
