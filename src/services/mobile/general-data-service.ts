import { GeneralData, IGeneralData } from "@/domain/models/general-data";
import { MobileGeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileGeneralDataService {
    constructor(
        @inject(TYPES.GeneralDataRepository)
        private _repository: MobileGeneralDataRepository
    ) {}
    async create(generalData: IGeneralData): Promise<IGeneralData> {
        const data = GeneralData.create({
            customerId: generalData.customerId,
            personInCharge: generalData.personInCharge,
            inspectionDate: generalData.inspectionDate,
            inspectorId: generalData.inspectorId,
            lastStep: generalData.lastStep,
        });
        const created = await this._repository.create(data);
        return created.unmarshal();
    }
}
