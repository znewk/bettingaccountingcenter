import { number, z } from "zod";

export const scopeRule = z
  .string()

export const iinRule = z
  .string()
  .min(12, "Минимальная длина ИИН - 12 символов");
