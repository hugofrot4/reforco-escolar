import bcrypt from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const senhaHash = await bcrypt.hash("admin123", 10);

  await prisma.admin.create({
    data: {
      nome: "Dona do Reforço",
      email: "admin@reforco.com",
      senha: senhaHash,
    },
  });

  console.log("Admin criado com sucesso");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
