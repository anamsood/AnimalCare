import express, { Router } from "express";
import { registerUser, login, logout } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { helpingForm } from "../controllers/form.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
router.post("/helping-form", verifyJWT, upload.fields([{ name: "image" }]), helpingForm);

export { router };
