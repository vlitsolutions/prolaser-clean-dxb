'use client';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with optimized loading for LCP */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo Text - Will animate to navbar on scroll */}
        <div className="mb-8 text-center">
          <div id="hero-text-target" className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-shadow-lg mb-2">
              PROLASER CLEAN
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary-400 text-shadow-lg">
              DXB
            </p>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="mb-12">
          <h2 className="font_6 text-white text-shadow-lg max-w-4xl mx-auto leading-relaxed px-2">
            Revolutionizing Surface Cleaning with 
            <span className="text-primary-400"> Laser Technology</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#how-it-works"
            className="bg-primary-600 hover:bg-primary-700 text-white/90 px-8 py-4 font-light text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discover How It Works
          </a>
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white/90 border-2 border-white/30 px-8 py-4 font-light text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Free Quote
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
        </div>
      </div>
    </section>
  );
}