const express = require("express");
const cors = require("cors");

// 🔐 ADD THESE
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// 🔐 USE HERE (middleware section)
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use(cors());
app.use(express.json());

// Routes
const contactRoute = require("./routes/contact");
const articleRoute = require("./routes/articles");

app.use("/api/contact", contactRoute);
app.use("/api/articles", articleRoute);

app.listen(5000, () => console.log("Server running on port 5000"));