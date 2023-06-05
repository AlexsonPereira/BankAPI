import { Router } from "express";
import { sessionController } from "../controllers/session.controller";

const sessionRoutes = Router();

sessionRoutes.post("", sessionController.create);

export { sessionRoutes };
