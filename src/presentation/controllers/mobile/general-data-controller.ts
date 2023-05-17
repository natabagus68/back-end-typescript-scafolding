import { EGeneralDataLastStep } from "@/domain/models/general-data";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { generalDataCreateSchema } from "@/presentation/validation/mobile/general-data-validation";
import { MobileGeneralDataService } from "@/services/mobile/general-data-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileGeneralDataController {
    constructor(
        @inject(TYPES.MobileGeneralDataService)
        private _generalDataService: MobileGeneralDataService
    ) {}

    public async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = generalDataCreateSchema.safeParse(req.body);
        if (!validatedData.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedData.error.flatten().fieldErrors,
            });
        }
        const createdUser = await this._generalDataService.store({
            customerId: validatedData.data.customerId,
            personInCharge: validatedData.data.personInCharge,
            inspectionDate: validatedData.data.inspectionDate,
            inspectorId: req.auth.user.id,
            lastStep: EGeneralDataLastStep.GENERAL_DATA,
        });
        return res.status(201).json({ message: "success", data: createdUser });
    }
    public async getIncomplete(req: AuthRequest, res: Response): Promise<Response> {
        const found = await this._generalDataService.getIncompleteForm(req.auth.user.id);
        return res.json({
            message: "success",
            data: found,
        });
    }
}
