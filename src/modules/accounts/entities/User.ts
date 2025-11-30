import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  nome!: string;

  @Column({ unique: true })
  email!: string; // Front usa email

  @Column()
  senha!: string;

  @Column({ default: "Operador" })
  perfil!: string;

  @Column({ nullable: true })
  patente?: string;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}