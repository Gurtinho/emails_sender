import { z } from "zod";

export const schemaSendEmail = z.object({
    from: z.object({
        name: z.string(),
        email: z.string().email()
    }),
    to: z.array(z.object({
        name: z.string(),
        email: z.string().email()
    })),
    subject: z.string(),
    body: z.string()
})

export type SchemaSendEmail = z.infer<typeof schemaSendEmail>;
