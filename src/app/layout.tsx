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
  title: "PROLASER CLEAN DXB - Laser Cleaning Services",
  description: "Revolutionizing Surface Cleaning with Laser Technology. Eco-friendly, precise, and efficient laser cleaning services in Dubai, UAE.",
  keywords: "laser cleaning, Dubai, surface cleaning, eco-friendly, industrial cleaning, residential cleaning, HoReCa cleaning",
  authors: [{ name: "PROLASER CLEAN DXB" }],
  creator: "PROLASER CLEAN DXB",
  publisher: "PROLASER CLEAN DXB",
  openGraph: {
    title: "PROLASER CLEAN DXB - Laser Cleaning Services",
    description: "Revolutionizing Surface Cleaning with Laser Technology",
    url: "https://prolaserdxb.com",
    siteName: "PROLASER CLEAN DXB",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spinnaker.variable} ${futura.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}