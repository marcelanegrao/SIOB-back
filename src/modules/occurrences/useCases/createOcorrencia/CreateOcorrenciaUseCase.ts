import { inject, injectable } from "tsyringe";
import { IOcorrenciasRepository } from "../../repositories/IOcorrenciasRepository";
import { ICreateOcorrenciaDTO } from "../../dtos/ICreateOcorrenciaDTO";

@injectable()
export class CreateOcorrenciaUseCase {
  constructor(
    @inject("OcorrenciasRepository")
    private ocorrenciasRepository: IOcorrenciasRepository
  ) {}

  async execute(data: ICreateOcorrenciaDTO): Promise<void> {
    await this.ocorrenciasRepository.create(data);
  }
}