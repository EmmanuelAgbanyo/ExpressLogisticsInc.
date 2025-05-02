
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { TrackingForm } from './TrackingForm';

export const Footer = () => {
  return (
    <footer className="bg-logistics-darkGray text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="mb-12 bg-logistics-blue p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Track Your Shipment</h3>
          <TrackingForm />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Express<span className="text-logistics-green">Logistics</span></h3>
            <p className="mb-6">
              Your trusted partner for global logistics solutions, delivering reliability and efficiency since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-logistics-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-logistics-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-logistics-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-logistics-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-logistics-green transition-colors">Road Freight</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Supply Chain</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Express Delivery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-logistics-green transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Request a Quote</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-logistics-green transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-logistics-green transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe for updates and exclusive offers</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-logistics-green"
              />
              <button 
                type="submit"
                className="w-full px-4 py-2 rounded bg-logistics-green hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-600 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Express Logistics. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm hover:text-logistics-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-logistics-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-logistics-green transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
