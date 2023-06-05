import { Request, Response } from "express";
import { sessionService } from "../services/session.service";

class SessionController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;
    const sessionCreated = await sessionService.create({ email, password });
    return res.json(sessionController);
  }
}

const sessionController = new SessionController();

export { sessionController };
