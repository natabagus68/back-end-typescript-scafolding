import { GeneralData } from "@/domain/models/general-data";

export interface MobileGeneralDataRepository {
    create(generalData: GeneralData): Promise<GeneralData>;
}
