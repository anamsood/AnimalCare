import { Shelters } from "../models/shelters.models.js";

export const allShelters = async (req, res) => {
	try {
		const data = await Shelters.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
};
