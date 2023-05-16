import { z } from "zod";

export const machineDataCreateSchema = z.object({
    machineType: z.string(),
    serialNo: z.string(),
    manufactureDate: z
        .string()
        .datetime()
        .transform((val) => new Date(val)),
    capacity: z.number(),
    slideStroke: z.number(),
    strokePerMinute: z.string(),
    dieHeight: z.number(),
    slideAdjustment: z.number(),
    areaBlosterDimentionX: z.number(),
    areaBlosterDimentionY: z.number(),
    areaSlideDimentionX: z.number(),
    areaSlideDimentionY: z.number(),
    crankPressC: z.boolean(),
    crankPressH: z.boolean(),
    cranklessPress: z.boolean(),
    knucklePress: z.boolean(),
    linkPress: z.boolean(),
    combinationType: z.boolean(),
    separateType: z.boolean(),
    dryFriction: z.boolean(),
    wetFriction: z.boolean(),
    other: z.boolean(),
    intermittent: z.boolean(),
    continues: z.boolean(),
    safetyGuard: z.boolean(),
    safetyLight: z.boolean(),
    doubleSolenoidValve: z.boolean(),
    generalDataId: z.string(),
});
