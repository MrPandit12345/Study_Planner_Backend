import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DatabaseURL = process.env.MONGO_URL || ""

const connectDB = async () =>{
    try {
        await mongoose.connect(DatabaseURL);
        console.log("Database Connected Successfull");
    } catch (err) {
        console.log("Error in DB",err);
        throw err;
    }
}

export default connectDB