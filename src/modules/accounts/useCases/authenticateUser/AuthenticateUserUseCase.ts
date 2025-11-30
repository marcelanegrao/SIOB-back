import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { LoginDTO } from "../../schemas/UserSchema";

interface IResponse {
  user: { nome: string; email: string; perfil: string };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, senha }: LoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new AppError("Email or password incorrect");

    const passwordMatch = await compare(senha, user.senha);
    if (!passwordMatch) throw new AppError("Email or password incorrect");

    const token = sign({}, process.env.JWT_SECRET || "segredo_siob", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      token,
      user: { nome: user.nome, email: user.email, perfil: user.perfil },
    };
  }
}