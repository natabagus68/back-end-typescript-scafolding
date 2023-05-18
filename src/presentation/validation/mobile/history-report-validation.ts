import { z } from "zod";

export const historyReportScheme = z.object({
    page: z
        .number()
        .nullish()
        .transform((value) => value ?? undefined),
    limit: z
        .number()
        .nullish()
        .transform((value) => value ?? undefined),
    search: z
        .string()
        .nullish()
        .transform((value) => value ?? undefined),
    filterDate: z.string(),
});
