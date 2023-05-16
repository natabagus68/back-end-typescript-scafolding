import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { mobileMachineCheckCreateSchema } from "@/presentation/validation/mobile/machine-check-validation";
import { MobileMachineCheckService } from "@/services/mobile/machine-check-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileMachineCheckController {
    constructor(@inject(TYPES.MobileMachineCheckService) private _mobileMachineService: MobileMachineCheckService) {}
    async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = mobileMachineCheckCreateSchema.safeParse(req.body);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const createdMachineCheck = await this._mobileMachineService.store(validatedReq.data);
        return res.json({
            message: "success",
            data: createdMachineCheck,
        });
    }
}
