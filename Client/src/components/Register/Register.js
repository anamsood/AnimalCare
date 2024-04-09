import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
	const [fullname, SetFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [contact, setContact] = useState();
	const [state, setState] = useState("");
	const [city, setCity] = useState("");

	const navigate = useNavigate();

	function nameHandler(event) {
		SetFullname(event.target.value);
	}
	function emailHandler(event) {
		setEmail(event.target.value);
	}
	function contactHandler(event) {
		setContact(event.target.value);
	}
	function passwordHandler(event) {
		setPassword(event.target.value);
	}
	function stateHandler(event) {
		setState(event.target.value);
	}
	function cityHandler(event) {
		setCity(event.target.value);
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const result = await axios.post("http://localhost:4000/api/v2/register", {
				fullname: fullname,
				password: password,
				email: email,
				contact: contact,
				state: state,
				city: city,
			});
			console.log(result);
			if (result.status === 201) {
				navigate("/");
			}
		} catch (error) {
			console.log("error in register form: ", error);
		}
	};

	return (
		<>
			<form onSubmit={handleFormSubmit} className="register-form">
				<label>Fullname: </label>
				<input type="text" value={fullname} onChange={nameHandler}></input>
				<label>Email: </label>
				<input type="email" value={email} onChange={emailHandler}></input>
				<label>Phone no.: </label>
				<input type="number" value={contact} onChange={contactHandler}></input>
				<label>Password: </label>
				<input type="password" value={password} onChange={passwordHandler}></input>
				<label>State: </label>
				<input type="text" value={state} onChange={stateHandler}></input>
				<label>City: </label>
				<input type="text" value={city} onChange={cityHandler}></input>
				<button>Submit</button>
			</form>
		</>
	);
}
