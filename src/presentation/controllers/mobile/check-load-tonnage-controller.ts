import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { mobileLoadTonnageSchema } from "@/presentation/validation/mobile/load-tonnage-validation";
import { MobileCheckLoadTonnageService } from "@/services/mobile/check-load-tonnage-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileCheckLoadTonnageController {
    constructor(
        @inject(TYPES.MobileCheckLoadTonnageService) private _checkLoadTonnageService: MobileCheckLoadTonnageService
    ) {}

    public async storeData(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = mobileLoadTonnageSchema.safeParse(req.body);
        if (!validatedData.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedData.error.flatten().fieldErrors,
            });
        }
        const createdData = await this._checkLoadTonnageService.storeData(validatedData.data);
        return res.json({
            message: "success",
            data: createdData,
        });
    }
}
