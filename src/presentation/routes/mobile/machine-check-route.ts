import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileMachineCheckController } from "@/presentation/controllers/mobile/machine-check-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileMachineCheckRoute {
    public route = "mobile/machine-check";
    MobileMachineCheckControllerInstance = container.get<MobileMachineCheckController>(MobileMachineCheckController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileMachineCheckControllerInstance.store.bind(this.MobileMachineCheckControllerInstance))
        );
    }
}
