import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function emailHandler(event) {
		setEmail(event.target.value);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const result = await axios.post("http://localhost:4000/api/v2/login", {
				password: password,
				email: email,
			});
			console.log(result);
			if (result.status === 200) {
				navigate("/");
			}
		} catch (error) {
			console.log("error in Login form: ", error);
		}
	};
	return (
		<>
			<div id="login">
				<h2>Login!</h2>
				<form onSubmit={handleFormSubmit} className="login-form">
					<label>
						Email: <input type="email" value={email} onChange={emailHandler}></input>
					</label>

					<label>
						Password: <input type="password" value={password} onChange={passwordHandler}></input>
					</label>

					<span>
						<button>Submit</button>
						<Link to={"/register"}>
							<h5>Create a new account!</h5>
						</Link>
					</span>
				</form>
			</div>
		</>
	);
}

export default Login;
