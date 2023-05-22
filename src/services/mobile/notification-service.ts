import { INotification, Notification } from "@/domain/models/notification";
import { NotificationRepository } from "@/domain/service/notification-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileNotificationService {
    constructor(@inject(TYPES.NotificationRepository) private _notificationRepo: NotificationRepository) {}
    public async getByInspectorId(inspectorId: string, today = false): Promise<INotification[]> {
        const notifications = await this._notificationRepo.getByInspectorId(inspectorId, today);
        return notifications.map((item) => item.unmarshal());
    }
    public async store(param: INotification): Promise<INotification> {
        const notification = Notification.create(param);
        const created = await this._notificationRepo.store(notification);
        return created.unmarshal();
    }
}
