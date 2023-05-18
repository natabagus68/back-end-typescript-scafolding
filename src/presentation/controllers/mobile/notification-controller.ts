import { AuthRequest } from "@/presentation/utils/types/jwt-request";
import { MobileNotificationService } from "@/services/mobile/notification-service";
import { TYPES } from "@/types";
import { Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileNotificationController {
    constructor(@inject(TYPES.MobileNotificationService) private _notificationService: MobileNotificationService) {}
    public async get(req: AuthRequest, res: Response): Promise<Response> {
        const notifications = await this._notificationService.getByInspectorId(req.auth.user.id);
        return res.json({
            message: "success",
            data: notifications,
        });
    }
}
