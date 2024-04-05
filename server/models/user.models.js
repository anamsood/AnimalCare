import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
		next();
	}
	return next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
			fullname: this.fullname,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
		}
	);
};

userSchema.methods.generateRefreshToken = function () {
	return jwt.sign(
		{
			_id: this._id,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
		}
	);
};

const User = mongoose.model("User", userSchema);
export { User };
