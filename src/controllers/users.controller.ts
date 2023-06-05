import { Request, Response } from "express";
import { usersService } from "../services/users.service";

class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const newUser = await usersService.create({ name, email, password });

    return res.status(201).json(newUser);
  }

  async listAll(_: Request, res: Response) {
    const users = await usersService.listAll();

    return res.json(users);
  }

  async listOne(req: Request, res: Response) {
    const user = await usersService.listOne(req.params.id);

    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await usersService.update(req.params.id, req.body);

    return res.json(user);
  }

  async remove(req: Request, res: Response) {
    await usersService.remove(req.params.id);

    return res.status(204).send();
  }
}

const usersController = new UsersController();

export { usersController };
