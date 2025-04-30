
import React, { useEffect } from 'react';
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
  
  // Initialize EmailJS
  useEffect(() => {
    // Note: In a production environment, you would use a public key here
    // For this demo, we'll just initialize with a placeholder
    initEmailJS("your_user_id");
    
    console.log('EmailJS initialized with:');
    console.log('- Service ID: service_exx7bq3');
    console.log('- Template ID: template_wdqul2j');
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
