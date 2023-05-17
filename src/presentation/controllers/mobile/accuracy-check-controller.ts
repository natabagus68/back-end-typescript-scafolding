import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { accuracyCheckCreateSchema } from "@/presentation/validation/mobile/accuracy-check-validation";
import { MobileAccuracyCheckService } from "@/services/mobile/accuracy-check-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileAccuracyCheckController {
    constructor(@inject(TYPES.MobileAccuracyCheckService) private _mobileAccuracyCheckService: MobileAccuracyCheckService) {}

    public async store(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = accuracyCheckCreateSchema.safeParse(req.body);
        if (!validatedData.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedData.error.flatten().fieldErrors,
            });
        }
        const createdAccuracyCheck = await this._mobileAccuracyCheckService.store({
            generalDataId: validatedData.data.generalDataId,
            unit: validatedData.data.unit,
            balancerAirPsr: validatedData.data.balancerAirPsr,
            prlAdj_0A: validatedData.data.prlAdj_0A,
            prlAdj_0B: validatedData.data.prlAdj_0B,
            prlAdj_0C: validatedData.data.prlAdj_0C,
            prlAdj_0D: validatedData.data.prlAdj_0D,
            prlAdj_180A: validatedData.data.prlAdj_180A,
            prlAdj_180B: validatedData.data.prlAdj_180B,
            prlAdj_180C: validatedData.data.prlAdj_180C,
            prlAdj_180D: validatedData.data.prlAdj_180D,
            prlActVlv: validatedData.data.prlActVlv,
            prlAllowance: validatedData.data.prlAllowance,
            prlJudgement: validatedData.data.prlJudgement,
            gibAdj_0A: validatedData.data.gibAdj_0A,
            gibAdj_0B: validatedData.data.gibAdj_0B,
            gibAdj_0C: validatedData.data.gibAdj_0C,
            gibAdj_0D: validatedData.data.gibAdj_0D,
            gibAdj_180A: validatedData.data.gibAdj_180A,
            gibAdj_180B: validatedData.data.gibAdj_180B,
            gibAdj_180C: validatedData.data.gibAdj_180C,
            gibAdj_180D: validatedData.data.gibAdj_180D,
            gibActVlv: validatedData.data.gibActVlv,
            gibAllowance: validatedData.data.gibAllowance,
            gibJudgement: validatedData.data.gibJudgement,
            ppdcltSlideStroke: validatedData.data.ppdcltSlideStroke,
            ppdcltAdjLrA: validatedData.data.ppdcltAdjLrA,
            ppdcltAdjLrB: validatedData.data.ppdcltAdjLrB,
            ppdcltAdjLrC: validatedData.data.ppdcltAdjLrC,
            ppdcltAdjLrD: validatedData.data.ppdcltAdjLrD,
            ppdcltAdjFrA: validatedData.data.ppdcltAdjFrA,
            ppdcltAdjFrB: validatedData.data.ppdcltAdjFrB,
            ppdcltAdjFrC: validatedData.data.ppdcltAdjFrC,
            ppdcltAdjFrD: validatedData.data.ppdcltAdjFrD,
            ppdcltLrActValue: validatedData.data.ppdcltLrActValue,
            ppdcltLrAllowance: validatedData.data.ppdcltLrAllowance,
            ppdcltLrJudgement: validatedData.data.ppdcltLrJudgement,
            ppdcltFrActValue: validatedData.data.ppdcltFrActValue,
            ppdcltFrAllowance: validatedData.data.ppdcltFrAllowance,
            ppdcltFrJudgement: validatedData.data.ppdcltFrJudgement,
            ttlClrActValue: validatedData.data.ttlClrActValue,
            ttlClrActValve: validatedData.data.ttlClrActValve,
            ttlClrAllowance: validatedData.data.ttlClrAllowance,
            ttlClrJudgement: validatedData.data.ttlClrJudgement,
        });
        return res.json({
            message: "success",
            data: createdAccuracyCheck,
        });
    }
}
