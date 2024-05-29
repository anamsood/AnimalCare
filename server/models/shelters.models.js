import mongoose from "mongoose";

const sheltersSchema = mongoose.Schema({
	title: {
		type: String,
	},
	location: {
		type: String,
	},
	image: {
		type: String,
	},
	city: {
		type: String,
	},
	open: {
		type: String,
	},
	close: {
		type: String,
	},
});

export const Shelters = mongoose.model("allshelters", sheltersSchema);
