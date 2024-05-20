import mongoose from "mongoose";

const sheltersSchema = mongoose.Schema({
	id: Number,
	title: String,
	location: String,
	image: String,
	city: String,
	open: String,
	close: String,
});

export const Shelters = new mongoose.model("allshelters", sheltersSchema);
