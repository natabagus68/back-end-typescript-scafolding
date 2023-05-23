import { z } from "zod";
import { IMulterFile } from "../types";

export const webAdminCustomerCreateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    parallelism1Path: z.any().transform((val) => <string>val || ""),
    parallelism2Path: z.any().transform((val) => <string>val || ""),
    gibClearance1Path: z.any().transform((val) => <string>val || ""),
    gibClearance2Path: z.any().transform((val) => <string>val || ""),
    perpendicularity1Path: z.any().transform((val) => <string>val || ""),
    perpendicularity2Path: z.any().transform((val) => <string>val || ""),
});

export const webAdminCustomerUpdateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    parallelism1Path: z.any().transform((val) => <string>val || ""),
    parallelism2Path: z.any().transform((val) => <string>val || ""),
    gibClearance1Path: z.any().transform((val) => <string>val || ""),
    gibClearance2Path: z.any().transform((val) => <string>val || ""),
    perpendicularity1Path: z.any().transform((val) => <string>val || ""),
    perpendicularity2Path: z.any().transform((val) => <string>val || ""),
});

export const webAdminCustomerUploadSchema = z.object({
    file: z
        .any()
        .refine((val) => typeof val === "object", "Image file is required")
        .transform((val) => <IMulterFile>val),
});
