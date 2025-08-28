'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LogoAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [positions, setPositions] = useState({ 
    hero: { x: 0, y: 0 }, 
    nav: { x: 0, y: 0 } 
  });
  const [isReady, setIsReady] = useState(false);

  // Calculate positions of hero and nav targets using IDs
  useEffect(() => {
    const calculatePositions = () => {
      const heroTarget = document.getElementById('hero-logo-target');
      const navTarget = document.getElementById('nav-logo-target');
      
      if (heroTarget && navTarget) {
        const heroRect = heroTarget.getBoundingClientRect();
        const navRect = navTarget.getBoundingClientRect();
        
        setPositions({
          hero: {
            x: heroRect.left + heroRect.width / 2,
            y: heroRect.top + heroRect.height / 2 + window.scrollY, // Add scroll offset for hero
          },
          nav: {
            x: navRect.left + navRect.width / 2,
            y: navRect.top + navRect.height / 2, // Nav is fixed, no scroll offset needed
          }
        });
        setIsReady(true);
      }
    };

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      calculatePositions();
      window.addEventListener('resize', calculatePositions);
    }, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500; // Extended to 500px for smoother animation
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate current position and size based on scroll
  const interpolate = (start: number, end: number, progress: number) => {
    return start + (end - start) * progress;
  };

  // Smooth easing functions for natural movement
  const easeInOutQuart = (t: number) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const easeOutQuint = (t: number) => {
    return 1 - Math.pow(1 - t, 5);
  };
  
  // Don't render on server side
  if (typeof window === 'undefined') return null;
  
  if (!isReady) return null; // Don't render until positions are calculated

  // Use different easing for position vs size for better pathing
  const positionProgress = easeOutQuint(scrollProgress); // Smooth deceleration for movement
  const sizeProgress = easeInOutQuart(scrollProgress); // More controlled sizing
  
  // Calculate current scroll for positioning
  const currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
  
  // Improved pathing with bezier-like curve for more natural movement
  const startY = positions.hero.y - currentScrollY;
  const endY = positions.nav.y;
  const startX = positions.hero.x;
  const endX = positions.nav.x;
  
  // Add slight arc to the movement path for more natural feel
  const midY = startY + (endY - startY) * 0.3 - 20; // Slight upward arc
  const midX = startX + (endX - startX) * 0.7; // Bias towards end position
  
  // Bezier-like interpolation for curved path
  let currentX, currentY;
  if (positionProgress < 0.5) {
    // First half: from start to mid
    const t = positionProgress * 2;
    currentX = interpolate(startX, midX, t);
    currentY = interpolate(startY, midY, t);
  } else {
    // Second half: from mid to end
    const t = (positionProgress - 0.5) * 2;
    currentX = interpolate(midX, endX, t);
    currentY = interpolate(midY, endY, t);
  }
  
  const currentSize = interpolate(200, 60, sizeProgress); // From 200px to 60px (desktop)

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: currentX - currentSize / 2,
        top: currentY - currentSize / 2,
        width: currentSize,
        height: currentSize,
        zIndex: 100,
        willChange: 'transform',
      }}
    >
      <Image
        src="/images/logo.webp"
        alt="PROLASER CLEAN DXB"
        width={200}
        height={200}
        className="shadow-xl transition-all duration-75 ease-out"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${1 + (scrollProgress * 0.05)})`, // Subtle scaling during movement
        }}
        priority
      />
    </div>
  );
}