import { z } from "zod";

const StatusEnum = z.enum([
  "Pendente", 
  "Em andamento", 
  "Concluída", 
  "Cancelada", 
  "Trote", 
  "Ocorrência Básica"
]);

const PrioridadeEnum = z.enum(["Alta", "Média", "Baixa"]);

export const createOcorrenciaSchema = z.object({
  tipo: z.string({ required_error: "Tipo é obrigatório" }),
  regiao: z.string({ required_error: "Região é obrigatória" }),
  data: z.coerce.date(),
  status: StatusEnum.default("Pendente"),
  prioridade: PrioridadeEnum.default("Média"),
  
 
  formulariosPreenchidos: z.record(z.any()).optional(),
  
  usuarioId: z.string().uuid().optional()
});

export type CreateOcorrenciaDTO = z.infer<typeof createOcorrenciaSchema>;