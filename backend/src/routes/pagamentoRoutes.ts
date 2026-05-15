import { Router } from "express";
import {
  criarPagamento,
  deletarPagamento,
  listarPagamentos,
} from "../controllers/pagamentoController";

const router = Router();

router.get("/alunos/:id/pagamentos", listarPagamentos);
router.post("/alunos/:id/pagamentos", criarPagamento);
router.delete("/pagamentos/:id", deletarPagamento);

export default router;
