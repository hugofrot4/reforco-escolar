import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma";

export const auth = async (email: string, senhaDigitada: string) => {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) {
    throw new Error("Credenciais inválidas");
  }

  const senhaCorreta = await bcrypt.compare(senhaDigitada, admin.senha);

  if (!senhaCorreta) {
    throw new Error("Credenciais inválidas");
  }

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  return token;
};
