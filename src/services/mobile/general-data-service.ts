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
        const existingGeneralData = await this._repository.findByCustAndDate(customer.id, generalData.inspectionDate);
        const data = GeneralData.create({
            ...generalData,
            id: existingGeneralData?.id,
            customerId: customer.id,
        });
        const created = existingGeneralData ? await this._repository.update(data) : await this._repository.store(data);
        return created.unmarshal();
    }
    async getIncompleteForm(inspectorId: string): Promise<IGeneralData> {
        const generalData = await this._repository.findUnsubmittedByInspectorId(inspectorId);
        return generalData.unmarshal();
    }
}
