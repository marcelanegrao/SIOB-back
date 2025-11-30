export interface ICreateOcorrenciaDTO {
  titulo: string;
  latitude: number;
  longitude: number;
  tipo: string;
  usuarioId: string;
  status?: string;
}