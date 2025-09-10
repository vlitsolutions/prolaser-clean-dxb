'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo and Text Animation Target */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* Static Logo - only visible when scrolled */}
            <div className={cn(
              "relative w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] transition-opacity duration-500 flex-shrink-0",
              isScrolled ? "opacity-100" : "opacity-0"
            )}>
              <Image 
                src="/images/logo.webp" 
                alt="PROLASER CLEAN DXB Logo" 
                width={50}
                height={50}
                className="w-full h-full object-cover shadow-lg rounded"
              />
            </div>
            
            {/* Text Animation Target - invisible placeholder that reserves space */}
            <div 
              id="nav-text-target" 
              className="relative opacity-0 flex-shrink-0 min-w-0 ml-1 sm:ml-0"
            >
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 whitespace-nowrap leading-tight">
                PROLASER CLEAN
              </h1>
              <p className="text-xs text-primary-600 leading-none">
                DXB
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-medium transition-all duration-300 hover:text-primary-600 hover:bg-black/5',
                  isScrolled ? 'text-gray-500' : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Contact Info (Desktop) */}
            <div className="hidden xl:flex items-center space-x-4">
              <a
                href="tel:+971582751122"
                className={cn(
                  'flex items-center space-x-2 text-sm transition-colors hover:text-primary-600',
                  isScrolled ? 'text-gray-700' : 'text-white hover:text-blue-200'
                )}
              >
                <Phone size={16} />
                <span>+971 58 275 1122</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-1 sm:p-2 transition-colors flex-shrink-0',
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 mx-2 sm:mx-4 p-4 shadow-lg">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base sm:text-lg text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href={`https://wa.me/971582751122?text=${encodeURIComponent("Hello! I'm interested in your laser cleaning services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                  </svg>
                  <span>Write us on WhatsApp</span>
                </a>
                <a
                  href="tel:+971582751122"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} />
                  <span>+971 58 275 1122</span>
                </a>
                <a
                  href="tel:+971581085800"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone size={16} />
                  <span>+971 58 108 5800</span>
                </a>
                <a
                  href="mailto:contact@prolaserdxb.com"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Mail size={16} />
                  <span>contact@prolaserdxb.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin size={16} />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}