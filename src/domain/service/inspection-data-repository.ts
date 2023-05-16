import { InspectionData } from "../models/inspection-data";

export interface InspectionDataRepository{
    store(param:InspectionData[]):Promise<InspectionData[]>
}