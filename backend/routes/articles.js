const express = require("express");
const router = express.Router();

let articles = [
  { title: "Understanding FIR", content: "Basic legal awareness..." }
];

router.get("/", (req, res) => {
  res.json(articles);
});

router.post("/", (req, res) => {
  articles.push(req.body);
  res.json({ message: "Article added" });
});

module.exports = router;