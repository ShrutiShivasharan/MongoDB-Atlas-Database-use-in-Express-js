import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongo Connected to : ${conn.connection.host}`);
    }catch (error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;