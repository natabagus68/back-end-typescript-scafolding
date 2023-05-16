import { EGeneralDataLastStep } from "@/domain/models/general-data";
import { IResumeCheck, ResumeCheck } from "@/domain/models/resume-check";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { ResumeCheckRepository } from "@/domain/service/resume-check-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import fs from "fs";
import { basename } from "path";
import { createId } from "@paralleldrive/cuid2";

@injectable()
export class MobileResumeCheckService {
    constructor(
        @inject(TYPES.ResumeCheckRepository) private _resumeCheckRepo: ResumeCheckRepository,
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository
    ) {}
    async store(props: IResumeCheck): Promise<IResumeCheck> {
        const generalData = await this._generalDataRepo.findById(props.generalDataId);
        if (typeof props.photoPath === "object") {
            const uploadedFile = fs.writeFileSync(
                `${basename}/storage/mobile-resume/${createId()}${props.photoPath.name}`,
                props.photoPath
            );
        }
        const created = await this._resumeCheckRepo.store(ResumeCheck.create(props));
        generalData.lastStep = EGeneralDataLastStep.RESUME_CHECK;
        await this._generalDataRepo.update(generalData);
        return created.unmarshal();
    }
}
