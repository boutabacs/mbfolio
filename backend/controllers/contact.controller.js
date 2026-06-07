const Contact = require("../models/contact.model");
const {
  sendContactEmail,
  sendConfirmationEmail,
} = require("../services/email.service");

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // 1. Sauvegarder dans la base de données (optionnel mais recommandé)
    // const newContact = new Contact({ name, email, message });
    // await newContact.save();

    // 2. Envoyer l'email à vous-même
    await sendContactEmail(name, email, message);

    // 3. Envoyer l'email de confirmation à l'utilisateur
    await sendConfirmationEmail(name, email);

    res.status(200).json({
      message:
        "Your message has been sent successfully! A confirmation email has been sent to you.",
      success: true,
    });
  } catch (error) {
    console.error("Error in contact controller:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your message." });
  }
};

module.exports = {
  submitContactForm,
};
