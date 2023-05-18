import { Notification } from "../models/notification";

export interface NotificationRepository{
    getByInspectorId(inspectorId:string):Promise<Notification[]>
    store(param:Notification):Promise<Notification>
}