import "./Navbar.css";
import React, { useContext, useState } from "react";
import Icon from "../../assets/icon.png";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext.js";

export default function Navbar({ login }) {
	const navigate = useNavigate();
	const { isAuthenticated, logout } = useContext(AuthContext);

	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};

	const logoutHandler = async () => {
		await logout();
		navigate("/");
	};

	const homeHandler = (event) => {
		event.preventDefault();
		navigate("/");
	};

	const shelterHandler = (event) => {
		event.preventDefault();
		navigate("/allshelters");
	};
	const donateHandler = (event) => {
		event.preventDefault();
		navigate("/donate");
	};

	return (
		<>
			<nav className="navbar">
				<img src={Logo} alt="logo" className="logo" />
				<div className="navbar-left">
					<button onClick={homeHandler} className="nav-item">
						Home
					</button>
					<button onClick={shelterHandler} className="nav-item">
						Shelters
					</button>
					<button className="nav-item">Contact Us</button>
					<button onClick={donateHandler} className="nav-item">
						Donate
					</button>
				</div>
				<div className="navbar-right">
					<img src={Icon} alt="User Icon" onClick={toggleDropdown} className="user-icon" />
					{dropdownVisible && (
						<div className="dropdown-menu">
							<div>
								<a href="/login" className="dropdown-item">
									Login
								</a>
								<a href="/register" className="dropdown-item">
									Sign Up
								</a>
								<a className="dropdown-item" onClick={logoutHandler}>
									Logout
								</a>
							</div>
						</div>
					)}
				</div>
			</nav>
		</>
	);
}
