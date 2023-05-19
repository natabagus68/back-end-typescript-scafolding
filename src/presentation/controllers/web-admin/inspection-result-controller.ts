import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { WebadminInspectionResultService } from "@/services/web-admin/inspection-result-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminInspectionResultController {
    constructor(
        @inject(TYPES.WebadminInspectionResultService) private _inspectionResultService: WebadminInspectionResultService
    ) {}
    public async findAll(req: AuthRequest, res: Response): Promise<Response> {
        const inspectionResults = await this._inspectionResultService.findAll();
        return res.json({
            message: "success",
            data: inspectionResults,
        });
    }
}
