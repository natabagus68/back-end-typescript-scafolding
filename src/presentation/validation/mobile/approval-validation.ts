import { z } from "zod";

export const approvalDataTableScheme = z.object({
    page: z.number().nullish().transform((value) => value ?? undefined),
    limit: z.number().nullish().transform((value) => value ?? undefined),
    search: z
        .string()
        .nullish()
        .transform((value) => value ?? undefined),
});
