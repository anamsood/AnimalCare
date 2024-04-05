import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
	path: "./.env",
});

const connectDb = async () => {
	try {
		await mongoose.connect(`${process.env.MONGO_URI}/animalcare`);
		console.log("mongodb connected");
	} catch (error) {
		console.log(error, "error in mongo file");
	}
};

export default connectDb;
