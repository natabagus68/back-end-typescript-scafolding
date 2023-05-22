import { Customer, ICustomer } from "@/domain/models/customer";
import { ITableData } from "@/domain/models/table-data";
import { CustomerRepository } from "@/domain/service/customer-repository";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { IMulterFile } from "@/presentation/validation/types";
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
        const _parallelism1Path = FileSystem.copyImageCustomer(<string>customerData.parallelism1Path, "customer");
        const _parallelism2Path = FileSystem.copyImageCustomer(<string>customerData.parallelism2Path, "customer");
        const _gibClearance1Path = FileSystem.copyImageCustomer(<string>customerData.gibClearance1Path, "customer");
        const _gibClearance2Path = FileSystem.copyImageCustomer(<string>customerData.gibClearance2Path, "customer");
        const _perpendicularity1Path = FileSystem.copyImageCustomer(
            <string>customerData.perpendicularity1Path,
            "customer"
        );
        const _perpendicularity2Path = FileSystem.copyImageCustomer(
            <string>customerData.perpendicularity2Path,
            "customer"
        );
        const customer = await this._customerRepo.store(
            Customer.create({
                customerId: customerData.customerId,
                customerName: customerData.customerName,
                address: customerData.address,
                phone: customerData.phone,
                parallelism1Path: _parallelism1Path,
                parallelism2Path: _parallelism2Path,
                gibClearance1Path: _gibClearance1Path,
                gibClearance2Path: _gibClearance2Path,
                perpendicularity1Path: _perpendicularity1Path,
                perpendicularity2Path: _perpendicularity2Path,
            })
        );
        return customer.unmarshal();
    }

    public async findById(id: string): Promise<ICustomer> {
        const customer = await this._customerRepo.findById(id);
        return customer.unmarshal();
    }

    public async update(id: string, _customerData: Customer): Promise<ICustomer> {
        const customerData = await this._customerRepo.findById(id);
        let _gibClearance1Path,
            _gibClearance2Path,
            _parallelism1Path,
            _perpendicularity1Path,
            _parallelism2Path,
            _perpendicularity2Path;
        if (customerData.gibClearance1Path) {
            FileSystem.destroy(<string>customerData.gibClearance1Path);
            _gibClearance1Path = FileSystem.copyImageCustomer(
                <string>_customerData.gibClearance1Path,
                "customer"
            );
        }
        if (customerData.gibClearance2Path) {
            FileSystem.destroy(<string>customerData.gibClearance2Path);
            _gibClearance2Path = FileSystem.copyImageCustomer(
                <string>_customerData.gibClearance2Path,
                "customer"
            );
        }
        if (customerData.parallelism1Path) {
            FileSystem.destroy(<string>customerData.parallelism1Path);
            _parallelism1Path = FileSystem.copyImageCustomer(<string>_customerData.parallelism1Path, "customer");
        }
        if (customerData.parallelism2Path) {
            FileSystem.destroy(<string>customerData.parallelism2Path);
            _parallelism2Path = FileSystem.copyImageCustomer(<string>_customerData.parallelism2Path, "customer");
        }
        if (customerData.perpendicularity1Path) {
            FileSystem.destroy(<string>customerData.perpendicularity1Path);
            _perpendicularity1Path = FileSystem.copyImageCustomer(
                <string>_customerData.perpendicularity1Path,
                "customer"
            );
        }
        if (customerData.perpendicularity2Path) {
            FileSystem.destroy(<string>customerData.perpendicularity2Path);
            _perpendicularity2Path = FileSystem.copyImageCustomer(
                <string>_customerData.perpendicularity2Path,
                "customer"
            );
        }
        const customer = await this._customerRepo.update(
            id,
            Customer.create({
                customerId: customerData.customerId,
                customerName: customerData.customerName,
                address: customerData.address,
                phone: customerData.phone,
                gibClearance1Path: _gibClearance1Path || "image-default_gibClearance1Path.jpg",
                gibClearance2Path: _gibClearance2Path || "image-default_gibClearance2Path.jpg",
                parallelism1Path: _parallelism1Path || "image-default_parallelism1Path.jpg",
                parallelism2Path: _parallelism2Path || "image-default_parallelism2Path.jpg",
                perpendicularity1Path: _perpendicularity1Path || "image-default_perpendicularity1Path.jpg",
                perpendicularity2Path: _perpendicularity2Path || "image-default_perpendicularity2Path.jpg",
            })
        );
        return customer.unmarshal();
    }

    public async destroy(id: string): Promise<boolean> {
        const customerData = await this._customerRepo.findById(id);
        if (customerData.gibClearance1Path) FileSystem.destroy(<string>customerData.gibClearance1Path);
        if (customerData.gibClearance2Path) FileSystem.destroy(<string>customerData.gibClearance2Path);
        if (customerData.parallelism1Path) FileSystem.destroy(<string>customerData.parallelism1Path);
        if (customerData.parallelism2Path) FileSystem.destroy(<string>customerData.parallelism2Path);
        if (customerData.perpendicularity1Path) FileSystem.destroy(<string>customerData.perpendicularity1Path);
        if (customerData.perpendicularity2Path) FileSystem.destroy(<string>customerData.perpendicularity2Path);
        await this._customerRepo.delete(id);
        return true;
    }

    public async uploadSingle(file?: IMulterFile): Promise<string> {
        if (typeof file !== "object") {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Image required",
            });
        }
        const path = FileSystem.store(file, "tmp");
        return path;
    }
}
