// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import connectDB from "./db/index.js";
import { app } from "./app.js";
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    server.on("error", (err) => {
      console.error("Error in listening to server:", err);
    });
  })
  .catch((err) => {
    console.error("Error in connecting to database:", err);
  });





// import express from "express"
// const app = express()
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Error in connecting to database")

//             app.listen(process.env.PORT,()=>{
//                 console.log(`Server is running on port ${process.env.PORT}`)        
//             })
//         })
//     }catch(err){
//         console.error(err);
//     }
// })()