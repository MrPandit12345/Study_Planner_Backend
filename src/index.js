import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";


dotenv.config();

const Port = process.env.PORT || 8000;

connectDB().then(()=>{
    app.listen(Port,()=>{
        console.log(`Server is running on port ${Port}`);
    })
})





