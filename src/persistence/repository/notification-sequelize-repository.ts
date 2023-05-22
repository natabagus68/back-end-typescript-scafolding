import { Notification } from "@/domain/models/notification";
import { NotificationRepository } from "@/domain/service/notification-repository";
import { injectable } from "inversify";
import { Notification as NotificationDB } from "@/infrastructure/database/models/notification-sequelize";
import { Op } from "sequelize";
import moment from "moment";

@injectable()
export class NotificationSequelizeRepository implements NotificationRepository {
    async getByInspectorId(inspectorId: string, today = false): Promise<Notification[]> {
        const notifications = await NotificationDB.findAll({
            where: {
                inspector_id: inspectorId,
                created_at: {
                    ...(today
                        ? { [Op.between]: [moment().startOf("day").toDate(), moment().endOf("day").toDate()] }
                        : { [Op.lt]: moment().startOf("day").toDate() }),
                },
            },
        });
        return notifications.map((item) =>
            Notification.create({
                id: item.getDataValue("id"),
                type: item.getDataValue("type"),
                inspectorId: item.getDataValue("inspector_id"),
                generalDataId: item.getDataValue("general_data_id"),
                createdAt: item.getDataValue("created_at"),
                updatedAt: item.getDataValue("updated_at"),
            })
        );
    }
    async store(param: Notification): Promise<Notification> {
        const created = await NotificationDB.create({
            id: param.id,
            type: param.type,
            inspector_id: param.inspectorId,
            general_data_id: param.generalDataId,
        });
        return Notification.create({
            id: created.getDataValue("id"),
            type: created.getDataValue("type"),
            inspectorId: created.getDataValue("inspector_id"),
            generalDataId: created.getDataValue("general_data_id"),
            createdAt: created.getDataValue("created_at"),
            updatedAt: created.getDataValue("updated_at"),
        });
    }
}
