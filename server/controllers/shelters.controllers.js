import { Shelters } from "../models/shelters.models.js";
import { Data } from "../models/shelterData.models.js";
import { formToJSON } from "axios";

export const allShelters = async (req, res) => {
	try {
		const data = await Shelters.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
};

export const shelterData = async (req, res) => {
	try {
		console.log("Request Body:", req.params.title);
		const shelter = await Shelters.findOne({ title: req.params.title });

		if (!shelter) {
			return res.status(404).json({ message: "Shelter not found" });
		}
		const data = await Data.find({ title: shelter.title });

		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
