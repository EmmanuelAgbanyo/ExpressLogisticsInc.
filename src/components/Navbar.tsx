
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { title: 'Home', href: '#hero' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-logistics-blue">Express<span className="text-logistics-green">Logistics</span></span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.title}
                href={item.href}
                className={cn(
                  'font-medium transition-colors',
                  isScrolled ? 'text-logistics-darkGray hover:text-logistics-blue' : 'text-white hover:text-logistics-lightGreen'
                )}
              >
                {item.title}
              </a>
            ))}
            <Button className="bg-logistics-blue hover:bg-blue-700 text-white">
              Get a Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-logistics-darkGray' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a 
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-logistics-darkGray hover:text-logistics-blue"
                >
                  {item.title}
                </a>
              ))}
              <Button className="bg-logistics-blue hover:bg-blue-700 text-white w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
