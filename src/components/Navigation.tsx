'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Placeholder and Text */}
          <div className="flex items-center space-x-3">
            {/* Logo Placeholder - hidden on mobile, shown on larger screens */}
            <div className="relative w-[60px] h-[60px] hidden sm:block" id="nav-logo-target">
              {/* The LogoAnimation component will position itself here when scrolled */}
            </div>
            
            {/* Company Text for Mobile - Always visible on mobile */}
            <div className="block sm:hidden">
              <h1 className={cn(
                "text-lg font-bold transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                PROLASER CLEAN
              </h1>
              <p className="text-xs text-primary-600">
                DXB
              </p>
            </div>
            
            {/* Company Text for Desktop - Shows when scrolled */}
            <div className={cn(
              "hidden sm:block transition-all duration-500",
              isScrolled 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            )}>
              <h1 className="text-xl font-bold text-gray-900">
                PROLASER CLEAN
              </h1>
              <p className="text-sm text-primary-600">
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
                  'px-6 py-3 text-base font-light transition-all duration-300 hover:text-primary-600 hover:bg-black/5',
                  isScrolled ? 'text-gray-500' : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
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
                'lg:hidden p-2 transition-colors',
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
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