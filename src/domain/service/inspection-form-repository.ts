import { InspectionForm } from "../models/inspection-form";

export interface InspectionFormRepository{
    getForm():Promise<InspectionForm[]>
    store(param:InspectionForm[]):Promise<InspectionForm[]>
}