import "reflect-metadata";
import * as dotenv from "dotenv";
import { AppDataSource } from "../typeorm/data-source";
import { app } from "./app";

// Carrega as variáveis de ambiente do arquivo .env na raiz
dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("📦 Banco de Dados Conectado (MySQL)!");
        
        app.listen(PORT, () => {
            console.log(`🔥 Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao Banco de Dados:", error);
    });