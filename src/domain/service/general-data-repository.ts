import { GeneralData } from "@/domain/models/general-data";

export interface GeneralDataRepository {
    store(generalData: GeneralData): Promise<GeneralData>;
    findById(id: string): Promise<GeneralData>;
    findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null>;
    update(generalData: GeneralData): Promise<GeneralData>;
}
