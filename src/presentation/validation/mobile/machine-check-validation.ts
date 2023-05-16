import { z } from "zod";

export const mobileMachineCheckCreateSchema = z.object({
    generalDataId: z.string(),
    idleAmp: z.number(),
    runningAmp: z.number(),
    runningDuration: z.number(),
    runningTimes: z.nullable(z.number()),
    clearanceTotal: z.nullable(z.number()),
    clearancePoint: z.nullable(z.number()),
    p: z
        .any()
        .refine((val) => !val || typeof val === "number", "actual must be number")
        .transform((val) => <number>val || undefined),
    actual: z
        .any()
        .refine((val) => !val || typeof val === "number", "actual must be number")
        .transform((val) => <number>val || undefined),
    determinationResult: z.string(),
    slideUpAmp: z
        .any()
        .refine((val) => !val || typeof val === "number", "slideUpAmp must be number")
        .transform((val) => <number>val || undefined),
    slideDownAmp: z
        .any()
        .refine((val) => !val || typeof val === "number", "slideDownAmp must be number")
        .transform((val) => <number>val || undefined),
    prlsmBlstrSlide: z.string().refine((val) => ["ok", "ng"].includes(val), "prlsmBlstrSlide must between ok or ng"),
    test1: z
        .any()
        .refine((val) => !val || typeof val === "string", "test1 must be number")
        .transform((val) => <string>val || undefined),
    test2: z
        .any()
        .refine((val) => !val || typeof val === "string", "test2 must be number")
        .transform((val) => <string>val || undefined),
    test3: z
        .any()
        .refine((val) => !val || typeof val === "string", "test3 must be number")
        .transform((val) => <string>val || undefined),
    test4: z
        .any()
        .refine((val) => !val || typeof val === "string", "test4 must be number")
        .transform((val) => <string>val || undefined),
    test5: z
        .any()
        .refine((val) => !val || typeof val === "string", "test5 must be number")
        .transform((val) => <string>val || undefined),
    test6: z
        .any()
        .refine((val) => !val || typeof val === "string", "test6 must be number")
        .transform((val) => <string>val || undefined),
    test7: z
        .any()
        .refine((val) => !val || typeof val === "string", "test7 must be number")
        .transform((val) => <string>val || undefined),
    test8: z
        .any()
        .refine((val) => !val || typeof val === "string", "test8 must be number")
        .transform((val) => <string>val || undefined),
    test9: z
        .any()
        .refine((val) => !val || typeof val === "string", "test9 must be number")
        .transform((val) => <string>val || undefined),
    test10: z
        .any()
        .refine((val) => !val || typeof val === "string", "test10 must be number")
        .transform((val) => <string>val || undefined),
});
