import { GeneralData } from "@/domain/models/general-data";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id:string):Promise<GeneralData>
    update(generalData:GeneralData):Promise<GeneralData>;
}
