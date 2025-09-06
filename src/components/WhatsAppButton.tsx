'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'm interested in your laser cleaning services.", 
  className = "",
  children 
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className={`flex items-center justify-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children || (
        <>
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </>
      )}
    </motion.button>
  );
}

// Sticky WhatsApp Button Component
export function StickyWhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 2,
        type: "spring",
        stiffness: 100
      }}
    >
      <WhatsAppButton
        phoneNumber={phoneNumber}
        className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </WhatsAppButton>
    </motion.div>
  );
}