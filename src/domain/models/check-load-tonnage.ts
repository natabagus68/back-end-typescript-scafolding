import { Entity } from "./entity";

export interface ICheckLoadTonnage {
    id?: string;
    name: string;
    lfActLoad: number;
    lfLoadMonitor: number;
    lrActLoad: number;
    lrLoadMonitor: number;
    rfActLoad: number;
    rfLoadMonitor: number;
    rrActLoad: number;
    rrLoadMonitor: number;
    totalActLoad: number;
    totalLoadMonitor: number;
    dieHeight: number;
    generalDataId: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}

export class CheckLoadTonnage extends Entity<ICheckLoadTonnage> {
    constructor(props: ICheckLoadTonnage) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: ICheckLoadTonnage): CheckLoadTonnage {
        return new CheckLoadTonnage(props);
    }

    unmarshal(): ICheckLoadTonnage {
        return {
            id: this.id,
            name: this.name,
            lfActLoad: this.lfActLoad,
            lfLoadMonitor: this.lfLoadMonitor,
            lrActLoad: this.lrActLoad,
            lrLoadMonitor: this.lrLoadMonitor,
            rfActLoad: this.rfActLoad,
            rfLoadMonitor: this.rfLoadMonitor,
            rrActLoad: this.rrActLoad,
            rrLoadMonitor: this.rrLoadMonitor,
            totalActLoad: this.totalActLoad,
            totalLoadMonitor: this.totalLoadMonitor,
            dieHeight: this.dieHeight,
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

    get lfActLoad(): number {
        return this.props.lfActLoad;
    }

    get lfLoadMonitor(): number {
        return this.props.lfLoadMonitor;
    }

    get lrActLoad(): number {
        return this.props.lrActLoad;
    }

    get lrLoadMonitor(): number {
        return this.props.lrLoadMonitor;
    }

    get rfActLoad(): number {
        return this.props.rfActLoad;
    }

    get rfLoadMonitor(): number {
        return this.props.rfLoadMonitor;
    }

    get rrActLoad(): number {
        return this.props.rrActLoad;
    }

    get rrLoadMonitor(): number {
        return this.props.rrLoadMonitor;
    }

    get totalActLoad(): number {
        return this.props.totalActLoad;
    }

    get totalLoadMonitor(): number {
        return this.props.totalLoadMonitor;
    }

    get dieHeight(): number {
        return this.props.dieHeight;
    }

    get generalDataId(): string {
        return this.props.generalDataId;
    }

    get createdAt(): undefined | Date | null {
        return this.props.createdAt;
    }

    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
