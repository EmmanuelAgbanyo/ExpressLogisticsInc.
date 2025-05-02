
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
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  // Initialize scroll animation
  useAnimateOnScroll();
  
  // Initialize EmailJS with the exact service ID
  React.useEffect(() => {
    // Initialize with PUBLIC_KEY only, no need to pass service ID
    initEmailJS('4stgrvYQShib7y_5g');
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
      <Toaster />
    </div>
  );
};

export default Index;
