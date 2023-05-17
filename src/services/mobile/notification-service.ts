// import { INotification } from "@/domain/models/notification";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileNotificationService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    // public async getByInspectorId(inspectorId: string): Promise<INotification[]> {
    //     const notifications = await this._generalDataRepo.getByInspectorId(inspectorId);
    //     return notifications.map((item) => item.unmarshal());
    // }
}
