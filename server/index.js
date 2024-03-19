import express, { json } from "express";
import cors from "cors";
import connectDb from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
	path: "./.env",
});

const app = express();
app.use(cors());
app.use(json());

app.listen(process.env.PORT || 3000, () => {
	console.log(`app is listening on port ${process.env.PORT}`);
});
