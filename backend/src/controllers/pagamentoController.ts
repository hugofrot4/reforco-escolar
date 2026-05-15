import { Request, Response } from "express";
import {
  listarPagamentos as listarPagamentosService,
  criarPagamento as criarPagamentoService,
  deletarPagamento as deletarPagamentoService,
} from "../services/pagamentoService";

export const listarPagamentos = async (req: Request, res: Response) => {
  const pagamentos = await listarPagamentosService(Number(req.params.id));
  return res.json(pagamentos);
};

export const criarPagamento = async (req: Request, res: Response) => {
  const pagamento = await criarPagamentoService(
    req.body.vencimento,
    req.body.valor,
    req.body.status,
    Number(req.params.id),
  );
  return res.status(201).json(pagamento);
};

export const deletarPagamento = async (req: Request, res: Response) => {
  await deletarPagamentoService(Number(req.params.id));
  return res.status(204).send();
};
