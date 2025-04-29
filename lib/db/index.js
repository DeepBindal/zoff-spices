import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;
let isConnected = false;

export const connectToDatabase = async () => {
    if(isConnected){
        console.log("Connection already established")
        return;
    }
    if(!MONGO_URI){
        throw new Error("Missing MONGODB url")
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connection established")
    } catch (error) {
        console.log(error)
    }
}