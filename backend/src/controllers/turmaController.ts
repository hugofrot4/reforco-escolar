import { Request, Response } from "express";
import {
  listarTurmas as listarTurmasService,
  criarTurma as criarTurmaService,
} from "../services/turmaService";

export const listarTurmas = async (req: Request, res: Response) => {
  const turmas = await listarTurmasService();
  return res.json(turmas);
};

export const criarTurma = async (req: Request, res: Response) => {
  const turma = await criarTurmaService(req.body.horario);
  return res.status(201).json(turma);
};
