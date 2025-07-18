import React from 'react';
import { ContactForm } from './ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-logistics-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-logistics-blue mb-4">Get In Touch</h2>
          <p className="text-xl text-logistics-darkGray max-w-3xl mx-auto">
            Have questions about our services? Contact us today and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>

          {/* Contact Information Section */}
          <div className="bg-logistics-blue text-white p-8 rounded-lg shadow-md h-full animate-on-scroll flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="flex items-start mb-6">
                <Mail className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>xpresslogisticsinc@outlook.com</p>
                  <p>support@expresslogistics.com</p>
                </div>
              </div>
               <div className="flex items-start mb-6">
                  <Phone className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p>(937) 807-2193</p>
                 </div>
                </div>

              <div className="flex items-start mb-6">
                <MapPin className="mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p>425 Park Avenue,</p>
                  <p>Floor 22,</p>
                  <p>New York, NY 10022</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1">Monday - Friday</td>
                    <td className="text-right">8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1">Saturday</td>
                    <td className="text-right">9:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1">Sunday</td>
                    <td className="text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
