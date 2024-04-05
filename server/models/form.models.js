import mongoose from "mongoose";

const formSchema = mongoose.Schema({
	specie: {
		type: String,
		required: true,
	},
	foundLocation: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	recieveEmail: {
		type: Boolean,
		default: false,
		required: true,
	},
});

const Form = new mongoose.model("Form", formSchema);