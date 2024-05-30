import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = async (req, res, next) => {
	try {
		const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
		if (!token) {
			return res.status(403).json("token not found");
		}

		const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

		const user = await User.findById(decodedToken?._id).select(" -password -refreshToken");
		if (!user) {
			return res.status(402).json("Invalid access token");
		}

		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json("error in auth", error.message);
	}
};
