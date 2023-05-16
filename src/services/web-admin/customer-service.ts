import { ICustomer } from "@/domain/models/customer";
import { ITableData } from "@/domain/models/table-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { TDataTableParam } from "@/domain/service/types";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebAdminCustomerService {
    constructor(@inject(TYPES.CustomerRepository) private _customerRepo: CustomerRepository) {}
    public async getDataTable(param: TDataTableParam): Promise<ITableData<ICustomer>> {
        param;
        throw "asd";
    }
}
