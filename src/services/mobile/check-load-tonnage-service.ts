import { ICheckLoadTonnage, CheckLoadTonnage } from "@/domain/models/check-load-tonnage";
import { CheckLoadTonnageRepository } from "@/domain/service/check-load-tonnage-repository";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import { EGeneralDataLastStep } from "@/domain/models/general-data";

@injectable()
export class MobileCheckLoadTonnageService {
    constructor(
        @inject(TYPES.CheckLoadTonnageRepository) private _checkLoadTonnageRepo: CheckLoadTonnageRepository,
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository
    ) {}

    public async storeData(param: ICheckLoadTonnage[]): Promise<ICheckLoadTonnage[]> {
        const generalData = await this._generalDataRepo.findById(param[0].generalDataId);
        const checkLoadTonnage = param.map((item) => CheckLoadTonnage.create(item));
        const created = await this._checkLoadTonnageRepo.store(checkLoadTonnage);
        generalData.lastStep = EGeneralDataLastStep.CHECK_LOAD_TONNAGE;
        return created.map((item) => item.unmarshal());
    }
}
