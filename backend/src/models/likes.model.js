import mongoose from 'mongoose'
import User from './user.model.js'
import Food from './food.model.js';
const likeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food",
        required:true
    },
    count:{
        type: Number,
        default:0

    }

},{timestamps:true})

const Like = mongoose.model("Like", likeSchema);
export default Like;