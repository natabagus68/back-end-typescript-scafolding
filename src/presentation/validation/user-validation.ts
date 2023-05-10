import { z } from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export const userCreateScheme = z.object({
    email: z.string().email(),
    password: z.string(),
    fullname: z.string(),
    is_active: z
        .any()
        .refine(
            (val) => !(!val || val == "0" || val == "false" || val == ""),
            "Is Active must boolean"
        ),
    avatar_path: z
        .any()
        .refine((files) => files, "Image is required.")
        .refine(
            (files) => files?.size <= MAX_FILE_SIZE,
            "Max file size is 5MB."
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.mimetype),
            ".jpg, .jpeg, .png and .webp files are accepted."
        ),
});

export const userUpdateScheme = z.object({
    email: z.string().email(),
    password: z.string().nullish(),
    fullname: z.string(),
    is_active: z.boolean(),
    avatar_path: z
        .any()
        .refine((file) => file?.length > 0, "Image is required.")
        .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
        .refine(
            (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
            ".jpg, .jpeg, .png and .webp file are accepted."
        )
        .nullable()
        .nullish(),
});

export const userRoleScheme = z.object({
    user_id: z.string(),
    role_id: z.string().array(),
});
