import { IInspectionData, InspectionData } from "@/domain/models/inspection-data";
import { IInspectionForm } from "@/domain/models/inspection-form";
import { InspectionDataRepository } from "@/domain/service/inspection-data-repository";
import { InspectionFormRepository } from "@/domain/service/inspection-form-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileInspectionFormService {
    constructor(
        @inject(TYPES.InspectionFormRepository) private _inspectionFormRepo: InspectionFormRepository,
        @inject(TYPES.InspectionDataRepository) private _inspectionDataRepo: InspectionDataRepository
    ) {}

    public async getForm(): Promise<IInspectionForm[]> {
        const inspectionForms = await this._inspectionFormRepo.getForm();
        return inspectionForms.map((item) => item.unmarshal());
    }

    public async storeData(param: IInspectionData[]): Promise<IInspectionData[]> {
        const inspectionData = param.map((item) => InspectionData.create(item));
        const created = await this._inspectionDataRepo.store(inspectionData);
        return created.map((item) => item.unmarshal());
    }
}
