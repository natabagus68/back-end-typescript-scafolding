import { EGeneralDataLastStep, IGeneralData } from "@/domain/models/general-data";
import { Notification } from "@/domain/models/notification";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { NotificationRepository } from "@/domain/service/notification-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileReviewService {
    constructor(
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository,
        @inject(TYPES.NotificationRepository) private _notificationRepo: NotificationRepository
    ) {}
    public async get(generalDataId: string): Promise<IGeneralData> {
        const generalData = await this._generalDataRepo.findById(generalDataId, true);
        generalData.lastStep = EGeneralDataLastStep.REVIEW;
        await this._generalDataRepo.update(generalData);
        return generalData.unmarshal();
    }
    public async submit(generalDataId: string): Promise<void> {
        const generalData = await this._generalDataRepo.findById(generalDataId);
        generalData.inspectionDate = new Date();
        generalData.lastStep = EGeneralDataLastStep.SUBMITTED;
        generalData.submittedAt = new Date();
        this._notificationRepo.store(
            Notification.create({
                type: EGeneralDataLastStep.SUBMITTED,
                inspectorId: generalData.inspectorId,
                generalDataId: generalData.id,
            })
        );
        await this._generalDataRepo.update(generalData);
    }
}
