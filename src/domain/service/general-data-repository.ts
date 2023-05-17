import { GeneralData } from "@/domain/models/general-data";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id: string, relation?: boolean): Promise<GeneralData>;
    findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null>;
    findUnsubmittedByInspectorId(inspectorId:string):Promise<GeneralData>;
    update(generalData: GeneralData): Promise<GeneralData>;
}
