import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../index.css";
import { AuthContext } from "../../Context/AuthContext.js";

import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import "./login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useContext(AuthContext);

	const navigate = useNavigate();

	function emailHandler(event) {
		setEmail(event.target.value);
	}

	function passwordHandler(event) {
		setPassword(event.target.value);
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const success = await login(email, password);
		if (success) {
			console.log("login successful");
			navigate("/");
		} else {
			console.log("Login failed");
		}
	};

	return (
		<>
			<div id="login">
				<Navbar />

				<div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										onChange={emailHandler}
										value={email}
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Password
									</label>
								</div>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										onChange={passwordHandler}
										value={password}
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									onClick={handleFormSubmit}
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>

						<p className="mt-10 text-center text-sm text-gray-500">
							Not a member?{" "}
							<a
								href="/register"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Register here!
							</a>
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Login;
