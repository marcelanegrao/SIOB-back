import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
// Importamos o User APENAS para tipagem do relacionamento. 
// O TypeORM resolve a chave estrangeira mesmo que a tabela users ainda não exista fisicamente na sua branch
import { User } from "../../accounts/entities/User"; 

export enum OcorrenciaStatus {
    PENDENTE = "Pendente",
    EM_ANDAMENTO = "Em andamento",
    CONCLUIDA = "Concluída",
    CANCELADA = "Cancelada",
    TROTE = "Trote",
    OCORRENCIA_BASICA = "Ocorrência Básica"
}

export enum Prioridade {
    ALTA = "Alta",
    MEDIA = "Média",
    BAIXA = "Baixa"
}

@Entity("ocorrencias")
export class Ocorrencia {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    tipo!: string; // Ex: Incêndio, Salvamento

    @Column({
        type: "enum",
        enum: OcorrenciaStatus,
        default: OcorrenciaStatus.PENDENTE
    })
    status!: OcorrenciaStatus;

    @Column({
        type: "enum",
        enum: Prioridade,
        default: Prioridade.MEDIA
    })
    prioridade!: Prioridade;

    @Column()
    regiao!: string;

    @Column({ nullable: true })
    numAviso?: string; // Ex: OC-2025-001

    @Column()
    data!: Date;

    // O "Pulo do Gato": Salva o formulário React inteiro aqui dentro
    @Column({ type: "json", nullable: true })
    formulariosPreenchidos?: object; 

    @Column({ nullable: true })
    usuarioId?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "usuarioId" })
    usuario?: User;

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