import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { mobileInspectionDataSchema } from "@/presentation/validation/mobile/inspection-form-validation";
import { MobileInspectionFormService } from "@/services/mobile/inspection-form-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileInspectionFormController {
    constructor(
        @inject(TYPES.MobileInspectionFormService) private _inspectionFormService: MobileInspectionFormService
    ) {}
    public async getForm(req: AuthRequest, res: Response): Promise<Response> {
        const data = await this._inspectionFormService.getForm();
        return res.json({
            message: "success",
            data,
        });
    }

    public async storeData(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = mobileInspectionDataSchema.safeParse(req.body);
        if (!validatedData.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedData.error.flatten().fieldErrors,
            });
        }
        const createdData = await this._inspectionFormService.storeData(
            validatedData.data.map((item, i) => ({ ...item, order: i + 1 }))
        );
        return res.json({
            message: "success",
            data: createdData,
        });
    }
}
