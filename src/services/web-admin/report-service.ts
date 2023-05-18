import { IGeneralData } from "@/domain/models/general-data";
import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParam } from "@/domain/service/types";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminReportService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async dataTableReport(param: TDataTableParam): Promise<ITableData<IGeneralData>> {
        const generalDatum = await this._generalDataRepo.findUnapproveTable(param);
        return generalDatum.unmarshal();
    }
}
