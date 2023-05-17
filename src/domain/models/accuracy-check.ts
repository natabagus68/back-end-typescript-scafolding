import { Entity } from "./entity";

export interface IAccuracyCheck {
    id?: string;
    generalDataId: string;
    unit: number;
    balancerAirPsr: number;
    prlAdj_0A: number;
    prlAdj_0B: number;
    prlAdj_0C: number;
    prlAdj_0D: number;
    prlAdj_180A: number;
    prlAdj_180B: number;
    prlAdj_180C: number;
    prlAdj_180D: number;
    prlActVlv: number;
    prlAllowance: number;
    prlJudgement: string;
    gibAdj_0A: number;
    gibAdj_0B: number;
    gibAdj_0C: number;
    gibAdj_0D: number;
    gibAdj_180A: number;
    gibAdj_180B: number;
    gibAdj_180C: number;
    gibAdj_180D: number;
    gibActVlv: number;
    gibAllowance: number;
    gibJudgement: string;
    ppdcltSlideStroke: number;
    ppdcltAdjLrA: number;
    ppdcltAdjLrB: number;
    ppdcltAdjLrC: number;
    ppdcltAdjLrD: number;
    ppdcltAdjFrA: number;
    ppdcltAdjFrB: number;
    ppdcltAdjFrC: number;
    ppdcltAdjFrD: number;
    ppdcltLrActValue: number;
    ppdcltLrAllowance: number;
    ppdcltLrJudgement: string;
    ppdcltFrActValue: number;
    ppdcltFrAllowance: number;
    ppdcltFrJudgement: string;
    ttlClrActValue: number;
    ttlClrActValve: number;
    ttlClrAllowance: number;
    ttlClrJudgement: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
}

export class AccuracyCheck extends Entity<IAccuracyCheck> {
    constructor(props: IAccuracyCheck) {
        const { id, ...data } = props;
        super(data, id);
    }
    static create(props: IAccuracyCheck): AccuracyCheck {
        return new AccuracyCheck(props);
    }

