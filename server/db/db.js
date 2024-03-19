import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
	path: "./.env",
});

const connectDb = await mongoose
	.connect(`${process.env.MONGO_URI}/animalcare`)
	.then(() => {
		console.log("mongodb connected");
	})
	.catch((error) => {
		console.log("mongodb error :", error);
	});

export default connectDb;
