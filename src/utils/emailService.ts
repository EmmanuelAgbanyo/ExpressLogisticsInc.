
import emailjs from 'emailjs-com';

// EmailJS service configuration
export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const serviceID = "service_exx7bq3";
  const templateID = "template_wdqul2j";
  
  try {
    await emailjs.send(serviceID, templateID, {
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone,
      message: data.message
    });
    
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

// Initialize EmailJS
export const initEmailJS = (userID: string) => {
  emailjs.init(userID);
};
