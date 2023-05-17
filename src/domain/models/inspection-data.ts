import { Entity } from "./entity";
import { IInspectionDataItem, InspectionDataItem } from "./inspection-data-item";

export interface IInspectionData {
    id?: string;
    name: string;
    order: number;
    generalDataId: string;
    items: IInspectionDataItem[];
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class InspectionData extends Entity<IInspectionData> {
    constructor(props: IInspectionData) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IInspectionData): InspectionData {
        return new InspectionData(props);
    }
    public unmarshal(): IInspectionData {
        return {
            id: this.id,
            name: this.name,
            order: this.order,
            items: this.items.map(item => item.unmarshal()),
            generalDataId: this.generalDataId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get name(): string {
        return this.props.name;
    }
    get order(): number {
        return this.props.order;
    }
    get items(): InspectionDataItem[] {
        return this.props.items && this.props.items.length > 0
            ? this.props.items.map((item) => InspectionDataItem.create(item))
            : [];
    }
    get generalDataId(): string {
        return this.props.generalDataId;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
