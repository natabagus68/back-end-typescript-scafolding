import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { validate } from "@/presentation/validation/validate";
import {
    approvalApproveSchema,
    approvalDataTableScheme,
    inspectionResultUpdateScheme,
} from "@/presentation/validation/web-admin/approval-validation";
import { WebadminApprovalService } from "@/services/web-admin/approval-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";
import { z } from "zod";

@injectable()
export class WebadminApprovalController {
    constructor(@inject(TYPES.WebadminApprovalService) private _approvalService: WebadminApprovalService) {}
    public async getDataTable(req: AuthRequest, res: Response): Promise<Response> {
        const validatedData = <typeof approvalDataTableScheme._output>validate(approvalDataTableScheme, req.query);
        const dataTable = await this._approvalService.getDataTable(validatedData);
        return res.json({
            message: "success",
            data: dataTable,
        });
    }
    public async approve(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = <typeof approvalApproveSchema._output>validate(approvalApproveSchema, req.params);
        const generalData = await this._approvalService.approve(validatedReq.generalDataId, req.auth.user.id);
        return res.json({
            message: "success",
            data: generalData,
        });
    }
    public async review(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = <typeof approvalApproveSchema._output>validate(approvalApproveSchema, req.params);
        const data = await this._approvalService.review(validatedReq.generalDataId);
        return res.json({
            message: "success",
            data: data,
        });
    }
    public async updateResult(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = <typeof inspectionResultUpdateScheme._output>(
            validate(inspectionResultUpdateScheme, { ...req.body, ...req.params })
        );
        const updated = await this._approvalService.updateInspectionResult(validatedReq);
        return res.json({
            message: "success",
            data: updated,
        });
    }
}
