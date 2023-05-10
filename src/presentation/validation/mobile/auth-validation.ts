import { z } from "zod";

export const mobileLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
