
import emailjs from 'emailjs-com';

// EmailJS configuration
const SERVICE_ID = 'service_v89u66';
const TEMPLATE_ID = 'template_hx41bww';
const PUBLIC_KEY = '4stgrvYQShib7y_5g';

// Initialize EmailJS
export const initEmailJS = (serviceId: string) => {
  emailjs.init(PUBLIC_KEY);
  console.log("EmailJS initialized with service:", serviceId);
};

// Send contact form email
export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    // Format the data for EmailJS template
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: 'xpresslogisticsinc@outlook.com'
    };
    
    console.log("Sending email with EmailJS:", templateParams);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
    console.log("Email sent successfully:", response);
    
    return {
      success: true,
      message: "Your message has been sent successfully!"
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later."
    };
  }
};

// Track shipment request with EmailJS
export const sendTrackingRequest = async (trackingNumber: string, email: string) => {
  try {
    // Format the data for EmailJS template
    const templateParams = {
      from_name: 'Tracking Request',
      from_email: email,
      message: `Tracking request for shipment number: ${trackingNumber}`,
      tracking_number: trackingNumber,
      to_email: 'xpresslogisticsinc@outlook.com'
    };
    
    console.log("Sending tracking request with EmailJS:", templateParams);
    
    // Send the email using EmailJS
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
    console.log("Tracking request sent successfully:", response);
    
    return {
      success: true,
      message: "Tracking request has been sent. We'll update you shortly."
    };
  } catch (error) {
    console.error("Failed to send tracking request:", error);
    return {
      success: false,
      message: "Failed to process tracking request. Please try again later."
    };
  }
};
