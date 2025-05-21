import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
// app.get("/",indexRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
