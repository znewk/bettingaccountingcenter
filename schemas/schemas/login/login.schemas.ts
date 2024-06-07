import { z } from "zod";
import { usernameRule, passwordRule } from "./data";

export const LoginFormSchema = z.object({
    username: usernameRule,
    password: passwordRule,
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;