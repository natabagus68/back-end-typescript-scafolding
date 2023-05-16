import { InspectionData } from "../models/inspection-data";

export interface InspectionDataRepository {
    store(param: InspectionData[]): Promise<InspectionData[]>;
    deleteByGeneralDataId(generalDataId: string): Promise<void>;
}
