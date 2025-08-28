'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Load video after initial page load and when idle
    const loadVideo = () => {
      // Use requestIdleCallback if available, otherwise setTimeout
      const callback = () => {
        if (videoRef.current) {
          // Start loading the video
          videoRef.current.load();
          setVideoLoaded(true);
        }
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(callback, 1000);
      }
    };

    // Wait for page to be fully loaded before attempting video load
    if (document.readyState === 'complete') {
      loadVideo();
    } else {
      window.addEventListener('load', loadVideo);
      return () => window.removeEventListener('load', loadVideo);
    }
  }, []);

  return (
    <>
      {/* Static background image always visible for LCP */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      
      {/* Video loads only after page load and when idle */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-bg.jpg"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
          zIndex: 1
        }}
        onCanPlayThrough={() => {
          setVideoReady(true);
          // Ensure video starts playing
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              console.log('Autoplay prevented, keeping static image');
            });
          }
        }}
        onError={() => {
          console.log('Video failed to load, keeping fallback image');
          if (videoRef.current) {
            videoRef.current.style.display = 'none';
          }
        }}
      >
        {videoLoaded && (
          <source src="/images/hero-bg.webm" type="video/webm" />
        )}
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2 }} />
    </>
  );
}