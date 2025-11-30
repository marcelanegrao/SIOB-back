import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { createUserSchema } from "../../schemas/UserSchema";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha, perfil, patente } = createUserSchema.parse(request.body);
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({ nome, email, senha, perfil, patente });
    return response.status(201).send();
  }
}