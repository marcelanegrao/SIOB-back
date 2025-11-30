import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { CreateUserDTO } from "../../schemas/UserSchema";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ nome, email, senha, perfil, patente }: CreateUserDTO): Promise<User> {
    const user = this.repository.create({ nome, email, senha, perfil, patente });
    await this.repository.save(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id } });
  }
}