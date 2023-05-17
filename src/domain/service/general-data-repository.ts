import { GeneralData, IGeneralData } from "@/domain/models/general-data";
import { TDataTableParam } from "./types";
import { TableData } from "../models/table-data";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id: string, relation?: boolean): Promise<GeneralData>;
    getDataTable(param: TDataTableParam): Promise<TableData<IGeneralData>>;
    findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null>;
    findUnsubmittedByInspectorId(inspectorId: string): Promise<GeneralData>;
    update(generalData: GeneralData): Promise<GeneralData>;
}
