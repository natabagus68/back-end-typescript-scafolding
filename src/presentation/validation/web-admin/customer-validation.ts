import { z } from "zod";
import { IMulterFile } from "../types";

export const webAdminCustomerCreateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    // parallelism1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // parallelism2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // gibClearance1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // gibClearance2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // perpendicularity1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // perpendicularity2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
});

export const webAdminCustomerUpdateSchema = z.object({
    customerId: z.string(),
    customerName: z.string(),
    address: z.string(),
    phone: z.string(),
    // parallelism1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // parallelism2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // gibClearance1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // gibClearance2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // perpendicularity1Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
    // perpendicularity2Path: z
    //     .any()
    //     .refine((val) => typeof val === "object", "PhotoPath is required")
    //     .transform((val) => <IMulterFile>val),
});
