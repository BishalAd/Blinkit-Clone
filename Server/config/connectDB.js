import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Check if MongoDB URL is provided
if (!process.env.MONGODB_URL) {
    throw new Error(
        "Please provide the MongoDB URL in the .env file as MONGODB_URL=your_mongodb_url"
    );
}

// Function to connect to MongoDB
async function connectDB() {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process with a failure code
    }
}

// Export the connectDB function
export default connectDB;