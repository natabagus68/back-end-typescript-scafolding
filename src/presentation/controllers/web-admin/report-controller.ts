import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { getDataTableScheme } from "@/presentation/validation/data-table-validation";
import { WebadminReportService } from "@/services/web-admin/report-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminReportController {
    constructor(@inject(TYPES.WebadminReportService) private _reportService: WebadminReportService) {}
    public async dataTable(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Failed",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const dataTable = await this._reportService.dataTableReport(validatedReq.data);
        return res.json({
            message: "success",
            data: dataTable,
        });
    }
}
