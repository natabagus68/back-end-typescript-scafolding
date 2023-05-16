import { z } from "zod";

export const mobileInspectionDataSchema = z.object({
    inspectionData: z.array(
        z.object({
            name: z.string(),
            order: z.number(),
            generalDataId: z.string(),
            items: z.array(
                z.object({
                    name: z.string(),
                    determination: z.string(),
                    hasNote: z.boolean(),
                    notes: z
                        .any()
                        .nullable()
                        .transform((val) => val || undefined),
                    backlash: z
                        .any()
                        .nullable()
                        .transform((val) => val || undefined),
                    r: z
                        .any()
                        .nullable()
                        .transform((val) => val || undefined),
                    s: z
                        .any()
                        .nullable()
                        .transform((val) => val || undefined),
                })
            ),
        })
    ),
});
