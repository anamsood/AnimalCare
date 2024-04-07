import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/login.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <h1>page not found</h1>,
	},
]);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
