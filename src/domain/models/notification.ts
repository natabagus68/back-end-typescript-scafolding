import { Entity } from "./entity";
import { EGeneralDataLastStep } from "./general-data";

export interface INotification {
    id?: string;
    type: EGeneralDataLastStep | string;
    inspectorId: string;
    generalDataId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class Notification extends Entity<INotification> {
    constructor(props: INotification) {
        const { id, ...data } = props;
        super(data, id);
    }
    public static create(props: INotification): Notification {
        return new Notification(props);
    }
    unmarshal(): INotification {
        return {
            id: this.id,
            type: this.type,
            inspectorId: this.inspectorId,
            generalDataId: this.generalDataId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get type(): EGeneralDataLastStep | string {
        return this.props.type;
    }
    get inspectorId(): string {
        return this.props.inspectorId;
    }
    get generalDataId(): string {
        return this.props.generalDataId;
    }
    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
