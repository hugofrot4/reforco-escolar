import { Router } from "express";
import { listarAlunos } from "../controllers/alunoController";

const router = Router();

router.get("/alunos", listarAlunos);

export default router;
