'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with optimized loading for LCP */}
      <div className="absolute inset-0 z-0">
        {/* Static background image loads first for better LCP */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        
        {/* Video loads after with preload="none" for performance */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          poster="/images/hero-bg.jpg"
        >
          <source src="/images/hero-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo - Centered at top */}
        <div className="mb-8">
          <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] mx-auto">
            {/* The LogoAnimation component will position itself here */}
            <div className="absolute inset-0" id="hero-logo-target" />
          </div>
        </div>
        
        {/* Title and Subtitle - Stacked and Centered */}
        <div className="mb-12">
          <h1 className="font_2 text-white text-shadow-lg mb-3 px-2">
            PROLASER CLEAN
          </h1>
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