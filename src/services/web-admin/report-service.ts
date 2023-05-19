import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParam } from "@/domain/service/types";
import { IGeneralDataDataTable } from "@/dto/general-data-dto";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminReportService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async dataTableReport(param: TDataTableParam): Promise<ITableData<IGeneralDataDataTable>> {
        const generalDatum = await this._generalDataRepo.findUnapprovedTable(param);
        return generalDatum.unmarshal();
    }
}
