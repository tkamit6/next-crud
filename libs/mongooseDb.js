import mongoose from "mongoose";

const connectMongoDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB Connected");
    } catch (error) {
        
        console.log(error);
    }
}
export default connectMongoDb;