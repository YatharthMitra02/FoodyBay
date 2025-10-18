
import express from 'express'
import cookieParser from "cookie-Parser"
import router from './routes/auth.route.js';
import foodRouter from './routes/food.routes.js'
import cors from 'cors'
import  foodPartnerRouter  from './routes/food-partner.route.js';
// app create here 
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => {
    // allow all localhost origins or no origin (like Postman)
    if (!origin || origin.startsWith("http://localhost:")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api", router)
app.use("/api/food", foodRouter)
app.use("/api/food-partner", foodPartnerRouter );




export  {app}