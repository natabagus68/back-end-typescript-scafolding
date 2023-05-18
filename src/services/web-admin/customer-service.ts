import { Customer, ICustomer } from "@/domain/models/customer";
import { ITableData } from "@/domain/models/table-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { TDataTableParam } from "@/domain/service/types";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebAdminCustomerService {
    constructor(@inject(TYPES.CustomerRepository) private _customerRepo: CustomerRepository) {}
    public async findAll(param: TDataTableParam): Promise<ITableData<ICustomer>> {
        const customers = await this._customerRepo.findAllDataTable(param);
        return customers.unmarshal();
    }

    public async store(customerData: Customer): Promise<ICustomer> {
        const customer = await this._customerRepo.store(customerData);
        return customer.unmarshal();
    }

    public async findById(id: string): Promise<ICustomer> {
        const customer = await this._customerRepo.findById(id);
        return customer.unmarshal();
    }

    public async update(id: string, customerData: Customer): Promise<ICustomer> {
        const customer = await this._customerRepo.update(id, customerData);
        return customer.unmarshal();
    }

    public async destroy(id: string): Promise<boolean> {
        await this._customerRepo.delete(id);
        return true;
    }
}
