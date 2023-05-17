import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { mobileResumeCheckCreateSchema } from "@/presentation/validation/mobile/resume-check-validation";
import { MobileResumeCheckService } from "@/services/mobile/resume-check-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileResumeCheckController {
    constructor(@inject(TYPES.MobileResumeCheckService) private _resumeCheckService: MobileResumeCheckService) {}
    public async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = mobileResumeCheckCreateSchema.safeParse({ ...req.body, photoPath: req.file });
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const created = await this._resumeCheckService.store(validatedReq.data);
        return res.json({
            message: "success",
            data: created,
        });
    }
}
