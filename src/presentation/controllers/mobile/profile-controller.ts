import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { mobileChangePasswordSchema } from "@/presentation/validation/user-validation";
import { MobileProfileService } from "@/services/mobile/profile-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class MobileProfileController {
    constructor(@inject(TYPES.MobileProfileService) private _profileService: MobileProfileService) {}
    public async get(req: AuthRequest, res: Response): Promise<Response> {
        const user = await this._profileService.get(req.auth.user.id);
        return res.json({
            message: "success",
            data: user,
        });
    }
    public async changePassword(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = mobileChangePasswordSchema.safeParse(req.body);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: {
                    ...validatedReq.error.flatten().fieldErrors,
                    ...validatedReq.error.flatten().formErrors,
                },
            });
        }
        const user = await this._profileService.changePassword(
            req.auth.user.id,
            validatedReq.data.currentPassword,
            validatedReq.data.newPassword
        );
        return res.json({
            message: "success",
            data: user,
        });
    }
}
