import { Customer, ICustomer } from "@/domain/models/customer";
import { TableData } from "@/domain/models/table-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { TDataTableParam } from "@/domain/service/types";
import { Customer as CustomerDB } from "@/infrastructure/database/models";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { Op } from "sequelize";

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
    async findAllDataTable(param: TDataTableParam): Promise<TableData<ICustomer>> {
        const customers = await CustomerDB.findAll({
            where: {
                ...(param.search &&
                    param.search !== "" && {
                    [Op.and]: {
                        customer_name: {
                            [Op.iLike]: `%${param.search}%`,
                        },
                    },
                }),
            },
            limit: param.limit ? param.limit : undefined,
            order: [["customer_name", "ASC"]],
            offset: (param.page || 1) > 1 ? (param.limit || 10) * ((param.page || 1) - 1) : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: customers.map((item) =>
                Customer.create({
                    id: item.getDataValue("id"),
                    customerId: item.getDataValue("customer_id"),
                    customerName: item.getDataValue("customer_name"),
                    address: item.getDataValue("address"),
                    phone: item.getDataValue("phone"),
                    parallelism1Path: item.getDataValue("parallelism1_path"),
                    parallelism2Path: item.getDataValue("parallelism2_path"),
                    gibClearance1Path: item.getDataValue("gib_clearance1_path"),
                    gibClearance2Path: item.getDataValue("gib_clearance2_path"),
                    perpendicularity1Path: item.getDataValue("perpendicularity1_path"),
                    perpendicularity2Path: item.getDataValue("perpendicularity2_path"),
                }).unmarshal()
            ),
        });
    }

    async store(customer: Customer): Promise<Customer> {
        const created = await CustomerDB.create({
            id: customer.id,
            customer_id: customer.customerId,
            customer_name: customer.customerName,
            address: customer.address,
            phone: customer.phone,
            parallelism1_path: customer.parallelism1Path,
            parallelism2_path: customer.parallelism2Path,
            gib_clearance1_path: customer.gibClearance1Path,
            gib_clearance2_path: customer.gibClearance2Path,
            perpendicularity1_path: customer.perpendicularity1Path,
            perpendicularity2_path: customer.perpendicularity2Path,
        });
        const customerData = Customer.create({
            id: created.getDataValue("id"),
            customerId: created.getDataValue("customerId"),
            customerName: created.getDataValue("customerName"),
            address: created.getDataValue("address"),
            phone: created.getDataValue("phone"),
            parallelism1Path: created.getDataValue("parallelism1_path"),
            parallelism2Path: created.getDataValue("parallelism2_path"),
            gibClearance1Path: created.getDataValue("gib_clearance1_path"),
            gibClearance2Path: created.getDataValue("gib_clearance2_path"),
            perpendicularity1Path: created.getDataValue("perpendicularity1_path"),
            perpendicularity2Path: created.getDataValue("perpendicularity2_path"),
            createdAt: created.getDataValue("created_at"),
            updatedAt: created.getDataValue("updated_at"),
        });
        return customerData;
    }
    async update(id: string, customerData: Customer): Promise<Customer> {
        const customer = await CustomerDB.findByPk(id);
        if (!customer) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Customer Not Found",
            });
        }
        await customer.update({
            customer_id: customerData.customerId,
            customer_name: customerData.customerName,
            address: customerData.address,
            phone: customerData.phone,
            parallelism1_path: customerData.parallelism1Path,
            parallelism2_path: customerData.parallelism2Path,
            gib_clearance1_path: customerData.gibClearance1Path,
            gib_clearance2_path: customerData.gibClearance2Path,
            perpendicularity1_path: customerData.perpendicularity1Path,
            perpendicularity2_path: customerData.perpendicularity2Path,
        });
        await customer.reload();
        return Customer.create({
            id: customer.id,
            customerId: customer.customer_id,
            customerName: customer.customer_name,
            address: customer.address,
            phone: customer.phone,
            parallelism1Path: customer.parallelism1_path,
            parallelism2Path: customer.parallelism2_path,
            gibClearance1Path: customer.gib_clearance1_path,
            gibClearance2Path: customer.gib_clearance2_path,
            perpendicularity1Path: customer.perpendicularity1_path,
            perpendicularity2Path: customer.perpendicularity2_path,
            createdAt: customer.created_at,
            updatedAt: customer.updated_at,
        });
    }
    async delete(id: string): Promise<void> {
        const customer = await CustomerDB.findByPk(id);
        if (!customer) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Customer Not Found",
            });
        }
        await customer.destroy();
    }
}
