import { Router } from "express";
import { criarAluno, listarAlunos } from "../controllers/alunoController";

const router = Router();

router.get("/alunos", listarAlunos);
router.post("/alunos", criarAluno);

export default router;