    unmarshal(): IAccuracyCheck {
        return {
            id: this.id,
            generalDataId: this.generalDataId,
            unit: this.unit,
            balancerAirPsr: this.balancerAirPsr,
            prlAdj_0A: this.prlAdj_0A,
            prlAdj_0B: this.prlAdj_0B,
            prlAdj_0C: this.prlAdj_0C,
            prlAdj_0D: this.prlAdj_0D,
            prlAdj_180A: this.prlAdj_180A,
            prlAdj_180B: this.prlAdj_180B,
            prlAdj_180C: this.prlAdj_180C,
            prlAdj_180D: this.prlAdj_180D,
            prlActVlv: this.prlActVlv,
            prlAllowance: this.prlAllowance,
            prlJudgement: this.prlJudgement,
            gibAdj_0A: this.gibAdj_0A,
            gibAdj_0B: this.gibAdj_0B,
            gibAdj_0C: this.gibAdj_0C,
            gibAdj_0D: this.gibAdj_0D,
            gibAdj_180A: this.gibAdj_180A,
            gibAdj_180B: this.gibAdj_180B,
            gibAdj_180C: this.gibAdj_180C,
            gibAdj_180D: this.gibAdj_180D,
            gibActVlv: this.gibActVlv,
            gibAllowance: this.gibAllowance,
            gibJudgement: this.gibJudgement,
            ppdcltSlideStroke: this.ppdcltSlideStroke,
            ppdcltAdjLrA: this.ppdcltAdjLrA,
            ppdcltAdjLrB: this.ppdcltAdjLrB,
            ppdcltAdjLrC: this.ppdcltAdjLrC,
            ppdcltAdjLrD: this.ppdcltAdjLrD,
            ppdcltAdjFrA: this.ppdcltAdjFrA,
            ppdcltAdjFrB: this.ppdcltAdjFrB,
            ppdcltAdjFrC: this.ppdcltAdjFrC,
            ppdcltAdjFrD: this.ppdcltAdjFrD,
            ppdcltLrActValue: this.ppdcltLrActValue,
            ppdcltLrAllowance: this.ppdcltLrAllowance,
            ppdcltLrJudgement: this.ppdcltLrJudgement,
            ppdcltFrActValue: this.ppdcltFrActValue,
            ppdcltFrAllowance: this.ppdcltFrAllowance,
            ppdcltFrJudgement: this.ppdcltFrJudgement,
            ttlClrActValue: this.ttlClrActValue,
            ttlClrActValve: this.ttlClrActValve,
            ttlClrAllowance: this.ttlClrAllowance,
            ttlClrJudgement: this.ttlClrJudgement,
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

    get unit(): number {
        return this.props.unit;
    }

    get balancerAirPsr(): number {
        return this.props.balancerAirPsr;
    }

    get prlAdj_0A(): number {
        return this.props.prlAdj_0A;
    }

    get prlAdj_0B(): number {
        return this.props.prlAdj_0B;
    }

    get prlAdj_0C(): number {
        return this.props.prlAdj_0C;
    }

    get prlAdj_0D(): number {
        return this.props.prlAdj_0D;
    }

    get prlAdj_180A(): number {
        return this.props.prlAdj_180A;
    }

    get prlAdj_180B(): number {
        return this.props.prlAdj_180B;
    }

    get prlAdj_180C(): number {
        return this.props.prlAdj_180C;
    }

    get prlAdj_180D(): number {
        return this.props.prlAdj_180D;
    }

    get prlActVlv(): number {
        return this.props.prlActVlv;
    }

    get prlAllowance(): number {
        return this.props.prlAllowance;
    }

    get prlJudgement(): string {
        return this.props.prlJudgement;
    }

    get gibAdj_0A(): number {
        return this.props.gibAdj_0A;
    }

    get gibAdj_0B(): number {
        return this.props.gibAdj_0B;
    }

    get gibAdj_0C(): number {
        return this.props.gibAdj_0C;
    }

    get gibAdj_0D(): number {
        return this.props.gibAdj_0D;
    }

    get gibAdj_180A(): number {
        return this.props.gibAdj_180A;
    }

    get gibAdj_180B(): number {
        return this.props.gibAdj_180B;
    }

    get gibAdj_180C(): number {
        return this.props.gibAdj_180C;
    }

    get gibAdj_180D(): number {
        return this.props.gibAdj_180D;
    }

    get gibActVlv(): number {
        return this.props.gibActVlv;
    }

    get gibAllowance(): number {
        return this.props.gibAllowance;
    }

    get gibJudgement(): string {
        return this.props.gibJudgement;
    }

    get ppdcltSlideStroke(): number {
        return this.props.ppdcltSlideStroke;
    }

    get ppdcltAdjLrA(): number {
        return this.props.ppdcltAdjLrA;
    }

    get ppdcltAdjLrB(): number {
        return this.props.ppdcltAdjLrB;
    }

    get ppdcltAdjLrC(): number {
        return this.props.ppdcltAdjLrC;
    }

    get ppdcltAdjLrD(): number {
        return this.props.ppdcltAdjLrD;
    }

    get ppdcltAdjFrA(): number {
        return this.props.ppdcltAdjFrA;
    }

    get ppdcltAdjFrB(): number {
        return this.props.ppdcltAdjFrB;
    }

    get ppdcltAdjFrC(): number {
        return this.props.ppdcltAdjFrC;
    }

    get ppdcltAdjFrD(): number {
        return this.props.ppdcltAdjFrD;
    }

    get ppdcltLrActValue(): number {
        return this.props.ppdcltLrActValue;
    }

    get ppdcltLrAllowance(): number {
        return this.props.ppdcltLrAllowance;
    }

    get ppdcltLrJudgement(): string {
        return this.props.ppdcltLrJudgement;
    }

    get ppdcltFrActValue(): number {
        return this.props.ppdcltFrActValue;
    }

    get ppdcltFrAllowance(): number {
        return this.props.ppdcltFrAllowance;
    }

    get ppdcltFrJudgement(): string {
        return this.props.ppdcltFrJudgement;
    }

    get ttlClrActValue(): number {
        return this.props.ttlClrActValue;
    }

    get ttlClrActValve(): number {
        return this.props.ttlClrActValve;
    }

    get ttlClrAllowance(): number {
        return this.props.ttlClrAllowance;
    }

    get ttlClrJudgement(): string {
        return this.props.ttlClrJudgement;
    }

    get createdAt(): undefined | Date | null {
        return this.props.createdAt;
    }

    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
}
