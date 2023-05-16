import { File } from "buffer";
import { Entity } from "./entity";
import { IMulterFile } from "@/presentation/validation/types";

export interface IResumeCheck {
    id?: string;
    checkDate: Date;
    photoPath: string | IMulterFile;
    notes: string;
    recommendation: string;
    generalDataId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
}

export class ResumeCheck extends Entity<IResumeCheck> {
    constructor(props: IResumeCheck) {
        const { id, ...data } = props;
        super(data, id);
    }
    public static create(props: IResumeCheck): ResumeCheck {
        return new ResumeCheck(props);
    }

    public unmarshal(): IResumeCheck {
        return {
            id: this.id,
            checkDate: this.checkDate,
            photoPath: this.photoPath,
            notes: this.notes,
            recommendation: this.recommendation,
            generalDataId: this.generalDataId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    get id(): string {
        return this._id;
    }
    get checkDate(): Date {
        return this.props.checkDate;
    }
    get photoPath(): string | File {
        return this.props.photoPath;
    }
    get notes(): string {
        return this.props.notes;
    }
    get recommendation(): string {
        return this.props.recommendation;
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
