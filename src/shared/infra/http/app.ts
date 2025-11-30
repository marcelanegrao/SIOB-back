import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "../../container"; // Importa o container
import { router } from "./routes";
import { AppError } from "../../errors/AppError";
import { AppDataSource } from "../typeorm/data-source";

// Inicializa Banco de Dados
AppDataSource.initialize()
  .then(() => console.log("Database initialized!"))
  .catch((err) => console.error("Error initializing database:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// Middleware de Erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

export { app };