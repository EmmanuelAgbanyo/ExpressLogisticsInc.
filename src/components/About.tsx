
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  const benefits = [
    'Global network covering 150+ countries',
    'Industry-leading technology solutions',
    'Dedicated customer support team',
    'Sustainable and eco-friendly options',
    'Customized logistics planning',
    'Real-time shipment tracking'
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <h2 className="text-logistics-blue mb-6">About Express Logistics</h2>
            <p className="text-lg mb-6">
              With over 20 years of experience, Express Logistics has become a leading provider of global logistics solutions. 
              We combine industry expertise with innovative technology to deliver reliable and efficient services tailored to your business needs.
            </p>
            <p className="text-lg mb-8">
              Our mission is to simplify complex supply chains and create seamless logistics experiences for businesses of all sizes, 
              from startups to multinational corporations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-logistics-green mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Logistics Operations" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-10 -left-10 bg-logistics-blue rounded-lg shadow-lg p-6 text-white hidden md:block">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm uppercase">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
