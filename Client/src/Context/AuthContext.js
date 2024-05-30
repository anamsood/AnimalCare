import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);

	const login = async (email, password) => {
		try {
			const result = await axios.post(
				"http://localhost:4000/api/v2/login",
				{
					password: password,
					email: email,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (result.status === 200) {
				// localStorage.setItem("accessToken", result.data.accessToken);
				// localStorage.setItem("refershToken", result.data.refershToken);

				setUser(result.data.user);
				setIsAuthenticated(true);
				return true;
			}
		} catch (error) {
			console.log("Login error:", error);
			return false;
		}
	};

	const logout = async () => {
		try {
			const response = await axios.post("http://localhost:4000/api/v2/logout", {
				withCredentials: true,
			});
			if (response.status === 200) {
				// localStorage.removeItem("accessToken");
				// localStorage.removeItem("refershToken");

				setUser(null);
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
