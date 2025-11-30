import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { AppError } from "../../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserDTO } from "../../schemas/UserSchema";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ nome, email, senha, perfil, patente }: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) throw new AppError("User already exists");

    const passwordHash = await hash(senha, 8);

    await this.usersRepository.create({
      nome,
      email,
      senha: passwordHash,
      perfil,
      patente,
    });
  }
}