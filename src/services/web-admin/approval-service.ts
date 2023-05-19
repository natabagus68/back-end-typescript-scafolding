import { IGeneralData } from "@/domain/models/general-data";
import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { InspectionResultRepository } from "@/domain/service/inspection-result-repository";
import { TApprovalDataTableParam } from "@/domain/service/types";
import { IApprovalDataTable } from "@/dto/general-data-dto";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { inspectionResultUpdateScheme } from "@/presentation/validation/web-admin/approval-validation";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminApprovalService {
    constructor(
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository,
        @inject(TYPES.InspectionResultRepository) private _inspectionResultRepo: InspectionResultRepository
    ) {}
    public async getDataTable(param: TApprovalDataTableParam): Promise<ITableData<IApprovalDataTable>> {
        const generalDatum = await this._generalDataRepo.findSubmittedDataTable(param);
        return generalDatum.unmarshal();
    }
    public async approve(generalDataId: string, approvedById: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId);
        if (!generalData.inspectionResultId) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Inspection Result must be updated",
            });
        }
        generalData.approve(approvedById);
        await this._generalDataRepo.update(generalData);
        return generalData.unmarshal();
    }
    public async review(generalDataId: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        return generalData.unmarshal();
    }
    public async updateInspectionResult(param: typeof inspectionResultUpdateScheme._output): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(param.generalDataId);
        const inspectionResult = await this._inspectionResultRepo.findById(param.inspectionResultId);
        generalData.inspectionResultId = inspectionResult.id;
        const updated = await this._generalDataRepo.update(generalData);
        return updated.unmarshal();
    }
}
