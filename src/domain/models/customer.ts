import { Entity } from "./entity";

export interface ICustomer {
    id?: string;
    customerId?: string;
    customerName: string;
    address: string;
    phone: string;
    parallelism1Path: string;
    parallelism2Path: string;
    gibClearance1Path: string;
    gibClearance2Path: string;
    perpendicularity1Path: string;
    perpendicularity2Path: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
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
    get parallelism1Path(): string {
        return this.props.parallelism1Path;
    }
    get parallelism2Path(): string {
        return this.props.parallelism2Path;
    }
    get gibClearance1Path(): string {
        return this.props.gibClearance1Path;
    }
    get gibClearance2Path(): string {
        return this.props.gibClearance2Path;
    }
    get perpendicularity1Path(): string {
        return this.props.perpendicularity1Path;
    }
    get perpendicularity2Path(): string {
        return this.props.perpendicularity2Path;
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
