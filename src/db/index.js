import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Database connected successfully"+``+`Host: ${connectionInstance.connection.host}`+``+`Database: ${connectionInstance.connection.name}`)

    } catch (err) {
        console.error("Error in connecting to database", err);
        process.exit(1)
    }
}

export default connectDB