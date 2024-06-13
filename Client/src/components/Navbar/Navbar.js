import "./Navbar.css";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext.js";

export default function Navbar() {
	const navigate = useNavigate();
	const { isAuthenticated, logout, user } = useContext(AuthContext);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
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

	const logoutHandler = async () => {
		await logout();
		navigate("/");
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
					<FontAwesomeIcon className="user-icon" icon={faUser} onClick={toggleDropdown} />
					{isAuthenticated && <p>{user}</p>}
					{dropdownVisible && (
						<div className="dropdown-menu">
							{isAuthenticated ? (
								<a className="dropdown-item" onClick={logoutHandler}>
									Logout
								</a>
							) : (
								<div>
									<a href="/login" className="dropdown-item">
										Login
									</a>
									<a href="/register" className="dropdown-item">
										Sign Up
									</a>
								</div>
							)}
						</div>
					)}
				</div>
			</nav>
		</>
	);
}
