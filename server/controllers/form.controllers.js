import { Form } from "../models/form.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const helpingForm = async (req, res) => {
	const { email, specie, foundLocation, recieveEmail } = req.body;

	if ([email, specie, foundLocation, recieveEmail].some((field) => field?.trim() === "")) {
		return res.status(402).json("all fields are necessary");
	}

	const imageLocalPath = req.files?.image[0]?.path;
	console.log(imageLocalPath);

	if (!imageLocalPath) {
		return res.status(400).json("image is required");
	}
	const image = await uploadOnCloudinary(imageLocalPath);

	const form = await Form.create({
		email,
		specie,
		foundLocation,
		recieveEmail,
		image: image.url,
	});

	const createdForm = await Form.findById(form._id);

	if (!createdForm) {
		return res.status(501).json("error while creating form");
	}

	return res.status(200).json(createdForm);
};

export { helpingForm };
