import express from "express";
import router from "./routes/alunoRoutes";
const app = express();
const port: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
