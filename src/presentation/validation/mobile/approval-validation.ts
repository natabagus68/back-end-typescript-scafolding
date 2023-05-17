import { z } from "zod";

export const approvalDataTableScheme = z.object({
    // page: z.number(),
    // limit: z.number(),
    search: z.string(),
});
