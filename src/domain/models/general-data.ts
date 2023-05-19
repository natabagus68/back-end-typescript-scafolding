import { AccuracyCheck, IAccuracyCheck } from "./accuracy-check";
import { Customer, ICustomer } from "./customer";
import { Entity } from "./entity";
import { IInspectionData, InspectionData } from "./inspection-data";
import { IMachineCheck, MachineCheck } from "./machine-check";
import { IResumeCheck, ResumeCheck } from "./resume-check";
import { IMachineData, MachineData } from "./machine-data";
import { IUser, User } from "./user";
import moment from "moment";
import { IInspectionResult, InspectionResult } from "./inspection-result";
import { CheckLoadTonnage, ICheckLoadTonnage } from "./check-load-tonnage";

export enum EGeneralDataLastStep {
    GENERAL_DATA = "GENERAL_DATA",
    MACHINE_DATA = "MACHINE_DATA",
    INSPECTION_FORM = "INSPECTION_FORM",
    MACHINE_CHECK = "MACHINE_CHECK",
    ACCURACY_CHECK = "ACCURACY_CHECK",
    CHECK_LOAD_TONNAGE = "CHECK_LOAD_TONNAGE",
    RESUME_CHECK = "RESUME_CHECK",
    REVIEW = "REVIEW",
    SUBMITTED = "SUBMITTED",
}

export interface IGeneralData {
    id?: string;
    customerId: string;
    personInCharge: string;
    inspectionId?: string;
    inspectionDate: Date;
    inspectorId: string;
    inspectorName?: string;
    lastStep: EGeneralDataLastStep | string;
    submittedAt?: Date | null;
    approvedAt?: Date | null;
    approvedBy?: string | null;
    customer?: ICustomer;
    inspectionDatum?: IInspectionData[];
    machineDatum?: IMachineData;
    machineCheck?: IMachineCheck;
    accuracyCheck?: IAccuracyCheck;
    resumeCheck?: IResumeCheck;
    inspector?: IUser;
    inspectionResultId?: string;
    inspectionResult?: IInspectionResult;
    loadTonnages?: ICheckLoadTonnage[];
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class GeneralData extends Entity<IGeneralData> {
    constructor(props: IGeneralData) {
        const { id, ...data } = props;
        super(data, id);
        this.props.inspectionId =
            (data.inspectionId && data.inspectionId !== "" && data.inspectionId) ||
            `IID${moment().format("YYYYMMDD")}${Math.round(Math.random() * 9999)}`;
    }
    static create(props: IGeneralData): GeneralData {
        return new GeneralData(props);
    }
    public unmarshal(): IGeneralData {
        return {
            id: this._id,
            customerId: this.customerId,
            inspectionId: this.inspectionId,
            personInCharge: this.personInCharge,
            inspectionDate: this.inspectionDate,
            inspectorId: this.inspectorId,
            inspectorName: this.inspectorId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
            lastStep: this.lastStep,
            submittedAt: this.submittedAt,
            approvedAt: this.approvedAt,
            approvedBy: this.approvedBy,
            customer: this.customer?.unmarshal(),
            inspectionDatum: this.inspectionDatum?.map((item) => item.unmarshal()),
            machineCheck: this.machineCheck?.unmarshal(),
            machineDatum: this.machineDatum?.unmarshall(),
            accuracyCheck: this.accuracyCheck?.unmarshal(),
            resumeCheck: this.resumeCheck?.unmarshal(),
            inspector: this.inspector?.unmarshal(),
            inspectionResultId: this.inspectionResultId,
            inspectionResult: this.inspectionResult?.unmarshal(),
            loadTonnages: this.loadTonnages?.map((item) => item?.unmarshal()),
        };
    }
    public approve(approvedBy: string): GeneralData {
        this.props.approvedAt = new Date();
        this.props.approvedBy = approvedBy;
        return this;
    }
    public submit(): GeneralData {
        this.props.submittedAt = new Date();
        return this;
    }
    get id(): string {
        return this._id;
    }
    get inspectionId(): string | undefined {
        return this.props.inspectionId;
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
    get inspectorName(): string | undefined {
        return this.props.inspectorName;
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
    set lastStep(val: EGeneralDataLastStep | string) {
        this.props.lastStep = val;
    }
    get submittedAt(): undefined | Date | null {
        return this.props.submittedAt;
    }
    set submittedAt(val: undefined | Date | null) {
        this.props.submittedAt = val;
    }
    set approvedAt(val: undefined | Date | null) {
        this.props.approvedAt = val;
    }
    get approvedAt(): undefined | Date | null {
        return this.props.approvedAt;
    }
    set approvedBy(val: undefined | string | null) {
        this.props.approvedBy = val;
    }
    get approvedBy(): undefined | string | null {
        return this.props.approvedBy;
    }
    get inspectionDatum(): undefined | InspectionData[] {
        return this.props.inspectionDatum ? this.props.inspectionDatum.map((item) => InspectionData.create(item)) : [];
    }
    get machineDatum(): undefined | MachineData {
        return this.props.machineDatum ? MachineData.create(this.props.machineDatum) : undefined;
    }
    get customer(): undefined | Customer {
        return this.props.customer ? Customer.create(this.props.customer) : undefined;
    }
    get machineCheck(): undefined | MachineCheck {
        return this.props.machineCheck ? MachineCheck.create(this.props.machineCheck) : undefined;
    }
    get accuracyCheck(): undefined | AccuracyCheck {
        return this.props.accuracyCheck ? AccuracyCheck.create(this.props.accuracyCheck) : undefined;
    }
    get resumeCheck(): undefined | ResumeCheck {
        return this.props.resumeCheck ? ResumeCheck.create(this.props.resumeCheck) : undefined;
    }
    get inspector(): undefined | User {
        return this.props.inspector ? User.create(this.props.inspector) : undefined;
    }
    get inspectionResultId(): undefined | string {
        return this.props.inspectionResultId;
    }
    set inspectionResultId(val: undefined | string) {
        this.props.inspectionResultId = val;
    }
    get inspectionResult(): undefined | InspectionResult {
        return this.props.inspectionResult ? InspectionResult.create(this.props.inspectionResult) : undefined;
    }
    get loadTonnages(): undefined | CheckLoadTonnage[] {
        return this.props.loadTonnages ? this.props.loadTonnages.map((item) => CheckLoadTonnage.create(item)) : [];
    }
}
