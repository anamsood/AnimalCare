import { User } from "../models/user.models.js";

const generateAccessAndRefreshToken = async (userId) => {
	try {
		const user = await User.findById(userId);

		const accessToken = user.generateAccessToken();
		const refreshToken = user.generateRefreshToken();

		user.refreshToken = refreshToken;

		await user.save();
		return { accessToken, refreshToken };
	} catch (error) {
		console.log(error, "something went wrong");
	}
};

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

const login = async (req, res) => {
	const { email, password } = req.body;

	if (email == "" || password == "") {
		return res.status(402).send(`Email and password is required`);
	}

	const user = await User.findOne({ email });

	if (!user) {
		return res.status(401, "User does not exist");
	}

	const isPasswordValid = await user.isPasswordCorrect(password);

	if (!isPasswordValid) {
		return res.status(402).send("Incorrect password");
	}

	const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

	const options = {
		secure: true,
		httpOnly: true,
	};

	return res
		.status(200)
		.cookie("accessToken", accessToken, options)
		.cookie("refreshToken", refreshToken, options)
		.json("User loggedIn successfully");
};

const logout = async (req, res) => {
	try {
		await User.findByIdAndUpdate(
			req.user._id,
			{
				$set: {
					refreshToken: undefined,
				},
			},
			{
				new: true,
			}
		);

		const options = {
			httpOnly: true,
			secure: true,
		};

		return res
			.status(200)
			.clearCookie("accessToken", options)
			.clearCookie("refreshToken", options)
			.json("User logged out successfully");
	} catch (error) {
		return res.status(500).json("an error occured during logout");
	}
};

export { registerUser, login, logout };
