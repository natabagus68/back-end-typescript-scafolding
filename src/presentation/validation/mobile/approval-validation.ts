import { z } from "zod";

export const getApproval = z.object({
    page: z.number(),
    limit: z.number(),
    search: z.string(),
});
