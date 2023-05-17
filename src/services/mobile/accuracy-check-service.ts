import { EGeneralDataLastStep } from "@/domain/models/general-data";
import { IAccuracyCheck, AccuracyCheck } from "@/domain/models/accuracy-check";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { AccuracyCheckRepository } from "@/domain/service/accuracy-check-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileAccuracyCheckService {
    constructor(
        @inject(TYPES.AccuracyCheckRepository) private _machineDataRepo: AccuracyCheckRepository,
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository
    ) {}
    public async store(param: IAccuracyCheck): Promise<IAccuracyCheck> {
        const generalData = await this._generalDataRepo.findById(param.generalDataId);
        const accuracyCheck = await this._machineDataRepo.store(AccuracyCheck.create(param));
        generalData.lastStep = EGeneralDataLastStep.ACCURACY_CHECK;
        await this._generalDataRepo.update(generalData);
        return accuracyCheck.unmarshal();
    }
}
