import { GeneralData, IGeneralData } from "@/domain/models/general-data";
import { TApprovalDataTableParam, TDataTableParam } from "./types";
import { TableData } from "../models/table-data";
import { IApprovalDataTable, IReportDataTable } from "@/dto/general-data-dto";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id: string, relation?: boolean): Promise<GeneralData>;
    getApprovalList(param: TDataTableParam): Promise<TableData<IGeneralData>>;
    getHistoryReportList(param: TDataTableParam, start?: Date, end?: Date): Promise<TableData<IGeneralData>>;
    findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null>;
    findUnsubmittedByInspectorId(inspectorId: string): Promise<GeneralData>;
    findSubmittedDataTable(param:TApprovalDataTableParam): Promise<TableData<IApprovalDataTable>>;
    findApprovedDataTable(param:TDataTableParam):Promise<TableData<IReportDataTable>>
    update(generalData: GeneralData): Promise<GeneralData>;
}
