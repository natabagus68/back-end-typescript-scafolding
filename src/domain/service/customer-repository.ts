import { Customer } from "@/domain/models/customer";

export interface CustomerRepository {
    get(): Promise<Customer[]>;
}