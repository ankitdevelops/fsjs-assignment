import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const PORT = 8000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
