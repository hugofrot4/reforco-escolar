import { prisma } from "../prisma";

export const listarAlunos = async () => {
  const alunos = await prisma.aluno.findMany();
  return alunos;
};

export const criarAluno = async (
  nome: string,
  idade: number,
  obs: string,
  turmaId: number,
) => {
  const aluno = await prisma.aluno.create({
    data: {
      nome,
      idade,
      obs,
      turmaId,
    },
  });

  return aluno;
};
