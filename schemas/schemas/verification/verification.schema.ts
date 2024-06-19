import { z } from "zod";
import { iinRule, scopeRule } from "./data";

export const VerificationFormSchema = z.object({
    iin: iinRule,
    scope: scopeRule,
});

// export const VerificationFormSchema = z.object({
//     value: usernameRule,
//     documentType: passwordRule,
// });

export type VerificationFormSchemaType = z.infer<typeof VerificationFormSchema>;