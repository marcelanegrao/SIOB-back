import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    nome!: string;

    // Matrícula será o login (único no sistema)
    @Column({ unique: true })
    matricula!: string;

    @Column()
    senha!: string;

    // Perfis: Admin, Analista, Chefe, Operador
    @Column({ default: "Operador" })
    perfil!: string;

    // Patente: Soldado, Cabo, Tenente, etc
    @Column({ nullable: true })
    patente?: string;

    @Column({ default: true })
    ativo!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}