
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Express Logistics has transformed our supply chain operations. Their reliable service and innovative solutions have helped us reduce costs and improve delivery times.",
      author: "Sarah Johnson",
      position: "Supply Chain Director",
      company: "Global Retail Inc."
    },
    {
      quote: "We've been working with Express Logistics for over 5 years, and they've consistently delivered exceptional service. Their team is responsive, professional, and always goes the extra mile.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Tech Solutions Ltd."
    },
    {
      quote: "The real-time tracking and detailed analytics provided by Express Logistics have given us unprecedented visibility into our shipments. Their technology integration is seamless.",
      author: "Emma Rodriguez",
      position: "Logistics Coordinator",
      company: "Innovate Manufacturing"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-logistics-blue mb-4">What Our Clients Say</h2>
          <p className="text-xl text-logistics-darkGray max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-on-scroll">
              <CardContent className="p-8">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-logistics-gray rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-logistics-blue">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
