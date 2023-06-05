import { Router } from "express";
import { signUp } from "../controller/userController.js";
import { login } from "../controller/userController.js";
const router = Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;
