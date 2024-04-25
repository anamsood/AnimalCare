import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import shelter from "../../assets/build-shelter.jpeg";
import Navbar from "../../components/Navbar/Navbar.js";

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
		<>
			<Navbar />
			<div id="register">
				<form id="register-form">
					<div className="space-y-12">
						<div className="border-b border-gray-900/10 pb-12">
							<h2 className="text">Register here</h2>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label
										htmlFor="first-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										First name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="last-name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Last name
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
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
											onChange={emailHandler}
											value={email}
											type="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								{/* <div className="sm:col-span-3">
									<label
										htmlFor="country"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										State
									</label>
									<div className="mt-2">
										{<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											<option>Punjab</option>
											<option>Chandigarh</option>
											<option>Mexico</option>
										</select>}
									</div> 
								</div> */}

								<div className="col-span-3">
									<label
										htmlFor="street-address"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Password
									</label>
									<div className="mt-2">
										<input
											type="password"
											name="street-address"
											onChange={passwordHandler}
											value={password}
											id="street-address"
											autoComplete="street-address"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label
										htmlFor="city"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										State
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="city"
											onChange={stateHandler}
											value={state}
											id="city"
											autoComplete="address-level2"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="region"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										City
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="region"
											onChange={cityHandler}
											value={city}
											id="region"
											autoComplete="address-level1"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label
										htmlFor="postal-code"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Contact
									</label>
									<div className="mt-2">
										<input
											type="number"
											name="postal-code"
											onChange={contactHandler}
											value={contact}
											id="postal-code"
											autoComplete="postal-code"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button
							type="button"
							onClick={() => navigate("/")}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							onClick={handleFormSubmit}
						>
							Save
						</button>
					</div>
				</form>
				{/* <img src={shelter} /> */}
			</div>
		</>
	);
}
