import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`Error connecting mongodb: ${error.message}`);
        process.exit(1)
    }
}

export default connectMongoDB