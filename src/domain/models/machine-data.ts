import { Entity } from "./entity";

export interface IMachineData {
    id?: string;
    machineType: string;
    serialNo: string;
    manufactureDate: Date;
    capacity: number;
    slideStroke: number;
    strokePerMinute: string;
    dieHeight: number;
    slideAdjustment: number;
    areaBlosterDimentionX: number;
    areaBlosterDimentionY: number;
    areaSlideDimentionX: number;
    areaSlideDimentionY: number;
    crankPressC: boolean;
    crankPressH: boolean;
    cranklessPress: boolean;
    knucklePress: boolean;
    linkPress: boolean;
    combinationType: boolean;
    separateType: boolean;
    dryFriction: boolean;
    wetFriction: boolean;
    other: boolean;
    intermittent: boolean;
    continues: boolean;
    safetyGuard: boolean;
    safetyLight: boolean;
    doubleSolenoidValve: boolean;
    generalDataId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class MachineData extends Entity<IMachineData> {
    constructor(props: IMachineData) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IMachineData): MachineData {
        return new MachineData(props);
    }
    unmarshall(): IMachineData {
        return {
            id: this.id,
            machineType: this.machineType,
            serialNo: this.serialNo,
            manufactureDate: this.manufactureDate,
            capacity: this.capacity,
            slideStroke: this.slideStroke,
            strokePerMinute: this.strokePerMinute,
            dieHeight: this.dieHeight,
            slideAdjustment: this.slideAdjustment,
            areaBlosterDimentionX: this.areaBlosterDimentionX,
            areaBlosterDimentionY: this.areaBlosterDimentionY,
            areaSlideDimentionX: this.areaSlideDimentionX,
            areaSlideDimentionY: this.areaSlideDimentionY,
            crankPressC: this.crankPressC,
            crankPressH: this.crankPressH,
            cranklessPress: this.cranklessPress,
            knucklePress: this.knucklePress,
            linkPress: this.linkPress,
            combinationType: this.combinationType,
            separateType: this.separateType,
            dryFriction: this.dryFriction,
            wetFriction: this.wetFriction,
            other: this.other,
            intermittent: this.intermittent,
            continues: this.continues,
            safetyGuard: this.safetyGuard,
            safetyLight: this.safetyLight,
            doubleSolenoidValve: this.doubleSolenoidValve,
            generalDataId: this.generalDataId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
    get id(): string {
        return this._id;
    }
    get machineType(): string {
        return this.props.machineType;
    }
    get serialNo(): string {
        return this.props.serialNo;
    }
    get manufactureDate(): Date {
        return this.props.manufactureDate;
    }
    get capacity(): number {
        return this.props.capacity;
    }
    get slideStroke(): number {
        return this.props.slideStroke;
    }
    get strokePerMinute(): string {
        return this.props.strokePerMinute;
    }
    get dieHeight(): number {
        return this.props.dieHeight;
    }
    get slideAdjustment(): number {
        return this.props.slideAdjustment;
    }
    get areaBlosterDimentionX(): number {
        return this.props.areaBlosterDimentionX;
    }
    get areaBlosterDimentionY(): number {
        return this.props.areaBlosterDimentionY;
    }
    get areaSlideDimentionX(): number {
        return this.props.areaSlideDimentionX;
    }
    get areaSlideDimentionY(): number {
        return this.props.areaSlideDimentionY;
    }
    get crankPressC(): boolean {
        return this.props.crankPressC;
    }
    get crankPressH(): boolean {
        return this.props.crankPressH;
    }
    get cranklessPress(): boolean {
        return this.props.cranklessPress;
    }
    get knucklePress(): boolean {
        return this.props.knucklePress;
    }
    get linkPress(): boolean {
        return this.props.linkPress;
    }
    get combinationType(): boolean {
        return this.props.combinationType;
    }
    get separateType(): boolean {
        return this.props.separateType;
    }
    get dryFriction(): boolean {
        return this.props.dryFriction;
    }
    get wetFriction(): boolean {
        return this.props.wetFriction;
    }
    get other(): boolean {
        return this.props.other;
    }
    get intermittent(): boolean {
        return this.props.intermittent;
    }
    get continues(): boolean {
        return this.props.continues;
    }
    get safetyGuard(): boolean {
        return this.props.safetyGuard;
    }
    get safetyLight(): boolean {
        return this.props.safetyLight;
    }
    get doubleSolenoidValve(): boolean {
        return this.props.doubleSolenoidValve;
    }
    get generalDataId(): string {
        return this.props.generalDataId;
    }
    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date {
        return this.props.updatedAt;
    }
}
