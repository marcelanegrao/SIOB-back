import { container } from "tsyringe";

// --- Módulo de Usuários (Accounts) ---
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/in-orm/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

// --- Módulo de Ocorrências (Occurrences) ---
import { IOcorrenciasRepository } from "../../modules/occurrences/repositories/IOcorrenciasRepository";
import { OcorrenciasRepository } from "../../modules/occurrences/repositories/in-orm/OcorrenciasRepository";

container.registerSingleton<IOcorrenciasRepository>(
  "OcorrenciasRepository",
  OcorrenciasRepository
);