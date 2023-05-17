import { EGeneralDataLastStep, IGeneralData } from "@/domain/models/general-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileReviewService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async get(generalDataId: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        generalData.lastStep = EGeneralDataLastStep.REVIEW;
        await this._generalDataRepo.update(generalData);
        return generalData.unmarshal();
    }
    public async submit(generalDataId: string): Promise<void> {
        const generalData = await this._generalDataRepo.findById(generalDataId);
        generalData.lastStep = EGeneralDataLastStep.SUBMITTED;
        generalData.submittedAt = new Date();
        await this._generalDataRepo.update(generalData);
    }
}
