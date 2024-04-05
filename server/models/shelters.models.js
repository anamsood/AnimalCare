import mongoose from "mongoose";

const sheltersSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	lacation: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	distance: {
		type: Number,
	},
});

const Shelters = new mongoose.model("Shelters", sheltersSchema);
