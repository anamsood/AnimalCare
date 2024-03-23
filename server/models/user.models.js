import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	fullname: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	contact: {
		type: Number,
	},
});

const User = mongoose.model("User", userSchema);
export { User };
