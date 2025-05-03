
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactForm = () => {
  return (
    <form 
      target="_blank" 
      action="https://formsubmit.co/xpressLogisticsInc@outlook.com" 
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit options */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Contact Form Submission" />
      
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block mb-2 font-medium">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-logistics-blue hover:bg-blue-700 text-white py-6"
      >
        Send Message
      </Button>
    </form>
  );
};
