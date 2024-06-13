import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./pages/Register/Register.js";
import Login from "./pages/Login/login.js";
import Home from "./pages/Home/Home.js";
import AllShelters from "./pages/AllShelters/AllShelters.js";
import Shelter from "./pages/ShelterSite/Shelter.js";
import Donate from "./pages/Donate/Donate.js";
import { AuthProvider } from "../../Client/src/Context/AuthContext.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <h1>page not found</h1>,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/allshelters",
		element: <AllShelters />,
	},
	{
		path: "/shelter",
		element: <Shelter />,
	},
	{
		path: "/donate",
		element: <Donate />,
	},
]);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
