import express, { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", registerUser);

export { router };
