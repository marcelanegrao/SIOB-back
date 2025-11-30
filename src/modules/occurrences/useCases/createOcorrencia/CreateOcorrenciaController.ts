import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOcorrenciaUseCase } from "./CreateOcorrenciaUseCase";

export class CreateOcorrenciaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { titulo, latitude, longitude, tipo, usuarioId } = request.body;
    // Dica: Pegue o usuarioId do token futuramente (request.user.id)
    
    const createOcorrenciaUseCase = container.resolve(CreateOcorrenciaUseCase);
    
    await createOcorrenciaUseCase.execute({
      titulo,
      latitude,
      longitude,
      tipo,
      usuarioId
    });

    return response.status(201).send();
  }
}