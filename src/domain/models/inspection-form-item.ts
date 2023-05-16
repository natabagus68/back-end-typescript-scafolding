import { Entity } from "./entity";

export interface IInspectionFormItem {
    id?: string;
    name: string;
    information: string;
    hasNote: boolean;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class InspectionFormItem extends Entity<IInspectionFormItem> {
    constructor(props: IInspectionFormItem) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IInspectionFormItem): InspectionFormItem {
        return new InspectionFormItem(props);
    }
    public unmarshal(): IInspectionFormItem {
        return {
            id: this.id,
            name: this.name,
            information: this.information,
            hasNote: this.hasNote,
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
    get information(): string {
        return this.props.information;
    }
    get hasNote(): boolean {
        return this.props.hasNote;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
