import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./components/Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/register",
		element: <Register />,
		errorElement: <h1>page not found</h1>,
	},
	{
		path: "/login",
	},
]);
// root.render(<App />);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
