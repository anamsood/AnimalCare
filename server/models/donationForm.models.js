import mongoose, { Schema } from "mongoose";

const donationFormSchema = mongoose.Schema({
	user: {
		type: Schema.Types.String,
		ref: "User",
	},
	shelterName: {
		type: String,
		required: true,
	},
	plan: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
});

const DonationForm = new mongoose.model("donation-form", donationFormSchema);
export { DonationForm };
