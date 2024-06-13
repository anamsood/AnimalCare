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
					withCredentials: true,
				}
			);

			if (result.status === 200) {
				setUser(result.data.user);
				console.log(user);
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
			const response = await axios.post(
				"http://localhost:4000/api/v2/logout",
				{},
				{
					withCredentials: true,
				}
			);
			if (response.status === 200) {
				setUser(null);
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	const donationForm = async (plan, amount, shelter) => {
		try {
			const response = await axios.post(
				"http://localhost:4000/api/v2/donation-form",
				{
					plan: plan,
					amount: amount,
					shelterName: shelter,
				},
				{ withCredentials: true }
			);
			if (response.status === 200) {
				console.log("form added successfully:", response);
				return true;
			}
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, user, login, logout, donationForm }}>
			{children}
		</AuthContext.Provider>
	);
};
