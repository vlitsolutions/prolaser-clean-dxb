import { Phone, Mail, Globe, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    'Manufacturing & Industrial Cleaning',
    'Aerospace & Automotive',
    'HoReCa (Hotels, Restaurants, Cafes)',
    'Residential Cleaning Services',
    'Rust & Corrosion Removal',
    'Surface Preparation & Restoration'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo.webp"
                alt="PROLASER CLEAN DXB"
                width={60}
                height={60}
                className="mr-4 shadow-lg"
              />
              <div>
                <h3 className="font_6 text-white mb-1">
                  PROLASER CLEAN
                </h3>
                <p className="font_9 text-primary-400">
                  DXB
                </p>
              </div>
            </div>
            <p className="font_8 text-gray-300 mb-6 leading-relaxed">
              Revolutionizing surface cleaning with advanced laser technology. Eco-friendly, precise, and efficient cleaning solutions for all industries.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Connect with us on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font_6 text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font_8 text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font_6 text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="font_8 text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font_6 text-white mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="tel:+971582751122"
                    className="font_8 text-gray-300 hover:text-primary-400 transition-colors block"
                  >
                    +971 58 275 1122
                  </a>
                  <a 
                    href="tel:+971581085800"
                    className="font_8 text-gray-300 hover:text-primary-400 transition-colors block"
                  >
                    +971 58 108 5800
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@prolaserdxb.com"
                  className="font_8 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  contact@prolaserdxb.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="https://prolaserdxb.com"
                  className="font_8 text-gray-300 hover:text-primary-400 transition-colors"
                >
                  prolaserdxb.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="font_8 text-gray-300">
                  Dubai, UAE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font_9 text-gray-400">
              © {currentYear} PROLASER CLEAN DXB. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="font_9 text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font_9 text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font_9 text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}