import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { machineDataCreateSchema } from "@/presentation/validation/mobile/machine-data-validation";
import { MobileMachineDataService } from "@/services/mobile/machine-data-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileMachineDataController {
    constructor(@inject(TYPES.MobileMachineDataService) private _mobileMachineDataService: MobileMachineDataService) {}

    public async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = machineDataCreateSchema.safeParse(req.body);
        if (!validatedData.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedData.error.flatten().fieldErrors,
            });
        }
        const createdMachineData = await this._mobileMachineDataService.store({
            machineType: validatedData.data.machineType,
            serialNo: validatedData.data.serialNo,
            manufactureDate: validatedData.data.manufactureDate,
            capacity: validatedData.data.capacity,
            slideStroke: validatedData.data.slideStroke,
            strokePerMinute: validatedData.data.strokePerMinute,
            dieHeight: validatedData.data.dieHeight,
            slideAdjustment: validatedData.data.slideAdjustment,
            areaBlosterDimentionX: validatedData.data.areaBlosterDimentionX,
            areaBlosterDimentionY: validatedData.data.areaBlosterDimentionY,
            areaSlideDimentionX: validatedData.data.areaSlideDimentionX,
            areaSlideDimentionY: validatedData.data.areaSlideDimentionY,
            crankPressC: validatedData.data.crankPressC,
            crankPressH: validatedData.data.crankPressH,
            cranklessPress: validatedData.data.cranklessPress,
            knucklePress: validatedData.data.knucklePress,
            linkPress: validatedData.data.linkPress,
            combinationType: validatedData.data.combinationType,
            separateType: validatedData.data.separateType,
            dryFriction: validatedData.data.dryFriction,
            wetFriction: validatedData.data.wetFriction,
            other: validatedData.data.other,
            intermittent: validatedData.data.intermittent,
            continues: validatedData.data.continues,
            safetyGuard: validatedData.data.safetyGuard,
            safetyLight: validatedData.data.safetyLight,
            doubleSolenoidValve: validatedData.data.doubleSolenoidValve,
            generalDataId: validatedData.data.generalDataId,
        });
        return res.json({
            message: "success",
            data: createdMachineData,
        });
    }
}
