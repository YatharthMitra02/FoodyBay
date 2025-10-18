import mongoose from "mongoose";
import FoodPartner from "./foodpar.model.js";
const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FoodPartner"

    }
},{timestamps:true})
const Food = mongoose.model("Food", foodSchema)
export default Food;