import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
	const [fullname, SetFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [contact, setContact] = useState("");

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

	const handleFormSubmit = async (event) => {
		try {
			const result = await axios.post("http://localhost:3000/register", {
				fullname: fullname,
				password: password,
				email: email,
				contact: contact,
			});
			if (result.status === 201) {
				navigate("/login");
			}
		} catch (error) {
			console.log("error in register from: ", error);
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
				<button>Submit</button>
			</form>
		</>
	);
}
