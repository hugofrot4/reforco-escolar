import { Request, Response } from "express";
import { listarAlunos as listarAlunosService } from "../services/alunoService";

export const listarAlunos = async (req: Request, res: Response) => {
  const alunos = await listarAlunosService();
  return res.json(alunos);
};
