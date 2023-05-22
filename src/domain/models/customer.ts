import { Entity } from "./entity";
import { IMulterFile } from "@/presentation/validation/types";

export interface ICustomer {
    id?: string;
    customerId?: string;
    customerName: string;
    address: string;
    phone: string;
    parallelism1Path: string | IMulterFile;
    parallelism2Path: string | IMulterFile;
    gibClearance1Path: string | IMulterFile;
    gibClearance2Path: string | IMulterFile;
    perpendicularity1Path: string | IMulterFile;
    perpendicularity2Path: string | IMulterFile;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}
export interface IPathFile {
    path: string;
    mimeType: string;
}

export class Customer extends Entity<ICustomer> {
    constructor(props: ICustomer) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: ICustomer): Customer {
        return new Customer(props);
    }
    unmarshal(): ICustomer {
        return {
            id: this.id,
            customerId: this.customerId,
            customerName: this.customerName,
            address: this.address,
            phone: this.phone,
            parallelism1Path: this.parallelism1Path,
            parallelism2Path: this.parallelism2Path,
            gibClearance1Path: this.gibClearance1Path,
            gibClearance2Path: this.gibClearance2Path,
            perpendicularity1Path: this.perpendicularity1Path,
            perpendicularity2Path: this.perpendicularity2Path,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get customerId(): undefined | string {
        return this.props.customerId;
    }
    get customerName(): string {
        return this.props.customerName;
    }
    get address(): string {
        return this.props.address;
    }
    get phone(): string {
        return this.props.phone;
    }
    get parallelism1Path(): string | IMulterFile{
        return this.props.parallelism1Path;
    }
    set parallelism1Path(val: string | IMulterFile) {
        this.props.parallelism1Path = val;
    }
    get parallelism2Path(): string | IMulterFile{
        return this.props.parallelism2Path;
    }
    set parallelism2Path(val: string | IMulterFile) {
        this.props.parallelism2Path = val;
    }
    get gibClearance1Path(): string | IMulterFile{
        return this.props.gibClearance1Path;
    }
    set gibClearance1Path(val: string | IMulterFile) {
        this.props.gibClearance1Path = val;
    }
    get gibClearance2Path(): string | IMulterFile {
        return this.props.gibClearance2Path;
    }
    set gibClearance2Path(val: string | IMulterFile) {
        this.props.gibClearance2Path = val;
    }
    get perpendicularity1Path(): string | IMulterFile{
        return this.props.perpendicularity1Path;
    }
    set perpendicularity1Path(val: string | IMulterFile) {
        this.props.perpendicularity1Path = val;
    }
    get perpendicularity2Path(): string |IMulterFile {
        return this.props.perpendicularity2Path;
    }
    set perpendicularity2Path(val: string | IMulterFile) {
        this.props.perpendicularity2Path = val;
    }
    get createdAt(): undefined | Date | null {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
    get deletedAt(): undefined | Date | null {
        return this.props.deletedAt;
    }
}
