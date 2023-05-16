import { Customer } from "@/domain/models/customer";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { Customer as CustomerDB } from "@/infrastructure/database/models";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";

@injectable()
export class CustomerSequelizeRepository implements CustomerRepository {
    async findById(id: string): Promise<Customer> {
        const foundCustomer = await CustomerDB.findByPk(id);
        if (!foundCustomer) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Customer Not Found",
            });
        }
        return Customer.create({
            id: foundCustomer.id,
            customerId: foundCustomer.customer_id,
            customerName: foundCustomer.customer_name,
            address: foundCustomer.address,
            phone: foundCustomer.phone,
            parallelism1Path: foundCustomer.parallelism1_path,
            parallelism2Path: foundCustomer.parallelism2_path,
            gibClearance1Path: foundCustomer.gib_clearance1_path,
            gibClearance2Path: foundCustomer.gib_clearance2_path,
            perpendicularity1Path: foundCustomer.perpendicularity1_path,
            perpendicularity2Path: foundCustomer.perpendicularity2_path,
            createdAt: foundCustomer.created_at,
            updatedAt: foundCustomer.updated_at,
            deletedAt: foundCustomer.deleted_at,
        });
    }
    async findAll(): Promise<Customer[]> {
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
