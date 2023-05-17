import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { approvalDataTableScheme } from "@/presentation/validation/mobile/approval-validation";
import { MobileApprovalService } from "@/services/mobile/approval-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class MobileApprovalController {
    constructor(@inject(TYPES.MobileApprovalService) private _approvalService: MobileApprovalService) {}
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
        const approvalData = await this._approvalService.get(validatedReq.data.generalDataId);
        return res.json({
            message: "success",
            data: approvalData,
        });
    }
    public async getApprovalList(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = approvalDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const approvalData = await this._approvalService.findAll({
            page: 1,
            limit: 10,
        });
        return res.json({
            message: "success",
            data: approvalData,
        });
    }
    public async confirm(req: AuthRequest, res: Response): Promise<Response> {
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
        await this._approvalService.confirm(validatedReq.data.generalDataId, req.auth.user.id);
        return res.json({
            message: "success",
            data: "General Data has been approved",
        });
    }
}
