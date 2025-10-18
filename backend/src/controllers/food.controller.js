import Food from "../models/food.model.js";
import { uploadFile } from "../service/cloud.service.js";
import Like from "../models/likes.model.js";
import Save from "../models/Save.model.js";
const createFood = async(req ,res)=>{
    

    const fileUploadResult = await uploadFile(req.file.buffer, req.file.originalname );
    

    const foodItem = await Food.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description:req.body.description,
        foodPartner: req.foodPartner._id



    })

    return res.status(201).json({
        messge:"Food created sucessfully",
        food: foodItem
        

    })
    
    
}

const getFoodItems = async (req,res)=>{
    const foodItem= await Food.find({});// return an array of all the food items

    return res.status(201).json({
        message:"food item fetched successfully",
        foodItem
    })
}

const LikeFoodReel = async(req,res)=>{
    const {foodId}= req.body

    const isAlreadyLiked = await Like.findOne({
        user:req.user._id,
        food:foodId
    })
    if(isAlreadyLiked){
        await Like.deleteOne({
            user:req.user._id,
            food:foodId
        })
        await Food.findOneAndUpdate(foodId,{
            $inc : {
                count:-1
            }})
        return res.status(200).json({
            message:"Dislike the video"
        })

    }

  const like = await Like.create({
    user:req.user._id,
    food:foodId
  })
  await foodId.findAndUpdate(foodId,{
    $inc:{count: 1}
  })

  return res.status(201).json({
    message:"Liked the video sucessfully",
    like
  })
}

const saveVideo = async (req,res)=>{
const {foodId}= req.body

    const isAlreadyLiked = await Save.findOne({
        user:req.user._id,
        food:foodId
    })
    if(isAlreadyLiked){
        await Save.deleteOne({
            user:req.user._id,
            food:foodId
        })
        return res.status(200).json({
            message:"unsaved the video"
        })

    }

  const saved = await Like.create({
    user:req.user._id,
    food:foodId
  })

  return res.status(201).json({
    message:"Save the video sucessfully",
    saved
  })
}
export{
    createFood,
    getFoodItems,
    LikeFoodReel ,
    saveVideo
}