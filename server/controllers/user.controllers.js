import { User } from "../models/user.models.js";

const registerUser = async (req, res) => {
	const { fullname, password, email, contact, state, city } = req.body;

	if ([fullname, password, email, state, contact, city].some((field) => field === "")) {
		return res.status(402).json("Error: All fields are required");
	}

	if (contact.length != 10) {
		return res.status(402).json("Enter a valid contact");
	}

	try {
		const user = {
			fullname,
			password,
			email,
			contact,
			state,
			city,
		};
		await User.create(user);

		return res.status(201).json({ user });
	} catch (error) {
		console.log(`error in user controller:${error}`);
	}
};

export { registerUser };
