const express = require("express");

const app = express();

// Middleware to read JSON
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("Smart Reconciliation Backend is running 🚀");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
