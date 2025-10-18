import mongoose from 'mongoose'
import User from './user.model.js'
import Food from './food.model.js';
const saveSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food",
        required:true
    }

},{timestamps:true})

const Save = mongoose.model("Save", saveSchema);
export default Save;