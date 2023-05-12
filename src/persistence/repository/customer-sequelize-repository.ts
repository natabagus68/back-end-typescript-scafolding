import { Customer } from "@/domain/models/customer";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { Customer as CustomerDB } from "@/infrastructure/database/models/customer";
import { injectable } from "inversify";

@injectable()
export class CustomerSequelizeRepository implements CustomerRepository {
    async get(): Promise<Customer[]> {
        const customers = await CustomerDB.findAll();
        return customers.map((item) =>
            Customer.create({
                id: item.id,
                customerId: item.customer_id,
                customerName: item.customer_name,
                address: item.address,
                phone: item.phone,
                parallelism1Path: item.parallelism1_path,
                parallelism2Path: item.parallelism2_path,
                gibClearance1Path: item.gib_clearance1_path,
                gibClearance2Path: item.gib_clearance2_path,
                perpendicularity1Path: item.perpendicularity1_path,
                perpendicularity2Path: item.perpendicularity2_path,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
                deletedAt: item.deleted_at,
            })
        );
    }
}
