import "./DonationForm.css";
import ErrorModal from "../ErrorModal/ErrorModal.js";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function DonationForm() {
	const navigate = useNavigate();
	const [plan, setPlan] = useState("");
	const [amount, setAmount] = useState();
	const [shelter, setShelter] = useState("");
	const [showModal, setShowModal] = useState(false);

	const { isAuthenticated, donationForm } = useContext(AuthContext);

	const closeModal = () => {
		setShowModal(false);
	};

	const donateHandler = async (event) => {
		event.preventDefault();
		if (!isAuthenticated) {
			setShowModal(true);
		} else {
			const success = await donationForm(plan, amount, shelter);
			if (success) {
				console.log("form added successful");
				navigate("/");
			} else {
				console.log("Login failed");
			}
		}
	};

	const planHandler = (event) => {
		setPlan(event.target.value);
	};

	const amountHandler = (event) => {
		setAmount(event.target.value);
	};

	const shelterHandler = (event) => {
		console.log(event.target.value);
		setShelter(event.target.value);
	};
	return (
		<>
			{showModal && <ErrorModal show={showModal} onClose={closeModal} />}
			<div id="donation">
				<form id="donation-form">
					<label>Your sponsered shelter</label>
					<select onChange={shelterHandler}>
						<option value="A">A</option>
						<option value="B">b</option>
						<option value="C">c</option>
					</select>

					<label>Plan</label>
					<span className="plan">
						<label>
							<input
								className="radio"
								type="radio"
								name="plan"
								value="one-time"
								onChange={planHandler}
							/>{" "}
							One-time
						</label>
						<label>
							<input
								className="radio"
								type="radio"
								name="plan"
								value="monthly"
								onChange={planHandler}
							/>{" "}
							Monthly
						</label>
					</span>

					<label>Amount(in rs)</label>
					<input className="number" type="number" onChange={amountHandler} value={amount} />

					<button onClick={donateHandler}>Donate</button>
				</form>
			</div>
		</>
	);
}

export default DonationForm;
