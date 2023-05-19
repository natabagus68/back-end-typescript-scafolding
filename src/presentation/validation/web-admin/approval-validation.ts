import { EGeneralDataStatus } from "@/dto/general-data-dto";
import { z } from "zod";

export const approvalDataTableScheme = z.object({
    search: z.string(),
    page: z
        .any()
        .refine((val) => parseInt(val) > -1, "Page must be number")
        .transform((val) => (parseInt(val) > 0 ? parseInt(val) : 1)),
    limit: z
        .any()
        .refine((val) => parseInt(val) > -1, "Page must be number")
        .transform((val) => (parseInt(val) > 0 ? parseInt(val) : 10)),
    status: z
        .any()
        .refine(
            (val) => Object.values(EGeneralDataStatus).indexOf(val) > -1,
            `Status Must in ${Object.values(EGeneralDataStatus).join(",")}`
        )
        .transform((val) => <EGeneralDataStatus>val),
});

export const approvalApproveSchema = z.object({
    generalDataId: z.string(),
});

export const inspectionResultUpdateScheme = z.object({
    generalDataId: z.string(),
    inspectionResultId: z.string(),
});