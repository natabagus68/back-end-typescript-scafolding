import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileAccuracyCheckController } from "@/presentation/controllers/mobile/accuracy-check-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileAccuracyCheckRoute {
    public route = "mobile/accuracy-check";
    AccuracyCheckControllerInstance = container.get<MobileAccuracyCheckController>(MobileAccuracyCheckController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.AccuracyCheckControllerInstance.store.bind(this.AccuracyCheckControllerInstance))
        );
    }
}
