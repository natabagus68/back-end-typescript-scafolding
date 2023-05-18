import { GeneralData, IGeneralData } from "@/domain/models/general-data";
import { TDataTableParam } from "./types";
import { TableData } from "../models/table-data";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id: string, relation?: boolean): Promise<GeneralData>;
    getApprovalList(param: TDataTableParam): Promise<TableData<IGeneralData>>;
    getHistoryReportList(param: TDataTableParam, start?: Date, end?: Date): Promise<TableData<IGeneralData>>;
    findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null>;
    findUnsubmittedByInspectorId(inspectorId: string): Promise<GeneralData>;
    findUnapproveTable(param:TDataTableParam): Promise<TableData<IGeneralData>>;
    update(generalData: GeneralData): Promise<GeneralData>;
}
