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
	openFrom: {
		type: String,
		required: true,
	},
	openTill: {
		type: String,
		required: true,
	},
});

const Shelters = new mongoose.model("Shelters", sheltersSchema);
