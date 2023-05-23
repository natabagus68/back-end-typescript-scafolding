import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { getDataTableScheme } from "@/presentation/validation/data-table-validation";
import { validate } from "@/presentation/validation/validate";
import { WebadminReportService } from "@/services/web-admin/report-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminReportController {
    constructor(@inject(TYPES.WebadminReportService) private _reportService: WebadminReportService) {}
    public async dataTable(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = validate(getDataTableScheme, req.query);
        const dataTable = await this._reportService.dataTableReport(validatedReq);
        return res.json({
            message: "success",
            data: dataTable,
        });
    }
    public async download(req: AuthRequest, res: Response): Promise<void> {
        const arrayBuffer = await this._reportService.download("asd");
        res.download(arrayBuffer);
    }
}
