import { Router } from "express";
import { CreateOcorrenciaController } from "../../../../modules/occurrences/useCases/createOcorrencia/CreateOcorrenciaController";

const ocorrenciasRoutes = Router();
const createOcorrenciaController = new CreateOcorrenciaController();

ocorrenciasRoutes.post("/", createOcorrenciaController.handle);

export { ocorrenciasRoutes };