import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";

// Ajuste para encontrar o .env na raiz do projeto (3 níveis acima)
dotenv.config({ path: path.join(__dirname, "../../../../.env") });

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true, // ⚠️ Use 'false' em produção e use migrations
    logging: false,
    
    // MÁGICA MODULAR: Procura entidades em qualquer módulo
    entities: [path.join(__dirname, "../../../../modules/**/entities/*.{ts,js}")],
    
    // Caminho das migrations
    migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],
    subscribers: [],
});