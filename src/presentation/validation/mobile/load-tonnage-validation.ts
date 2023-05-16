import { z } from "zod";

export const mobileLoadTonnageSchema = z.object({
    loadTonnage: z.array(
        z.object({
            name: z.string(),
            lfActLoad: z.number(),
            lfLoadMonitor: z.number(),
            lrActLoad: z.number(),
            lrLoadMonitor: z.number(),
            rfActLoad: z.number(),
            rfLoadMonitor: z.number(),
            rrActLoad: z.number(),
            rrLoadMonitor: z.number(),
            totalActLoad: z.number(),
            totalLoadMonitor: z.number(),
            dieHeight: z.number(),
            generalDataId: z.string(),
        })
    ),
});
