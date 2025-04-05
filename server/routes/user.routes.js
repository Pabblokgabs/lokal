import express from "express";
import { protectedRoute } from "../middleware/protectRoute.js";
import {
	followUnfollow,
	getSpotProfile,
	mightLike,
	suggestions,
	updateProfileImage,
	updateUserProfile,
	changeEmailOTP,
	verifyChangeEmailOtp,
	changePhoneNumber,
	getEventDetails,
	favorUnfavor,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/spot/:id", protectedRoute, getSpotProfile);
router.get("/event/:id", protectedRoute, getEventDetails);
router.get("/suggested", protectedRoute, suggestions);
router.get("/mightlike", protectedRoute, mightLike);
router.post("/follow/:id", protectedRoute, followUnfollow);
router.post("/update/:id", protectedRoute, updateUserProfile);
router.post("/profile-image/:id", protectedRoute, updateProfileImage);
router.post("/email/:id", protectedRoute, changeEmailOTP);
router.post("/change-email/:id", protectedRoute, verifyChangeEmailOtp);
router.post("/change-number", protectedRoute, changePhoneNumber);
router.post("/favor/:id", protectedRoute, favorUnfavor);

export default router;
