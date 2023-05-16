import { Customer } from "@/domain/models/customer";

export interface CustomerRepository {
    findAll(): Promise<Customer[]>;
    findById(id:string):Promise<Customer>;
}