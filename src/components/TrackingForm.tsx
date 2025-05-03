
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const TrackingForm = () => {
  return (
    <form 
      target="_blank" 
      action="https://formsubmit.co/xpressLogisticsInc@outlook.com" 
      method="POST"
      className="flex flex-col md:flex-row gap-4 items-end"
    >
      {/* FormSubmit options */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Shipment Tracking Request" />
      
      <div className="flex-grow">
        <label htmlFor="trackingNumber" className="block mb-2 font-medium text-white">
          Tracking Number
        </label>
        <Input
          id="trackingNumber"
          name="Tracking Number"
          placeholder="Enter your tracking number"
          required
          className="bg-white/10 text-white placeholder:text-gray-300 border-white/30 focus:border-white"
        />
      </div>

      <div className="flex-grow">
        <label htmlFor="email" className="block mb-2 font-medium text-white">
          Email Address
        </label>
        <Input
          id="email"
          name="Email Address"
          type="email"
          placeholder="Your email address"
          required
          className="bg-white/10 text-white placeholder:text-gray-300 border-white/30 focus:border-white"
        />
      </div>

      <Button 
        type="submit"
        className="bg-logistics-green hover:bg-green-600 text-white px-6"
      >
        Track Now
      </Button>
    </form>
  );
};
