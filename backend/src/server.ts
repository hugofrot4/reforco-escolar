import express from "express";
import alunoRouter from "./routes/alunoRoutes";
import pagamentoRouter from "./routes/pagamentoRoutes";
import authRouter from "./routes/authRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";
const app = express();
const port: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(authRouter);
app.use(authMiddleware);
app.use(alunoRouter);
app.use(pagamentoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
