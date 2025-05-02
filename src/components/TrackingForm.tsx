
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sendTrackingRequest } from '@/utils/emailService';
import { useToast } from '@/hooks/use-toast';

export const TrackingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    trackingNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.trackingNumber || !formData.email) {
      toast({
        title: "Error",
        description: "Please enter both tracking number and email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendTrackingRequest(formData.trackingNumber, formData.email);

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message
        });

        // Reset form after successful submission
        setFormData({
          trackingNumber: '',
          email: '',
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-grow">
        <label htmlFor="trackingNumber" className="block mb-2 font-medium text-white">
          Tracking Number
        </label>
        <Input
          id="trackingNumber"
          name="trackingNumber"
          value={formData.trackingNumber}
          onChange={handleChange}
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
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
          className="bg-white/10 text-white placeholder:text-gray-300 border-white/30 focus:border-white"
        />
      </div>

      <Button 
        type="submit"
        className="bg-logistics-green hover:bg-green-600 text-white px-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Tracking...' : 'Track Now'}
      </Button>
    </form>
  );
};
