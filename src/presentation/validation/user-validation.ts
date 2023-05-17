import { z } from "zod";
import { File } from "buffer";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const userCreateScheme = z.object({
    email: z.string().email(),
    password: z.string(),
    fullname: z.string(),
    isActive: z.any().refine((val) => !(!val || val == "0" || val == "false" || val == ""), "Is Active must boolean"),
    avatar_path: z
        .any()
        .refine((files) => files, "Image is required.")
        .refine((files) => files?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.mimetype),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
});

export const userUpdateScheme = z.object({
    email: z.string().email(),
    password: z.string().nullish(),
    fullname: z.string(),
    isActive: z.boolean(),
    avatar_path: z
        .any()
        .refine((file) => file?.length > 0, "Image is required.")
        .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
            ".jpg, .jpeg, .png and .webp file are accepted."
        )
        .nullable()
        .nullish()
        .transform((val) => new File(val?.buffer, val.name)),
});

export const userRoleScheme = z.object({
    user_id: z.string(),
    role_id: z.string().array(),
});

export const userDataTableScheme = z.object({
    page: z.number(),
    limit: z.number(),
    search: z.string(),
});
