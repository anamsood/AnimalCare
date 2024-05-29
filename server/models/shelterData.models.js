import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
	title: {
		type: Schema.Types.String,
		ref: "allShelters",
	},
	url: {
		type: String,
		required: true,
	},
});

export const Data = mongoose.model("shelter-data", dataSchema);
