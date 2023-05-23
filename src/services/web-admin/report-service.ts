import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParam } from "@/domain/service/types";
import { IReportDataTable } from "@/dto/general-data-dto";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
// import "core-js/modules/es.promise";
// import "core-js/modules/es.string.includes";
// import "core-js/modules/es.object.assign";
// import "core-js/modules/es.object.keys";
// import "core-js/modules/es.symbol";
// import "core-js/modules/es.symbol.async-iterator";
// import "regenerator-runtime/runtime";
// import ExcelJs from "exceljs/dist/es5";

@injectable()
export class WebadminReportService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async dataTableReport(param: TDataTableParam): Promise<ITableData<IReportDataTable>> {
        const generalDatum = await this._generalDataRepo.findApprovedDataTable(param);
        return generalDatum.unmarshal();
    }
    // public async download(generalDataId:string):Promise<Strea/>
}
