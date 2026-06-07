const transporter = require('../config/email.config');

const sendContactEmail = async (name, email, message) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nouveau message de ${name} via le Portfolio`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};

const sendConfirmationEmail = async (name, email) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmation of Receipt - Mohamed\'s Portfolio',
    text: `Hello ${name},\n\nThank you for reaching out to me. I have successfully received your message and I will get back to you as soon as possible.\n\nBest regards,\nMohamed`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail,
};
