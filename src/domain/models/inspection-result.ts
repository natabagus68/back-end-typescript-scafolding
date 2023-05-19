import { Entity } from "./entity";

export interface IInspectionResult {
    id?: string;
    option: string;
    color: string;
    description: string;
    createdAt?: Date;
    updatedAt: Date | null;
}

export class InspectionResult extends Entity<IInspectionResult> {
    constructor(props: IInspectionResult) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IInspectionResult): InspectionResult {
        return new InspectionResult(props);
    }
    public unmarshal(): IInspectionResult {
        return {
            id: this.id,
            option: this.option,
            color: this.color,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get option(): string {
        return this.props.option;
    }
    get color(): string {
        return this.props.color;
    }
    get description(): string {
        return this.props.description;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): Date | null {
        return this.props.updatedAt;
    }
}
