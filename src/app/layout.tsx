import type { Metadata } from "next";
import { Inter, Spinnaker } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// Import Spinnaker for display text (like their font_2)
const spinnaker = Spinnaker({
  subsets: ["latin"],
  weight: "400", // Only has 400 weight
  display: 'swap',
  variable: '--font-spinnaker',
});

// Load actual Futura fonts from public/fonts
const futura = localFont({
  src: [
    {
      path: '../../public/fonts/FuturaCyrillicLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicBook.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicMedium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prolaserdxb.com'),
  title: "PROLASER CLEAN DXB - Laser Cleaning Services",
  description: "Revolutionizing Surface Cleaning with Laser Technology. Eco-friendly, precise, and efficient laser cleaning services in Dubai, UAE.",
  keywords: "laser cleaning, Dubai, surface cleaning, eco-friendly, industrial cleaning, residential cleaning, HoReCa cleaning, UAE, manufacturing, aerospace, automotive",
  authors: [{ name: "PROLASER CLEAN DXB" }],
  creator: "PROLASER CLEAN DXB",
  publisher: "PROLASER CLEAN DXB",
  category: "Industrial Services",
  classification: "Business",
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PROLASER CLEAN DXB - Advanced Laser Cleaning Services in Dubai",
    description: "Professional laser cleaning services in Dubai, UAE. Eco-friendly, chemical-free surface cleaning for manufacturing, aerospace, automotive, HoReCa, and residential applications.",
    url: "https://prolaserdxb.com",
    siteName: "PROLASER CLEAN DXB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        width: 200,
        height: 200,
        alt: "PROLASER CLEAN DXB - Laser Cleaning Services Logo",
      },
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "PROLASER CLEAN DXB - Advanced Laser Cleaning Technology",
      },
    ],
    emails: ["contact@prolaserdxb.com"],
    phoneNumbers: ["+971582751122", "+971581085800"],
    countryName: "United Arab Emirates",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROLASER CLEAN DXB - Laser Cleaning Services",
    description: "Eco-friendly laser cleaning services in Dubai. Chemical-free, precise surface cleaning for all industries.",
    images: ["/images/hero-bg.webp"],
    creator: "@prolaserdxb",
    site: "@prolaserdxb",
  },
  other: {
    // WhatsApp specific metadata
    "whatsapp:title": "PROLASER CLEAN DXB - Laser Cleaning Services",
    "whatsapp:description": "🔥 Advanced Laser Cleaning in Dubai! Eco-friendly, chemical-free surface cleaning for all industries. Get your FREE quote today! 📞 +971 58 275 1122",
    "whatsapp:image": "https://prolaserdxb.com/images/hero-bg.webp",
    "whatsapp:url": "https://prolaserdxb.com",
    
    // Telegram specific metadata
    "telegram:title": "PROLASER CLEAN DXB - Revolutionary Laser Cleaning",
    "telegram:description": "🚀 Revolutionizing Surface Cleaning with Laser Technology in Dubai, UAE\n\n✅ Eco-friendly & Chemical-free\n✅ Manufacturing, Aerospace, Automotive\n✅ HoReCa & Residential Services\n\n📞 Contact: +971 58 275 1122\n📧 contact@prolaserdxb.com",
    "telegram:image": "https://prolaserdxb.com/images/hero-bg.webp",
    "telegram:channel": "@prolaserdxb",
    
    // Generic messaging apps fallback
    "mobile-web:app-title": "PROLASER CLEAN DXB",
    "mobile-web:app-description": "Professional laser cleaning services in Dubai. Eco-friendly, precise, efficient.",
    "mobile-web:app-image": "https://prolaserdxb.com/images/logo.webp",
    
    // Additional rich snippet data
    "business:contact_data:phone_number": "+971582751122",
    "business:contact_data:email": "contact@prolaserdxb.com",
    "business:contact_data:website": "https://prolaserdxb.com",
    "business:contact_data:country_name": "United Arab Emirates",
    "business:contact_data:locality": "Dubai",
    "business:contact_data:region": "Dubai",
    "business:hours": "Sunday-Thursday: 8AM-6PM",
    "business:category": "Industrial Cleaning Services",
  },
  alternates: {
    canonical: "https://prolaserdxb.com",
    languages: {
      "en-US": "https://prolaserdxb.com",
      "ar-AE": "https://prolaserdxb.com/ar",
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-site-verification-code-here",
    other: {
      bing: ["bing-site-verification-code-here"],
    },
  },
  appLinks: {
    web: {
      url: "https://prolaserdxb.com",
      should_fallback: true,
    },
  },
  bookmarks: ["https://prolaserdxb.com"],
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spinnaker.variable} ${futura.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-mobile.webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-desktop.webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}