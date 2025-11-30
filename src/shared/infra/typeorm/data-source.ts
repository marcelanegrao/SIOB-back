import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../../../modules/accounts/entities/User";
import { Ocorrencia } from "../../../modules/occurrences/entities/Ocorrencia";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "sua_senha",
  database: process.env.DB_NAME || "siob_db",
  synchronize: true, // Apenas para desenvolvimento!
  logging: false,
  entities: [User, Ocorrencia],
  migrations: [],
  subscribers: [],
});