import express from "express";
import { protectOwnerRoute } from "../middleware/protectOwnerRoutes";
import {
	getOwnerProfile,
	changeEmailOTP,
	updateOwnerProfile,
	verifyChangeEmailOtp,
	changePhoneNumber,
} from "../controllers/owner.controller";

const router = express.Router();

router.get("/profile/:id", protectOwnerRoute, getOwnerProfile);
router.post("/password/:id", protectOwnerRoute, updateOwnerProfile);
router.post("/change-email", protectOwnerRoute, changeEmailOTP);
router.post("/verify-otp/:id", protectOwnerRoute, verifyChangeEmailOtp);
router.post("/number/:id", protectOwnerRoute, changePhoneNumber);

export default router;
