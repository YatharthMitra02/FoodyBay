import Food from "../models/food.model.js";
import FoodPartner from "../models/foodpar.model.js";

const getFoodPartnerProfile = async(req,res)=>{
    const foodPartnerId = req.params.id;
    const foodPartner = await FoodPartner.findById(foodPartnerId);
    const foodItemByFoodPartner = await Food.find({foodPartner : foodPartnerId})
    if(!foodPartner){
        return res.status(404).json({
            message:" food partner not exist"
        })
    }
    return res.status(201).json({
        message:"food partner fetch sucessfully" ,
        foodPartner :{
            ...foodPartner.toObject(),
            foodItem:foodItemByFoodPartner
        }   
})
}
export default getFoodPartnerProfile