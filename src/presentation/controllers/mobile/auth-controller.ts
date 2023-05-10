import { MobileLoginDto } from "@/dto/mobile/auth-dto";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { mobileLoginSchema } from "@/presentation/validation/mobile/auth-validation";
import { MobileAuthService } from "@/services/mobile/auth-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileAuthController {
    constructor(
        @inject(TYPES.MobileAuthService)
        private _mobileService: MobileAuthService
    ) {}
    public async login(req: Request, res: Response): Promise<Response> {
        const loginSchema = mobileLoginSchema.safeParse(req.body);
        if (!loginSchema.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request Validation Failed",
                data: loginSchema.error.flatten().fieldErrors,
            });
        }
        const mobileLoginDto: MobileLoginDto = {
            email: loginSchema.data.email,
            password: loginSchema.data.password,
        };
        const auth = await this._mobileService.login(mobileLoginDto);
        return res.json({
            message: "success",
            data: auth,
        });
    }
}
