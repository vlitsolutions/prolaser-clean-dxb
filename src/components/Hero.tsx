'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy load the video component to prevent it from affecting LCP
const HeroVideo = dynamic(() => import('./HeroVideo'), {
  ssr: false,
  loading: () => (
    // Show static background while video component loads
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-mobile md:bg-desktop"
      style={{ 
        backgroundImage: 'url(/images/hero-bg-mobile.webp)',
      }}
    />
  ),
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with optimized loading for LCP */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-3 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        {/* Logo Text - Will animate to navbar on scroll */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div id="hero-text-target" className="relative">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow-lg mb-2 ml-2 sm:ml-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              PROLASER CLEAN
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-primary-400 text-shadow-lg ml-2 sm:ml-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              DXB
            </motion.p>
          </div>
        </motion.div>
        
        {/* Subtitle */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-shadow-lg max-w-4xl mx-auto leading-relaxed px-2">
            Revolutionizing Surface Cleaning with 
            <motion.span 
              className="text-primary-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            > Laser Technology</motion.span>
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col gap-3 justify-center items-center mb-12 sm:mb-16 w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.a
            href="#how-it-works"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white/90 px-6 py-3 sm:py-4 font-light text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center rounded"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover How It Works
          </motion.a>
          <motion.a
            href="#contact"
            className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white/90 border-2 border-white/30 px-6 py-3 sm:py-4 font-light text-base sm:text-lg transition-all duration-300 transform hover:scale-105 text-center rounded"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Quote
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}