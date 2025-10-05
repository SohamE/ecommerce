import express from "express";
import { connectDb } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { handleError } from "./controllers/error.controller.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json()); // middleware to parse body

app.use("/api/auth", authRoutes);
app.use(handleError);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
