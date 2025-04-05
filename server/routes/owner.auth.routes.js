import express from "express";
import {
	signUp,
	sendingEmailVCode,
	forgotPasswordEmail,
	verifyForgotPasswordCode,
	resetPassword,
} from "../controllers/owner.auth.controller.js";

const router = express.Router();

router.post("/verify-email", sendingEmailVCode);
router.post("/sign-up", signUp);
router.post("/forgot-password", forgotPasswordEmail);
router.post("/verify/forgot-password-email", verifyForgotPasswordCode);
router.post("/reset-password", resetPassword);

export default router;
