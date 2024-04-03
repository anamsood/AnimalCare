import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(this.password, password);
};

const User = mongoose.model("User", userSchema);
export { User };
