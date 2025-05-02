
// Simple email service without EmailJS
export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    // In a real app, this would connect to a backend API
    // For now, we'll simulate a successful response
    
    // Create email content that would be sent
    const emailContent = {
      to: "xpresslogisticsinc@outlook.com",
      from: data.email,
      subject: `Contact Request from ${data.name}`,
      body: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        
        Message:
        ${data.message}
      `
    };
    
    console.log("Sending email with content:", emailContent);
    
    // Simulate successful API call with a small delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
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

// Track shipment service
export const sendTrackingRequest = async (trackingNumber: string, email: string) => {
  try {
    // In a real app, this would connect to a backend API
    // For now, we'll simulate a successful response
    
    // Create email content that would be sent
    const emailContent = {
      to: "xpresslogisticsinc@outlook.com",
      from: email,
      subject: `Tracking Request for ${trackingNumber}`,
      body: `
        Tracking Number: ${trackingNumber}
        Customer Email: ${email}
        
        This customer has requested tracking information for the above shipment.
        Please send tracking details to the customer's email address.
      `
    };
    
    console.log("Sending tracking request email with content:", emailContent);
    
    // Simulate successful API call with a small delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
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

// No need to initialize EmailJS anymore
export const initEmailJS = (_userID: string) => {
  console.log("Email service ready");
};
