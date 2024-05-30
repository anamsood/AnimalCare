import express from "express";
import { router } from "./router/user.routes.js";
import { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
		methods: "GET,POST,PUT,DELETE",
	})
);

app.use((req, res, next) => {
	console.log("Request Path:", req.path);
	console.log("Request Headers:", req.headers);
	next();
});

app.use("/api/v2", router);

export { app };
