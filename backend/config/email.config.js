require("dotenv").config();

const brevoConfig = {
  apiKey: process.env.BREVO_PASS, // On utilise la même clé API
  senderEmail: process.env.BREVO_USER,
};

module.exports = brevoConfig;
