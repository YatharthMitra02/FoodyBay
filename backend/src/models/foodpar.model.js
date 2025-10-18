import mongoose from "mongoose";

const foopartnerSchema = new mongoose.Schema({
     fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
const FoodPartner  = mongoose.model("FoodPartner", foopartnerSchema);
export default FoodPartner;