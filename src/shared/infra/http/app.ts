import express from "express";
import cors from "cors";
import helmet from "helmet";
import "reflect-metadata";

// Futuramente importaremos as rotas aqui
// import { router } from "./routes"; 

const app = express();

// Middlewares Globais
app.use(cors()); 
app.use(helmet()); 
app.use(express.json());

// Rota de Health Check
app.get("/", (req, res) => {
    res.json({ 
        message: "API SIOB Operante 🚀",
        docs: "/api-docs" // Placeholder para o Swagger futuro
    });
});

// app.use(router);

export { app };