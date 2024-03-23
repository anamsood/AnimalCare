import { User } from "../models/user.models.js";

const registerUser = async (req, res) => {
	try {
		const user = {
			fullname: req.body.fullname,
			password: req.body.password,
			email: req.body.email,
			contact: req.body.contact,
		};
		await User.create(user);
		res.status(201).json({ user });
	} catch (error) {
		console.log(`error in user controller:${error}`);
	}
};

export { registerUser };
