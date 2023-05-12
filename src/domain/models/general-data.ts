import { Entity } from "./entity";

export enum EGeneralDataLastStep {
    GENERAL_DATA,
    MACHINE_DATA,
    INSPECTION_FORM,
    MACHINE_CHECK,
    ACCURACY_CHECK,
    CHECK_LOAD_TONNAGE,
    RESUME_CHECK,
    REVIEW,
    SUBMITTED,
}

export interface IGeneralData {
    id?: string;
    customerId: string;
    personInCharge: string;
    inspectionDate: Date;
    inspectorId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    lastStep: EGeneralDataLastStep | string;
    submittedAt?: Date | null;
    approvedAt?: Date | null;
    approvedBy?: string | null;
}

export class GeneralData extends Entity<IGeneralData> {
    constructor(props: IGeneralData) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IGeneralData): GeneralData {
        return new GeneralData(props);
    }
    public unmarshal(): IGeneralData {
        return {
            id: this._id,
            customerId: this.customerId,
            personInCharge: this.personInCharge,
            inspectionDate: this.inspectionDate,
            inspectorId: this.inspectorId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
            lastStep: this.lastStep,
            submittedAt: this.submittedAt,
            approvedAt: this.approvedAt,
            approvedBy: this.approvedBy,
        };
    }
    get id(): string {
        return this._id;
    }
    get customerId(): string {
        return this.props.customerId;
    }
    get personInCharge(): string {
        return this.props.personInCharge;
    }
    get inspectionDate(): Date {
        return this.props.inspectionDate;
    }
    get inspectorId(): string {
        return this.props.inspectorId;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
    get deletedAt(): undefined | Date | null {
        return this.props.deletedAt;
    }
    get lastStep(): EGeneralDataLastStep | string {
        return this.props.lastStep;
    }
    get submittedAt(): undefined | Date | null {
        return this.props.submittedAt;
    }
    get approvedAt(): undefined | Date | null {
        return this.props.approvedAt;
    }
    get approvedBy(): undefined | string | null {
        return this.props.approvedBy;
    }
}
