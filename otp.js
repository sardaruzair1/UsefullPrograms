const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'solutionsardar@gmail.com',
    pass: 'your app password goes here'
  }
});

// Function to generate a random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send the OTP to the specified email address
function sendOTP(email, otp) {
  const mailOptions = {
    from: 'solutionsardar@gmail.com',
    to: email,
    subject: 'One-Time Password (OTP)',
    text: `Your OTP is: ${otp}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Error sending OTP:', error);
    } else {
      console.log('OTP sent successfully:', info.response);
    }
  });
}

// Usage example
const email = 'sardaruzair123456789@gmail.com';
const otp = generateOTP();
sendOTP(email, otp);