import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../accounts/entities/User";

@Entity("ocorrencias")
export class Ocorrencia {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  titulo!: string;

  @Column("decimal", { precision: 10, scale: 6 })
  latitude!: number;

  @Column("decimal", { precision: 10, scale: 6 })
  longitude!: number;

  @Column()
  tipo!: string; // Incêndio, APH, etc.

  @Column({ default: "Pendente" })
  status!: string;

  @Column()
  usuarioId!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "usuarioId" })
  usuario!: User;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}