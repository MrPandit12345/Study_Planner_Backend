import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


const Port = process.env.PORT || 8000;
app.use(express.json());

app.get('/trial',(req,res)=>{
    res.json({
        data :"Haa bhai yeh trial hai means trailer",
        message:"success"
    })
})

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
