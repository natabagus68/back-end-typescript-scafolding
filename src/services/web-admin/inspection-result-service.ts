import { IInspectionResult } from "@/domain/models/inspection-result";
import { InspectionResultRepository } from "@/domain/service/inspection-result-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class WebadminInspectionResultService {
    constructor(@inject(TYPES.InspectionResultRepository) private _inspectionResultRepo: InspectionResultRepository) {}
    public async findAll(): Promise<IInspectionResult[]> {
        const inspectionResults = await this._inspectionResultRepo.findAll();
        return inspectionResults.map((item) => item.unmarshal());
    }
}
