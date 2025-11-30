import { z } from "zod";

export const createUserSchema = z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    matricula: z.string().min(1, "Matrícula é obrigatória"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    perfil: z.enum(["Admin", "Analista", "Chefe", "Operador"]).default("Operador"),
    patente: z.string().optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
    matricula: z.string().min(1, "Matrícula é obrigatória"),
    senha: z.string().min(1, "Senha é obrigatória"),
});

export type LoginDTO = z.infer<typeof loginSchema>;