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
	const [data, setData] = useState([]);

	const { isAuthenticated, donationForm } = useContext(AuthContext);

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

	useEffect(() => {
		fetch("http://localhost:4000/api/v2/shelter/title")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

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

	const closeModal = () => {
		setShowModal(false);
	};
	console.log(data);
	return (
		<>
			{showModal && <ErrorModal show={showModal} onClose={closeModal} />}
			<div id="donation">
				<form id="donation-form">
					<label>Your sponsered shelter</label>
					<select onChange={shelterHandler}>
						{data.map((title, index) => (
							<option key={index} value={title}>
								{title}
							</option>
						))}
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
