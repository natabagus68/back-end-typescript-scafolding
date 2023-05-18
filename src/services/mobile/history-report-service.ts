import { IGeneralData } from "@/domain/models/general-data";
import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParamFilterDate } from "@/domain/service/types";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import moment from "moment";

@injectable()
export class MobileHistoryReportService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async findAll(query: TDataTableParamFilterDate): Promise<ITableData<IGeneralData>> {
        let start, end;
        if (query.filterDate?.toLowerCase() == "today") {
            start = moment().startOf("day").toDate();
            end = moment().endOf("day").toDate();
        } else if (query.filterDate?.toLowerCase() == "month") {
            start = moment().startOf("month").toDate();
            end = moment().endOf("month").toDate();
        }
        const generalData = await this._generalDataRepo.getHistoryReportList(query, start, end);
        return generalData.unmarshal();
    }

    public async get(generalDataId: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        return generalData.unmarshal();
    }
}
