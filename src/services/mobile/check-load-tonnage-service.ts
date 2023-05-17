import { ICheckLoadTonnage, CheckLoadTonnage } from "@/domain/models/check-load-tonnage";
import { CheckLoadTonnageRepository } from "@/domain/service/check-load-tonnage-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileCheckLoadTonnageService {
    constructor(
        @inject(TYPES.CheckLoadTonnageRepository) private _checkLoadTonnageRepo: CheckLoadTonnageRepository,
    ) {}

    public async storeData(param: ICheckLoadTonnage[]): Promise<ICheckLoadTonnage[]> {
        const checkLoadTonnage = param.map((item) => CheckLoadTonnage.create(item));
        const created = await this._checkLoadTonnageRepo.store(checkLoadTonnage);
        return created.map((item) => item.unmarshal());
    }
}
