
import React from 'react';

export const Stats = () => {
  const stats = [
    { value: '1.5M+', label: 'Shipments Completed' },
    { value: '50K+', label: 'Happy Clients' },
    { value: '150+', label: 'Countries Served' },
    { value: '98%', label: 'On-time Delivery' }
  ];

  return (
    <section className="py-20 bg-logistics-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
