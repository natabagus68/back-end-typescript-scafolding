import { Entity } from "./entity";

export interface INotification {
    id?: string;
    title: string;
    createdAt: string;
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
            title: this.title,
            createdAt: this.createdAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get title(): string {
        return this.props.title;
    }
    get createdAt(): string {
        return this.props.createdAt;
    }
}
