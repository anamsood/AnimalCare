import express, { Router } from "express";
import { registerUser, login, logout } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.route("/logout").post(verifyJWT, logout);
// router.post("helping-form", helpingForm);
// router.post("donatine-form", donationForm);

export { router };
