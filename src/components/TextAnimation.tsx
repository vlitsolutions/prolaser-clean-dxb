'use client';

import { useState, useEffect } from 'react';

export default function TextAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [positions, setPositions] = useState({ 
    hero: { x: 0, y: 0 }, 
    nav: { x: 0, y: 0 } 
  });
  const [isReady, setIsReady] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Handle mounting state
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Calculate positions of hero and nav targets using IDs
  useEffect(() => {
    if (!hasMounted) return;

    const calculatePositions = () => {
      const heroTarget = document.getElementById('hero-text-target');
      const navTarget = document.getElementById('nav-text-target');
      
      if (heroTarget && navTarget) {
        const heroRect = heroTarget.getBoundingClientRect();
        const navRect = navTarget.getBoundingClientRect();
        
        setPositions({
          hero: {
            x: heroRect.left + heroRect.width / 2,
            y: heroRect.top + heroRect.height / 2 + window.scrollY,
          },
          nav: {
            x: navRect.left + navRect.width / 2,
            y: navRect.top + navRect.height / 2,
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
  }, [hasMounted]);

  // Handle scroll animation
  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
      
      // Fade out original hero text almost instantly when scrolling starts
      const heroTarget = document.getElementById('hero-text-target');
      if (heroTarget) {
        const opacity = Math.max(0, 1 - progress * 20); // Fade out almost instantly
        heroTarget.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMounted]);

  // Calculate current position and size based on scroll
  const interpolate = (start: number, end: number, progress: number) => {
    return start + (end - start) * progress;
  };

  // Smooth easing functions
  const easeOutQuint = (t: number) => {
    return 1 - Math.pow(1 - t, 5);
  };

  const easeInOutQuart = (t: number) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };
  
  // Don't render until component has mounted to avoid hydration mismatch
  if (!hasMounted) return null;
  
  // Don't render until positions are calculated to avoid glitch
  if (!isReady) return null;
  
  // Don't render if there's no scroll progress (text should only show when animating)
  if (scrollProgress === 0) return null;

  const positionProgress = easeOutQuint(scrollProgress);
  const sizeProgress = easeInOutQuart(scrollProgress);
  
  // Calculate current scroll for positioning
  const currentScrollY = window.scrollY;
  
  // Calculate path
  const startY = positions.hero.y - currentScrollY;
  const endY = positions.nav.y;
  const startX = positions.hero.x;
  const endX = positions.nav.x;
  
  // Add slight arc to the movement path
  const midY = startY + (endY - startY) * 0.3 - 20;
  const midX = startX + (endX - startX) * 0.7;
  
  // Bezier-like interpolation for curved path
  let currentX, currentY;
  if (positionProgress < 0.5) {
    const t = positionProgress * 2;
    currentX = interpolate(startX, midX, t);
    currentY = interpolate(startY, midY, t);
  } else {
    const t = (positionProgress - 0.5) * 2;
    currentX = interpolate(midX, endX, t);
    currentY = interpolate(midY, endY, t);
  }
  
  // Calculate text sizes for responsive animation - much faster size reduction
  const quickSizeProgress = Math.min(scrollProgress * 5, 1); // Size reduces 5x faster
  const titleSizeDesktop = interpolate(56, 20, quickSizeProgress); // 3.5rem to 1.25rem
  const titleSizeMobile = interpolate(48, 18, quickSizeProgress); // 3rem to 1.125rem
  const subtitleSizeDesktop = interpolate(24, 14, quickSizeProgress); // 1.5rem to 0.875rem  
  const subtitleSizeMobile = interpolate(20, 12, quickSizeProgress); // 1.25rem to 0.75rem

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: currentX,
        top: currentY,
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        willChange: 'transform',
      }}
    >
      <div className="text-center">
        <h1 
          className="font-bold transition-all duration-75 ease-out mb-1"
          style={{
            fontSize: `${titleSizeMobile}px`,
            lineHeight: 1.1,
            color: scrollProgress > 0.3 ? '#1f2937' : 'white',
            textShadow: scrollProgress > 0.3 ? 'none' : '2px 4px 8px rgba(0,0,0,0.8)',
          }}
        >
          <span className="hidden sm:inline" style={{ fontSize: `${titleSizeDesktop}px` }}>
            PROLASER CLEAN
          </span>
          <span className="sm:hidden">
            PROLASER CLEAN
          </span>
        </h1>
        <p 
          className="font-light transition-all duration-75 ease-out text-left"
          style={{
            fontSize: `${subtitleSizeMobile}px`,
            lineHeight: 1,
            color: scrollProgress > 0.3 ? '#2563eb' : '#60a5fa',
            textShadow: scrollProgress > 0.3 ? 'none' : '2px 4px 8px rgba(0,0,0,0.6)',
          }}
        >
          <span className="hidden sm:inline" style={{ fontSize: `${subtitleSizeDesktop}px` }}>
            DXB
          </span>
          <span className="sm:hidden">
            DXB
          </span>
        </p>
      </div>
    </div>
  );
}