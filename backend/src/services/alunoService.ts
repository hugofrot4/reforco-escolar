import { prisma } from "../prisma";

export const listarAlunos = async () => {
  const alunos = await prisma.aluno.findMany();
  return alunos;
};
