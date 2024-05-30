import { useState } from "react";
export function CheckAuth() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = () => setIsLoggedIn(true);
	const logout = () => setIsLoggedIn(false);
}
export { isLoggedIn, login, logout };
