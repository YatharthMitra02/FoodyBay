import { Router } from "express";
import { get } from "mongoose";
import { verifyFoodPartner } from "../middleware/auth.middleware.js";
import getFoodPartnerProfile from "../controllers/foodPartner.contrller.js";

const router = Router();
router.get("/:id", verifyFoodPartner,getFoodPartnerProfile);

export default router;