import mongoose from "mongoose";

const formSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
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
		required: false,
	},
	recieveEmail: {
		type: Boolean,
		default: false,
		required: true,
	},
});

const Form = new mongoose.model("Form", formSchema);
export { Form };
