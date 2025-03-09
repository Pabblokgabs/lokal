import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Nylas from "nylas";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import ownerAuthRoutes from "./routes/owner.auth.routes.js";
import ownerRoutes from "./routes/owner.routes.js";
import commonRoutes from "./routes/common.routes.js";
import spotAuthRoutes from "./routes/spot.auth.routes.js";

import connectMongoDB from "./lib/connectMongoDB.js";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

const nylas = new Nylas({
	apiKey: process.env.NYLAS_API_KEY,
});

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/owner/auth", ownerAuthRoutes);
app.use("/api/v1/owner", ownerRoutes);
app.use("/api/v1/common", commonRoutes);
app.use("/api/v1/spot/auth", spotAuthRoutes);

app.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
	connectMongoDB();
});
