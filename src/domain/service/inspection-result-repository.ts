import { InspectionResult } from "../models/inspection-result";

export interface InspectionResultRepository {
    findAll(): Promise<InspectionResult[]>;
    findById(id:string):Promise<InspectionResult>
    show(id: string): Promise<InspectionResult>;
    store(props: InspectionResult): Promise<InspectionResult>;
    update(props: InspectionResult): Promise<InspectionResult>;
    destroy(id: string): Promise<void>;
}
