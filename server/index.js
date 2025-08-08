const express = require("express");
const cors = require("cors");
const { Resend } = require('resend');
require("dotenv").config();

const app = express();
app.use(cors({origin: "'https://rita-sharipova-portfolio.up.railway.app"}));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_TO, 
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
