import { Request, Response } from "express";
import { auth as authService } from "../services/authService";

export const auth = async (req: Request, res: Response) => {
  try {
    const token = await authService(req.body.email, req.body.senha);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(401).json({ mensagem: "Credenciais inválidas" });
  }
};
