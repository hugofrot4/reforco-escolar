import { Router } from "express";
import {
  criarAluno,
  deletarAluno,
  editarAluno,
  listarAlunos,
} from "../controllers/alunoController";

const router = Router();

router.get("/alunos", listarAlunos);
router.post("/alunos", criarAluno);
router.put("/alunos/:id", editarAluno);
router.delete("/alunos/:id", deletarAluno);

export default router;
