const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "your_app_password"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "yourgmail@gmail.com",
    subject: "New Contact Message",
    text: `${name} (${email}): ${message}`
  });

  res.json({ message: "Email sent successfully" });
});

module.exports = router;