import { Router } from "express";
import { listarTurmas, criarTurma } from "../controllers/turmaController";

const router = Router();

router.get("/turmas", listarTurmas);
router.post("/turmas", criarTurma);

export default router;
