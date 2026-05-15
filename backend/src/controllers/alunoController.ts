import { Request, Response } from "express";
import {
  listarAlunos as listarAlunosService,
  criarAluno as criarAlunosService,
} from "../services/alunoService";

export const listarAlunos = async (req: Request, res: Response) => {
  const alunos = await listarAlunosService();
  return res.json(alunos);
};

export const criarAluno = async (req: Request, res: Response) => {
  const aluno = await criarAlunosService(
    req.body.nome,
    req.body.idade,
    req.body.obs,
    req.body.turmaId,
  );
  return res.status(201).json(aluno);
};
