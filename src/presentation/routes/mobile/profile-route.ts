import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileProfileController } from "@/presentation/controllers/mobile/profile-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileProfileRoute {
    public route = "mobile/profile";
    MobileProfileControllerInstance = container.get<MobileProfileController>(MobileProfileController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileProfileControllerInstance.get.bind(this.MobileProfileControllerInstance))
        );
        router.put(
            `/${this.route}/change-password`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileProfileControllerInstance.changePassword.bind(this.MobileProfileControllerInstance))
        );
    }
}
