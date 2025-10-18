import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
    await mongoose.connect("mongodb+srv://yatharth:yatharth321@cluster0.i6jseqs.mongodb.net/zomato")
    console.log("Database connected sucessfully")
}

 catch (error) {
console.log("Database not connected succesfully", error)
    
}
}

export default connectDB