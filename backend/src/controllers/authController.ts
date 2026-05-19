import { Request, Response } from "express";
import { login as loginService } from "../services/authService";

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginService(req.body.email, req.body.senha);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }
};
