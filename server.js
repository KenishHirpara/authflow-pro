require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route (for browser)
app.get("/", (req, res) => {
  res.send("🚀 AuthFlow Pro API Running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});