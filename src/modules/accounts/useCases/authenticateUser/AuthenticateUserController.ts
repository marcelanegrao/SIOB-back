import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { loginSchema } from "../../schemas/UserSchema";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, senha } = loginSchema.parse(request.body);
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const token = await authenticateUserUseCase.execute({ email, senha });
    return response.json(token);
  }
}