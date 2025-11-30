import { User } from "../entities/User";
import { CreateUserDTO } from "../schemas/UserSchema";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}