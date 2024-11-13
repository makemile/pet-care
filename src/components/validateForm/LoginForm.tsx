import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Correo electrónico inválido")
    .nonempty({ message: "El correo electrónico es obligatorio" }),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').nonempty({message: 'La contraseña es obligatoria'}),
});

export type loginForm = z.infer<typeof loginSchema>;
