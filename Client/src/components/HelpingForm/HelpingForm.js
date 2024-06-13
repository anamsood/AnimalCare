import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HelpingForm.css";

const HelpingForm = ({ show, close }) => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		specie: "",
		foundLocation: "",
		image: null,
		recieveEmail: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	if (!show) {
		return null;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:4000/api/v2/helping-form", {
				email: formData.email,
				specie: formData.specie,
				foundLocation: formData.foundLocation,
				recieveEmail: formData.recieveEmail,
				image: formData.image,
			});
			if (response.status == 200) {
				close();
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<>
			(
			<div className="helping-form-container">
				<div className="helping-form">
					<h2>Helping Form</h2>
					<form onSubmit={handleSubmit}>
						<label>Email:</label>
						<input
							type="email"
							name="email"
							className="form-input"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<label>Specie:</label>
						<input
							type="text"
							name="specie"
							className="form-input"
							value={formData.specie}
							onChange={handleChange}
							required
						/>
						<label>Found Location:</label>
						<input
							type="text"
							name="foundLocation"
							className="form-input"
							value={formData.foundLocation}
							onChange={handleChange}
							required
						/>
						<label>Image:</label>
						<input type="file" name="image" accept="image/*" onChange={handleChange} />
						<label>
							<input
								type="checkbox"
								name="recieveEmail"
								checked={formData.recieveEmail}
								className="recieveEmail"
								onChange={handleChange}
							/>
							Receive Email Notifications
						</label>
						<span className="btn-container">
							<button className="btn" onClick={close}>
								Cancel
							</button>
							<button type="submit">Submit</button>
						</span>
					</form>
				</div>
			</div>
			)
		</>
	);
};

export default HelpingForm;
