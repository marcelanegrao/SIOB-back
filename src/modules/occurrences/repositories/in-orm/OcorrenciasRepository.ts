import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/data-source";
import { Ocorrencia } from "../../entities/Ocorrencia";
import { IOcorrenciasRepository } from "../IOcorrenciasRepository";
import { ICreateOcorrenciaDTO } from "../../dtos/ICreateOcorrenciaDTO";

export class OcorrenciasRepository implements IOcorrenciasRepository {
  private repository: Repository<Ocorrencia>;

  constructor() {
    this.repository = AppDataSource.getRepository(Ocorrencia);
  }

  async create({ titulo, latitude, longitude, tipo, usuarioId, status }: ICreateOcorrenciaDTO): Promise<Ocorrencia> {
    const ocorrencia = this.repository.create({
      titulo,
      latitude,
      longitude,
      tipo,
      usuarioId,
      status
    });
    await this.repository.save(ocorrencia);
    return ocorrencia;
  }

  async listAll(): Promise<Ocorrencia[]> {
    return this.repository.find();
  }
}