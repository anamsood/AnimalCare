import "./DonationForm.css";
import AuthModal from "../AuthModal/AuthModal.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DonationForm() {
	const navigate = useNavigate();
	const [plan, setPlan] = useState("");
	const [amount, setAmount] = useState(0);
	const [shelter, setShelter] = useState("");

	const donateHandler = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("http://localhost:4000/api/v2/donation-form", {
				plan: plan,
				amount: amount,
				shelterName: shelter,
			});
			console.log(response);
			if (response.status === 200) {
				navigate("/");
			}
		} catch (error) {
			console.log(error);
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
				{/* {isActive && <AuthModal />} */}
			</div>
		</>
	);
}

export default DonationForm;
