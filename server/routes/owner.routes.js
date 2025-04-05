import express from "express";
import {
	getOwnerProfile,
	changeEmailOTP,
	updateOwnerProfile,
	verifyChangeEmailOtp,
	changePhoneNumber,
} from "../controllers/owner.controller.js";
import { protectedRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/profile/:id", protectedRoute, getOwnerProfile);
router.post("/password/:id", protectedRoute, updateOwnerProfile);
router.post("/change-email", protectedRoute, changeEmailOTP);
router.post("/verify-otp/:id", protectedRoute, verifyChangeEmailOtp);
router.post("/number/:id", protectedRoute, changePhoneNumber);

export default router;
