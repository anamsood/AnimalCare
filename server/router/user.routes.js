import express, { Router } from "express";
import { registerUser, login, logout } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { helpingForm } from "../controllers/form.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { allShelters } from "../controllers/shelters.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
router.post("/helping-form", verifyJWT, upload.fields([{ name: "image" }]), helpingForm);
router.get("/shelters", allShelters);

export { router };
