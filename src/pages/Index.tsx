
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { initEmailJS } from '@/utils/emailService';

const Index = () => {
  // Initialize scroll animation
  useAnimateOnScroll();
  
  // Initialize simple email service
  React.useEffect(() => {
    initEmailJS("");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
