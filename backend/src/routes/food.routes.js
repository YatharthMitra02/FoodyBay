import { Router } from "express";
import { verifyFoodPartner, verifyUser } from "../middleware/auth.middleware.js";
import { createFood, getFoodItems } from "../controllers/food.controller.js";
import multer from "multer";
import { LikeFoodReel } from "../controllers/food.controller.js";
import { saveVideo } from "../controllers/food.controller.js";
const upload = multer({
    storage: multer.memoryStorage(),
})


const router = Router();



router.post("/", verifyFoodPartner,upload.single("video") ,createFood)


// this api gets all the video of the food items of the food created so that we can scroll them 
router.get("/food-items",verifyUser,getFoodItems)

router.post("/like", verifyUser,LikeFoodReel);
router.post("/save", verifyUser, saveVideo)
export default router