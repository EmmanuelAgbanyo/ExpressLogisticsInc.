
import React from 'react';
import { Truck, Ship, Plane, Package, BarChart, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: <Truck size={40} className="text-logistics-blue" />,
      title: 'Road Freight',
      description: 'Efficient and reliable road transportation services covering local, national and international routes.'
    },
    {
      icon: <Ship size={40} className="text-logistics-blue" />,
      title: 'Ocean Freight',
      description: 'Global ocean freight services with comprehensive port-to-port and door-to-door solutions.'
    },
    {
      icon: <Plane size={40} className="text-logistics-blue" />,
      title: 'Air Freight',
      description: 'Fast and secure air freight services for time-sensitive shipments worldwide.'
    },
    {
      icon: <Package size={40} className="text-logistics-blue" />,
      title: 'Warehousing',
      description: 'Strategic warehousing solutions with state-of-the-art facilities and inventory management.'
    },
    {
      icon: <BarChart size={40} className="text-logistics-blue" />,
      title: 'Supply Chain',
      description: 'End-to-end supply chain management to optimize your logistics operations.'
    },
    {
      icon: <Clock size={40} className="text-logistics-blue" />,
      title: 'Express Delivery',
      description: 'Time-critical delivery services ensuring your shipments arrive exactly when needed.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-logistics-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-logistics-blue mb-4">Our Services</h2>
          <p className="text-xl text-logistics-darkGray max-w-3xl mx-auto">
            We offer comprehensive logistics solutions customized to meet the specific needs of your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
