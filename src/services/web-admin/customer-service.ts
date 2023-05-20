import { Customer, ICustomer } from "@/domain/models/customer";
import { ITableData } from "@/domain/models/table-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebAdminCustomerService {
    constructor(@inject(TYPES.CustomerRepository) private _customerRepo: CustomerRepository) {}
    public async findAll(param: TDataTableParam): Promise<ITableData<ICustomer>> {
        const customers = await this._customerRepo.findAllDataTable(param);
        return customers.unmarshal();
    }

    public async store(customerData: ICustomer): Promise<ICustomer> {
        const _customer = Customer.create(customerData);
        if (
            typeof customerData.gibClearance1Path === "object" &&
            typeof customerData.gibClearance2Path === "object" &&
            typeof customerData.parallelism1Path === "object" &&
            typeof customerData.parallelism2Path === "object" &&
            typeof customerData.perpendicularity1Path === "object" &&
            typeof customerData.perpendicularity2Path === "object"
        ) {
            const gibClearance1Path = FileSystem.store(customerData.gibClearance1Path, "gib-clearance-1");
            const gibClearance2Path = FileSystem.store(customerData.gibClearance2Path, "gib-clearance-2");
            const parallelism1Path = FileSystem.store(customerData.parallelism1Path, "parallel-1");
            const parallelism2Path = FileSystem.store(customerData.parallelism2Path, "parallel-2");
            const perpendicularity1Path = FileSystem.store(customerData.perpendicularity1Path, "perpendicularity-1");
            const perpendicularity2Path = FileSystem.store(customerData.perpendicularity2Path, "perpendicularity-2");
            _customer.gibClearance1Path = gibClearance1Path;
            _customer.gibClearance2Path = gibClearance2Path;
            _customer.parallelism1Path = parallelism1Path;
            _customer.parallelism2Path = parallelism2Path;
            _customer.perpendicularity1Path = perpendicularity1Path;
            _customer.perpendicularity2Path = perpendicularity2Path;
        }
        const customer = await this._customerRepo.store(_customer);
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
