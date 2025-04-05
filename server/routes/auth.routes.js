import express from "express";
import {
	forgotPasswordEmail,
	registration,
	resetPassword,
	sendingEmailOTP,
	verifyForgotPasswordCode,
	verifyOTP,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/email", sendingEmailOTP);
router.post("/otp-verification", verifyOTP);
router.post("/registration", registration);
router.post("/forgot-password", forgotPasswordEmail);
router.post("/verify/forgot-password-email", verifyForgotPasswordCode);
router.post("/reset-password", resetPassword);

export default router;
