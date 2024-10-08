import express from "express";
import { connectDB } from "./DB/connectdb.js"; // Ensure file extension (.js)
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()); ////allows us to pas eincoming request: REQ.BODY
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log("server is working on 5000");
});

///3PZHXyGXSU68MzYZ
