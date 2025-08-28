import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LogoAnimation from '@/components/LogoAnimation';
import IntroSection from '@/components/IntroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LogoAnimation />
      <Navigation />
      <Hero />
      <IntroSection />
      <HowItWorks />
      <Benefits />
      <Industries />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}