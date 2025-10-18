import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt, { hash } from "bcrypt"
import FoodPartner from "../models/foodpar.model.js";

const registerUser = async (req , res)=>{
    const {fullName, email, password} = req.body;
    const userAlredyExist = await User.findOne({email})
    if(userAlredyExist){
        return res.status(400).json({
            message: "user already exists"
        })
    }

    const hashPassword  = await bcrypt.hash(password, 10);

    const user = await User.create({
        fullName,
        email,
        password:hashPassword
    })
    const token = jwt.sign({
        id : user._id
    },
"#mitra@0431")
res.cookie("token", token)

return res.status(201).json({
    message:"user register succesfully",
    user:{
        id:user._id,
        fullName:user.fullName,
        email:user.email,
        
    }
})

    
}

const loginUser = async(req,res)=>{
    const { email, password}  = req.body

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"Invalid email and password"
        })
}
 const isPasswordValid = await bcrypt.compare(password , user.password)
        if(!isPasswordValid){
            return res.status(400).json({
                message:"Invalid password"
            })

        }

        const token = jwt.sign({
            id : user._id
        },"#mitr@0431"
    )
    res.cookie("token", token);
    return res.status(200).json({
        message:"user loged In sucessfully",
        user:{
            id:user._id,
            fullName:user.fullName,
            email: user.email
        }
    })
    }
const logedOut = async(req,res)=>{
    res.clearCookie("token")
    return res.status(200).json({
        message:"user logedOut sucessfully"
    })
}

const registerFoodPartner = async (req,res)=>{
    const {fullName, email, password} = req.body

    const isAccValid = await FoodPartner.findOne({email});
    if(isAccValid){
        return res.status(400).json(
          {
            message:"email already exist"
          }
            )}
            const hashPassword  = await bcrypt.hash(password, 10);

            const foodPartner = await FoodPartner.create({
                fullName,
                email,
                password:hashPassword
            })
            const token = await jwt.sign({
                id:foodPartner._id
            },
            "#mitra@0431"
        )
        res.cookie("token", token)
            return res.status(200).json({
                message:"FoodPartner register sucessfully",
                foodPartner:{
                    id :foodPartner._id,
                    fullName:foodPartner.fullName,
                    email:foodPartner.email

                }
            })

}

const loginFoodPartner = async(req, res)=>{
    const {email, password} = req.body
    const foodPartner = await FoodPartner.findOne({email});
    if(!foodPartner){
        return res.status(400).json({
            messsage:"Invalid FoodPartner email"
        })
    }
    const isFoodPartnerExist = await bcrypt.compare(password, foodPartner.password)

    if(!isFoodPartnerExist){
        return res.status(400).json({
            message:"Invalid password"
        })
    }
    const token = jwt.sign({
        id : foodPartner._id
    },
"#mitra@0431")
res.cookie("token", token);

return res.status(200).json({
    message:"Food Partner login Succesfully",
    foodPartner:{
        id:foodPartner._id,
        fullName:foodPartner.fullName,
        email:foodPartner.email
    }
})


}

const logedOutFoodPartner = async(req,res)=>{
    res.clearCookie("token")
    return res.status(201).json({
        message:"Food Partner logedOut succesfully"
    })
}
export{
    registerUser,
    loginUser,
    logedOut,
    registerFoodPartner,
    loginFoodPartner,
    logedOutFoodPartner
    

}