import jwt from 'jsonwebtoken'
import FoodPartner from '../models/foodpar.model.js'
import User from '../models/user.model.js'

const verifyFoodPartner = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"PLease Login First"
        })
    }

    try {
        const decoded =  jwt.verify(token, "#mitra@0431")
        const foodPartner = await FoodPartner.findById(decoded.id);
        if(!foodPartner){
            return res.status(401).json({
                message:"Food Partner not found"
            })
        }
        req.foodPartner = foodPartner
        next()

        
    } catch (error) {
        return res.status(401).json({
            message:"Invalid token "
        })

        
    }
}

const verifyUser = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
       return res.status(400).json({
            message: "please login first"
        })

    }

   try {
     const decoded = await jwt.verify(token, "#mitra@0431")
     const user = await User.findById(decoded.id);
     if(!user){
         return res.status(400).json({
             message:"User not found"
         })
     }
      req.user = user;
         next()
 
   } catch (error) {
    return res.status(400).json({
        message:"Invalid token"
    })
    
   }
}
export{
    verifyFoodPartner,
    verifyUser
}