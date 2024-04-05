import express from "express";
import { router } from "./router/user.routes.js";
import { json } from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v2", router);

export { app };
