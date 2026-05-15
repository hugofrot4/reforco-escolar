import { Request, Response } from "express";
import {
  listarAlunos as listarAlunosService,
  criarAluno as criarAlunoService,
  editarAluno as editarAlunoService,
  deletarAluno as deletarAlunoService,
} from "../services/alunoService";

export const listarAlunos = async (req: Request, res: Response) => {
  const alunos = await listarAlunosService();
  return res.json(alunos);
};

export const criarAluno = async (req: Request, res: Response) => {
  const aluno = await criarAlunoService(
    req.body.nome,
    req.body.idade,
    req.body.obs,
    req.body.turmaId,
  );
  return res.status(201).json(aluno);
};

export const editarAluno = async (req: Request, res: Response) => {
  const aluno = await editarAlunoService(
    Number(req.params.id),
    req.body.nome,
    req.body.idade,
    req.body.obs,
    req.body.turmaId,
  );
  return res.status(200).json(aluno);
};

export const deletarAluno = async (req: Request, res: Response) => {
  await deletarAlunoService(Number(req.params.id));
  return res.status(204).send();
};
