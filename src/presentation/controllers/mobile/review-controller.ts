import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { MobileReviewService } from "@/services/mobile/review-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class MobileReviewController {
    constructor(@inject(TYPES.MobileReviewService) private _reviewService: MobileReviewService) {}
    public async get(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = z
            .object({
                generalDataId: z.string(),
            })
            .safeParse(req.params);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const review = await this._reviewService.get(validatedReq.data.generalDataId);
        return res.json({
            message: "success",
            data: review,
        });
    }
    public async submit(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = z
            .object({
                generalDataId: z.string(),
            })
            .safeParse(req.params);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        await this._reviewService.submit(validatedReq.data.generalDataId);
        return res.json({
            message: "success",
            data: "Form has been submitted",
        });
    }
}
