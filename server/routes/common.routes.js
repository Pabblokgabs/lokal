import express from "express";
import { getMe, login, logout } from "../controllers/common.controller.js";
import { protectedRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signin", login);
router.post("/logout", logout);
router.post("/me", protectedRoute, getMe);

export default router;
