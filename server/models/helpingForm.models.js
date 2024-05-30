import mongoose from "mongoose";

const helpingFormSchema = mongoose.Schema({
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

const HelpingForm = new mongoose.model("helping-form", helpingFormSchema);
export { HelpingForm };
