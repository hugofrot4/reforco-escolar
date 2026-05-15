import { prisma } from "../prisma";

export const listarPagamentos = async (id: number) => {
  const pagamentos = await prisma.pagamento.findMany({
    where: {
      alunoId: id,
    },
  });

  return pagamentos;
};

export const criarPagamento = async (
  vencimento: number,
  valor: number,
  status: string,
  alunoId: number,
) => {
  const pagamento = await prisma.pagamento.create({
    data: {
      vencimento,
      dataPagamento: new Date(),
      valor,
      status,
      alunoId,
    },
  });

  return pagamento;
};

export const deletarPagamento = async (id: number) => {
  const pagamento = await prisma.pagamento.delete({
    where: { id },
  });

  return pagamento;
};
