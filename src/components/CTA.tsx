
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-logistics-green text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-on-scroll">
          Ready to Optimize Your Logistics Operations?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto animate-on-scroll">
          Contact our team today for a free consultation and discover how Express Logistics can transform your supply chain.
        </p>
        <div className="flex justify-center space-x-4 animate-on-scroll">
          <Button size="lg" className="bg-white text-logistics-green hover:bg-gray-100 hover:text-logistics-green px-8 py-6">
            Request a Quote <ChevronRight className="ml-2" size={18} />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
