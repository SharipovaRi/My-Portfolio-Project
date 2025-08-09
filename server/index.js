const express = require("express");
const cors = require("cors");
const { Resend } = require('resend');
require("dotenv").config();

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "https://rita-sharipova-portfolio.up.railway.app"
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}));


app.use(express.json());


app.options('*', cors());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send", async (req, res) => {
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

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error." });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});
