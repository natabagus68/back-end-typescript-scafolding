import { CustomerRepository } from "@/domain/service/customer-repository";
import { ICustomerToOption } from "@/dto/customer-dto";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileCustomerService {
    constructor(
        @inject(TYPES.CustomerRepository)
        private _customerRepo: CustomerRepository
    ) {}
    async getOptionData(): Promise<ICustomerToOption[]> {
        const customers = await this._customerRepo.findAll();
        return customers.map((item) => ({
            id: item.id || "",
            customerId: item.customerId || "",
            customerName: item.customerName,
            address: item.address,
            phone: item.phone,
        }));
    }
}
