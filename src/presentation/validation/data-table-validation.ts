import { z } from "zod";

export const getDataTableScheme = z.object({
    search: z.string(),
    page: z
        .any()
        .refine((val) => parseInt(val) > -1, "Page must be number")
        .transform((val) => (parseInt(val) > 0 ? parseInt(val) : 1)),
    limit: z
        .any()
        .refine((val) => parseInt(val) > -1, "Page must be number")
        .transform((val) => (parseInt(val) > 0 ? parseInt(val) : 10)),
});
