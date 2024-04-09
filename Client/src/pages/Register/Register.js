import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

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
				navigate("/login");
			}
		} catch (error) {
			console.log("error in register form: ", error);
		}
	};

	return (
		<div id="register">
			<h2>Create an account!</h2>
			<form onSubmit={handleFormSubmit} className="register-form">
				<label>
					Fullname: <input type="text" value={fullname} onChange={nameHandler}></input>
				</label>

				<label>
					Email: <input type="email" value={email} onChange={emailHandler}></input>
				</label>

				<label>
					Phone no.: <input type="number" value={contact} onChange={contactHandler}></input>
				</label>

				<label>
					Password: <input type="password" value={password} onChange={passwordHandler}></input>
				</label>
				<label>
					State: <input type="text" value={state} onChange={stateHandler}></input>
				</label>
				<label>
					City: <input type="text" value={city} onChange={cityHandler}></input>
				</label>
				<span>
					<button onClick={() => navigate("/")}>Submit</button>
					<Link to={"/login"}>
						<h5>Already registered? Login in here!</h5>
					</Link>
				</span>
			</form>
		</div>
	);
}
