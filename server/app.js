import express from "express";
import { router } from "./router/user.routes.js";
import { json } from "express";

const app = express();
app.use(express.json());

app.use("/api/v2", router);

export { app };
