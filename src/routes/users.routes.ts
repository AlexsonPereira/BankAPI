import { Router } from "express";
import { usersController } from "../controllers/users.controller";

const userRoutes = Router();

userRoutes.post("", (req, res) => {
  usersController.create(req, res);
});

userRoutes.get("", (req, res) => {
  console.log(usersController.listAll(req, res));
});

userRoutes.get("/:id", (req, res) => {
  usersController.listOne(req, res);
});

userRoutes.patch("/:id", (req, res) => {
  usersController.update(req, res);
});

userRoutes.delete("/:id", (req, res) => {
  usersController.remove(req, res);
});

export { userRoutes };
