import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import auth from "./routes/auth.route.js";

dotenv.config();

const app = express();
const Port = process.env.PORT || 8000;

app.use(express.json());

app.get("/trial", (req, res) => {
  res.json({
    data: "Haa bhai yeh trial hai means trailer",
    message: "success",
  });
});

app.use("/api/auth", auth);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();
