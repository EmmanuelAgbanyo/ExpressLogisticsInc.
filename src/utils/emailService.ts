
// Direct SMTP email service simulation
// Note: In a real production environment, this would connect to a backend API
// that would handle the actual SMTP connection to Outlook

// Email configuration
const EMAIL_ADDRESS = 'xpressLogisticsInc@outlook.com';

// Initialize email service
export const initEmailService = () => {
  console.log("Email service initialized");
};

// Simulated SMTP email sending function
export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    console.log("Simulating SMTP email send to", EMAIL_ADDRESS);
    
    // Format the email data
    const emailData = {
      from: data.email,
      to: EMAIL_ADDRESS,
      subject: `Contact Form Submission from ${data.name}`,
      body: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone || 'Not provided'}
        
        Message:
        ${data.message}
      `
    };
    
    console.log("Email data prepared:", emailData);
    
    // In a real implementation, this would be an API call to a backend
    // that handles the SMTP communication
    const response = await simulateSendEmail(emailData);
    
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

// Track shipment request 
export const sendTrackingRequest = async (trackingNumber: string, email: string) => {
  try {
    console.log("Simulating SMTP tracking request email to", EMAIL_ADDRESS);
    
    // Format the email data
    const emailData = {
      from: email,
      to: EMAIL_ADDRESS,
      subject: `Tracking Request for ${trackingNumber}`,
      body: `
        Tracking Number: ${trackingNumber}
        Customer Email: ${email}
        
        This is an automated tracking request.
      `
    };
    
    console.log("Tracking request email data prepared:", emailData);
    
    // In a real implementation, this would connect to SMTP
    const response = await simulateSendEmail(emailData);
    
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

// Simulate sending email (would be replaced with actual SMTP in backend)
const simulateSendEmail = async (emailData: {
  from: string;
  to: string;
  subject: string;
  body: string;
}) => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Simulate 95% success rate
      if (Math.random() > 0.05) {
        console.log("Email sent successfully:", emailData);
        resolve({ status: "success" });
      } else {
        console.error("Email sending failed");
        reject(new Error("Failed to send email"));
      }
    }, 800);
  });
};
