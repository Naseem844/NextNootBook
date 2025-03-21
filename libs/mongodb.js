 import mongoose from "mongoose";


const connectMongoDb = async () => {
    if (mongoose.connection.readyState === 1) {
      // Already connected
      return;
    }
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      console.error(error);
      throw new Error("Database connection failed");
    }
  };
  export default connectMongoDb;