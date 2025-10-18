import {app} from "./app.js";
import connectDB from "./db/db.js";

const port = 3000;
// app is started here 

app.listen(port, ()=>{
    console.log(` app is listening on the port ! ${port}`)
})

connectDB();
