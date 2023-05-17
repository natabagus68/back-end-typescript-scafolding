import { IGeneralData } from "@/domain/models/general-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

interface queryParams {
    limit: number
    per_page: number
}

@injectable()
export class MobileApprovalService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async findAll(query: queryParams): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        return generalData.unmarshal();
    }

    public async get(generalDataId: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        return generalData.unmarshal();
    }

    public async confirm(generalDataId: string, approvedBy: string): Promise<void> {
        const generalData = await this._generalDataRepo.findById(generalDataId);
        generalData.approvedAt = new Date();
        generalData.approvedBy = approvedBy;
        await this._generalDataRepo.update(generalData);
    }
}
