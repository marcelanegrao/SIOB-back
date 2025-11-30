import { Ocorrencia } from "../entities/Ocorrencia";
import { ICreateOcorrenciaDTO } from "../dtos/ICreateOcorrenciaDTO";

export interface IOcorrenciasRepository {
  create(data: ICreateOcorrenciaDTO): Promise<Ocorrencia>;
  listAll(): Promise<Ocorrencia[]>;
}