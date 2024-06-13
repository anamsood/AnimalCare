import { DonationForm } from "../models/donationForm.models.js";
import { HelpingForm } from "../models/helpingForm.models.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const helpingForm = async (req, res) => {
	try {
		const { email, specie, foundLocation, recieveEmail, image } = req.body;

		if ([email, specie, foundLocation].some((field) => field?.trim() === "")) {
			return res.status(402).json("all fields are necessary");
		}

		const imageLocalPath = req.files?.image[0]?.path;
		// console.log(imageLocalPath);

		// if (!imageLocalPath) {
		// 	return res.status(400).json("image is required");
		// }
		// const image = await uploadOnCloudinary(imageLocalPath);

		const form = await HelpingForm.create({
			email,
			specie,
			foundLocation,
			recieveEmail,
			image: image.url,
		});

		const createdForm = await HelpingForm.findById(form._id);

		if (!createdForm) {
			return res.status(501).json("error while creating form");
		}

		return res.status(200).json(createdForm);
	} catch (error) {
		return res.status(500).json("internal error in helping form ", error);
	}
};

const donationForm = async (req, res) => {
	const currUser = await User.findById(req.user._id);
	const { plan, amount, shelterName } = req.body;

	if (!currUser) {
		return res.status(500).json("user not authorised");
	}

	if ([plan, shelterName].some((field) => field?.trim() === "")) {
		return res.status(402).json("all fields are necessary");
	}
	if (!amount) {
		return res.status(402).json("amount is necessary");
	}
	console.log(currUser.fullname);
	const form = await DonationForm.create({
		user: currUser.fullname,
		plan: plan,
		amount: amount,
		shelterName: shelterName,
	});
	const createdForm = await DonationForm.findById(form._id);

	if (!createdForm) {
		return res.status(501).json("error while creating form");
	}

	return res.status(200).json(createdForm);
};

export { helpingForm, donationForm };
