
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` }}>
        <div className="hero-gradient absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 animate-fade-in">
            Global Logistics Solutions for Modern Business
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            Streamline your supply chain with our comprehensive freight and logistics services, 
            designed to optimize your operations and deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-logistics-green hover:bg-green-800 text-white px-8 py-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Our Services <ChevronRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
