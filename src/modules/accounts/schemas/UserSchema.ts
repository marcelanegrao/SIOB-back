import { z } from "zod";

export const createUserSchema = z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    // Alterado de matricula para email
    email: z.string().email("Formato de e-mail inválido").min(1, "E-mail é obrigatório"), 
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    perfil: z.enum(["Admin", "Analista", "Chefe", "Operador"]).default("Operador"),
    patente: z.string().optional(),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export const loginSchema = z.object({
    // Alterado de matricula para email no login também
    email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
    senha: z.string().min(1, "Senha é obrigatória"),
});

export type LoginDTO = z.infer<typeof loginSchema>;