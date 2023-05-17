import { Entity } from "./entity";

export interface IInspectionDataItem {
    id?: string;
    name: string;
    determination: string;
    hasNote: boolean;
    notes?: string;
    backlash?: number;
    r?: number;
    s?: number;
    inspectionDataId?: number;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class InspectionDataItem extends Entity<IInspectionDataItem> {
    constructor(props: IInspectionDataItem) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IInspectionDataItem): InspectionDataItem {
        return new InspectionDataItem(props);
    }
    public unmarshal(): IInspectionDataItem {
        return {
            id: this.id,
            name: this.name,
            determination: this.determination,
            hasNote: this.hasNote,
            notes: this.notes,
            backlash: this.backlash,
            r: this.r,
            s: this.s,
            inspectionDataId: this.inspectionDataId,
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
    get determination(): string {
        return this.props.determination;
    }
    get hasNote(): boolean {
        return this.props.hasNote;
    }
    get notes(): undefined | string {
        return this.props.notes;
    }
    get backlash(): undefined | number {
        return this.props.backlash;
    }
    get r(): undefined | number {
        return this.props.r;
    }
    get s(): undefined | number {
        return this.props.s;
    }
    get inspectionDataId(): undefined | number {
        return this.props.inspectionDataId;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
