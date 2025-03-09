import express from "express";
import { protectOwnerRoute } from "../middleware/protectOwnerRoutes.js";
import { registerSpot } from "../controllers/spot.auth.controller.js";

const router = express.Router();

router.post("/register/:id", protectOwnerRoute, registerSpot)

export default router;