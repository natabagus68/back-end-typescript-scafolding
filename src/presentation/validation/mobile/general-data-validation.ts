import { z } from "zod";

export const generalDataCreateSchema = z.object({
    customerId: z.string(),
    personInCharge: z.string(),
    inspectionDate: z
        .string()
        .datetime()
        .transform((val) => new Date(val)),
});
