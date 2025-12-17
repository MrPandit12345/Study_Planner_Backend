import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Authorization from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    allowHeaders: ["Authorization", "Content-Type"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", Authorization);

export default app;
