import { prisma } from "../prisma";

export const listarTurmas = async () => {
  const turmas = await prisma.turma.findMany();
  return turmas;
};

export const criarTurma = async (horario: string) => {
  const turma = await prisma.turma.create({
    data: {
      horario,
    },
  });

  return turma;
};
