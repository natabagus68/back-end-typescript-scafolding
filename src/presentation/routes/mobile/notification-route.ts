import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileNotificationController } from "@/presentation/controllers/mobile/notification-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileNotificationRoute {
    public route = "mobile/notification";
    MobileNotificationControllerInstance = container.get<MobileNotificationController>(MobileNotificationController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileNotificationControllerInstance.get.bind(this.MobileNotificationControllerInstance))
        );
    }
}
