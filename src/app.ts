import express from "express";
import "express-async-errors";
import { userRoutes } from "./routes/users.routes";
import handleError from "./errors/handleError";
import { sessionRoutes } from "./routes/session.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/session", sessionRoutes);

app.use(handleError);

export { app };
