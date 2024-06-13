import express, { Router } from "express";
import { registerUser, login, logout } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { helpingForm, donationForm } from "../controllers/form.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { allShelters, shelterData, getTitles } from "../controllers/shelters.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/shelters", allShelters);
router.get("/shelter-data/:title", shelterData);
router.get("/shelter/title", getTitles);
router.post("/helping-form", upload.fields([{ name: "image" }]), helpingForm);

// secured path
router.post("/logout", verifyJWT, logout);
router.post("/donation-form", verifyJWT, donationForm);

export { router };
