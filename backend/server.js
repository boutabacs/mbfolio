const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contact.routes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Route de test
app.get("/", (req, res) => {
  res.send("Le serveur du Portfolio est en cours d'exécution...");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
