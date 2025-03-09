import express from "express";
import {
	getMe,
	registration,
	sendingEmailOTP,
	verifyOTP,
} from "../controllers/auth.controller.js";
import { protectedRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectedRoute, getMe);
router.post("/email", sendingEmailOTP);
router.post("/otp-verification", verifyOTP);
router.post("/registration", registration);

export default router;
