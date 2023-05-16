import { Entity } from "./entity";

export interface IMachineCheck {
    id?: string;
    generalDataId: string;
    idleAmp: number;
    runningAmp: number;
    runningDuration: number;
    runningTimes: number | null;
    clearanceTotal: number | null;
    clearancePoint: number | null;
    p?: number;
    actual?: number;
    determinationResult: string;
    slideUpAmp?: number;
    slideDownAmp?: number;
    prlsmBlstrSlide: string | "ok" | "ng";
    test1?: null | string;
    test2?: null | string;
    test3?: null | string;
    test4?: null | string;
    test5?: null | string;
    test6?: null | string;
    test7?: null | string;
    test8?: null | string;
    test9?: null | string;
    test10?: null | string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}

export class MachineCheck extends Entity<IMachineCheck> {
    constructor(props: IMachineCheck) {
        const { id, ...data } = props;
        super(data, id);
    }
    public static create(props: IMachineCheck): MachineCheck {
        return new MachineCheck(props);
    }

    public unmarshal(): IMachineCheck {
        return {
            id: this.id,
            generalDataId: this.generalDataId,
            idleAmp: this.idleAmp,
            runningAmp: this.runningAmp,
            runningDuration: this.runningDuration,
            runningTimes: this.runningTimes,
            clearanceTotal: this.clearanceTotal,
            clearancePoint: this.clearancePoint,
            p: this.p,
            actual: this.actual,
            determinationResult: this.determinationResult,
            slideUpAmp: this.slideUpAmp,
            slideDownAmp: this.slideDownAmp,
            prlsmBlstrSlide: this.prlsmBlstrSlide,
            test1: this.test1,
            test2: this.test2,
            test3: this.test3,
            test4: this.test4,
            test5: this.test5,
            test6: this.test6,
            test7: this.test7,
            test8: this.test8,
            test9: this.test9,
            test10: this.test10,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }

    get id(): string {
        return this._id;
    }
    get generalDataId(): string {
        return this.props.generalDataId;
    }
    get idleAmp(): number {
        return this.props.idleAmp;
    }
    get runningAmp(): number {
        return this.props.runningAmp;
    }
    get runningDuration(): number {
        return this.props.runningDuration;
    }
    get runningTimes(): number | null {
        return this.props.runningTimes;
    }
    get clearanceTotal(): number | null {
        return this.props.clearanceTotal;
    }
    get clearancePoint(): number | null {
        return this.props.clearancePoint;
    }
    get p(): undefined | number {
        return this.props.p;
    }
    get actual(): undefined | number {
        return this.props.actual;
    }
    get determinationResult(): string {
        return this.props.determinationResult;
    }
    get slideUpAmp(): undefined | number {
        return this.props.slideUpAmp;
    }
    get slideDownAmp(): undefined | number {
        return this.props.slideDownAmp;
    }
    get prlsmBlstrSlide(): string | "ok" | "ng" {
        return this.props.prlsmBlstrSlide;
    }
    get test1(): undefined | null | string {
        return this.props.test1;
    }
    get test2(): undefined | null | string {
        return this.props.test2;
    }
    get test3(): undefined | null | string {
        return this.props.test3;
    }
    get test4(): undefined | null | string {
        return this.props.test4;
    }
    get test5(): undefined | null | string {
        return this.props.test5;
    }
    get test6(): undefined | null | string {
        return this.props.test6;
    }
    get test7(): undefined | null | string {
        return this.props.test7;
    }
    get test8(): undefined | null | string {
        return this.props.test8;
    }
    get test9(): undefined | null | string {
        return this.props.test9;
    }
    get test10(): undefined | null | string {
        return this.props.test10;
    }
    get createdAt(): undefined | Date | null {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
