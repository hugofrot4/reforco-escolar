import { Router } from "express";
import { auth } from "../controllers/authController";

const router = Router();

router.post("/auth/login", auth);

export default router;
