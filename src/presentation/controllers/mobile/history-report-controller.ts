import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { historyReportScheme } from "@/presentation/validation/mobile/history-report-validation";
import { MobileHistoryReportService } from "@/services/mobile/history-report-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class MobileHistoryReportController {
    constructor(@inject(TYPES.MobileHistoryReportService) private _historyReportService: MobileHistoryReportService) {}
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
        const approvalData = await this._historyReportService.get(validatedReq.data.generalDataId);
        return res.json({
            message: "success",
            data: approvalData,
        });
    }
    public async getHistoryList(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = historyReportScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const approvalData = await this._historyReportService.findAll(validatedReq.data);
        return res.json({
            message: "success",
            data: approvalData,
        });
    }
}
