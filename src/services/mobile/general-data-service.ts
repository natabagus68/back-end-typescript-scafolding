import { GeneralData, IGeneralData } from "@/domain/models/general-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileGeneralDataService {
    constructor(
        @inject(TYPES.GeneralDataRepository)
        private _repository: GeneralDataRepository,
        @inject(TYPES.CustomerRepository)
        private _customerRepo: CustomerRepository
    ) {}
    async store(generalData: IGeneralData): Promise<IGeneralData> {
        const customer = await this._customerRepo.findById(generalData.customerId);
        const data = GeneralData.create({
            customerId: customer.id,
            personInCharge: generalData.personInCharge,
            inspectionDate: generalData.inspectionDate,
            inspectorId: generalData.inspectorId,
            lastStep: generalData.lastStep,
        });
        const created = await this._repository.store(data);
        return created.unmarshal();
    }
}
