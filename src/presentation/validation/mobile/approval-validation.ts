import { z } from "zod";

export const approvalDataTableScheme = z.object({
    page: z.preprocess((val) => Number(val), z.number()),
    limit: z.preprocess((val) => Number(val), z.number()),
    search: z
        .string()
        .nullish()
        .transform((value) => value ?? undefined),
});
