import { z } from "zod";
import { IMulterFile } from "../types";

export const mobileResumeCheckCreateSchema = z.object({
    checkDate: z
        .string()
        .datetime()
        .transform((val) => new Date(val)),
    photoPath: z
        .any()
        .refine((val) => typeof val === "object", "PhotoPath is required")
        .transform((val) => <IMulterFile>val),
    notes: z.string(),
    recommendation: z.string(),
    generalDataId: z.string(),
});
