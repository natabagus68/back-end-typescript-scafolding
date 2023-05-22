import { z } from "zod";
import { IMulterFile } from "../types";

export const webAdminCustomerCreateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    parallelism1Path: z.string(),
    parallelism2Path: z.string(),
    gibClearance1Path: z.string(),
    gibClearance2Path: z.string(),
    perpendicularity1Path: z.string(),
    perpendicularity2Path: z.string(),
});

export const webAdminCustomerUpdateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    parallelism1Path: z.string(),
    parallelism2Path: z.string(),
    gibClearance1Path: z.string(),
    gibClearance2Path: z.string(),
    perpendicularity1Path: z.string(),
    perpendicularity2Path: z.string(),
});

export const webAdminCustomerUploadSchema = z.object({
    file: z
        .any()
        .refine((val) => typeof val === "object", "Image file is required")
        .transform((val) => <IMulterFile>val),
});
