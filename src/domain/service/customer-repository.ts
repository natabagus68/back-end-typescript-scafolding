import { Customer, ICustomer } from "@/domain/models/customer";
import { TDataTableParam } from "./types";
import { TableData } from "../models/table-data";

export interface CustomerRepository {
    findAll(): Promise<Customer[]>;
    findById(id: string): Promise<Customer>;

    //web-admin
    findAllDataTable(param: TDataTableParam): Promise<TableData<ICustomer>>;
    store(customer: Customer): Promise<Customer>;
    update(id: string, customer: Customer): Promise<Customer>;
    delete(id: string): Promise<void>
}
