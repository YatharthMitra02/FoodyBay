import { Router } from "express";
import { 
    logedOut,
    logedOutFoodPartner,
    loginFoodPartner,
    loginUser, 
    registerFoodPartner,
    registerUser
     } from "../controllers/auth.controller.js";

     

const router = Router()
// user auth API
 router.post("/user/register", registerUser )
 router.post("/user/logedin" , loginUser)
 router.get("/user/logedout" , logedOut)

 // FoodPartner Auth API
 router.post("/foodpartner/register", registerFoodPartner)
 router.post("/foodpartner/login", loginFoodPartner)
 router.get("/foodpartner/logedout", logedOutFoodPartner)

export default router;