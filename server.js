const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Log or handle the message (email, db, etc.)
  console.log("Message received:", { name, email, subject, message });

  res.status(200).json({ message: "Success" });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port", process.env.PORT || 3001);
});