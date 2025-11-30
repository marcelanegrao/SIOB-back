import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { ocorrenciasRoutes } from "./ocorrencias.routes";

const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes);
router.use("/ocorrencias", ocorrenciasRoutes);

export { router };