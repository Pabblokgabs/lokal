import express from "express";
import {
	signUp,
	sendingEmailVCode,
	getMe,
} from "../controllers/owner.auth.controller.js";
import { protectOwnerRoute } from "../middleware/protectOwnerRoutes.js";

const router = express.Router();

router.post("/verify-email", sendingEmailVCode);
router.post("/sign-up", signUp);
router.get("/me", protectOwnerRoute, getMe);

export default router;
