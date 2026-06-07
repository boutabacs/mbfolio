const brevoConfig = require("../config/email.config");

const sendEmailViaAPI = async (payload) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": brevoConfig.apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Brevo API Error: ${JSON.stringify(errorData)}`);
  }

  return response.json();
};

const sendContactEmail = async (name, email, message) => {
  const payload = {
    sender: { email: brevoConfig.senderEmail, name: "Portfolio Contact" },
    to: [{ email: brevoConfig.senderEmail }],
    replyTo: { email: email, name: name },
    subject: `Nouveau message de ${name} via le Portfolio`,
    textContent: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  return sendEmailViaAPI(payload);
};

const sendConfirmationEmail = async (name, email) => {
  const payload = {
    sender: { email: brevoConfig.senderEmail, name: "Mohamed Boutaba" },
    to: [{ email: email, name: name }],
    subject: "Confirmation of Receipt - Mohamed's Portfolio",
    textContent: `Hello ${name},\n\nThank you for reaching out to me. I have successfully received your message and I will get back to you as soon as possible.\n\nBest regards,\nMohamed`,
  };

  return sendEmailViaAPI(payload);
};

module.exports = {
  sendContactEmail,
  sendConfirmationEmail,
};
