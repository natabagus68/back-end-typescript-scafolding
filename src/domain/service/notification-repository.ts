import { Notification } from "../models/notification";

export interface NotificationRepository{
    getByInspectorId(inspectorId:string, today:boolean):Promise<Notification[]>
    store(param:Notification):Promise<Notification>
}