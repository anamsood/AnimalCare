import mongoose from "mongoose";

const userSchema = mongoose.Schema({
	fullname: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: [true, "password is required"],
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true,
	},
	contact: {
		type: Number,
		required: true,
		unique: true,
	},
	state: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	refreshToken: {
		type: String,
	},
});

const User = mongoose.model("User", userSchema);
export { User };
