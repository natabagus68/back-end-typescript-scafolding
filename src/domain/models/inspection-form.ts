import { Entity } from "./entity";
import { IInspectionFormItem, InspectionFormItem } from "./inspection-form-item";

export interface IInspectionForm {
    id?: string;
    name: string;
    order: number;
    items: IInspectionFormItem[];
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class InspectionForm extends Entity<IInspectionForm> {
    constructor(props: IInspectionForm) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IInspectionForm): InspectionForm {
        return new InspectionForm(props);
    }
    public unmarshal(): IInspectionForm {
        return {
            id: this.id,
            name: this.name,
            order: this.order,
            items: this.items.map(item => item.unmarshal()),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    get id(): undefined | string {
        return this.props.id;
    }
    get name(): string {
        return this.props.name;
    }
    get order(): number {
        return this.props.order;
    }
    get items(): InspectionFormItem[] {
        return this.props.items && this.props.items.length > 0
            ? this.props.items.map((item) => InspectionFormItem.create(item))
            : [];
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
