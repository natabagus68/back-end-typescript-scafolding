import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileMachineDataController } from "@/presentation/controllers/mobile/machine-data-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileMachineDataRoute {
    public route = "mobile/machine-data";
    MachineDataControllerInstance = container.get<MobileMachineDataController>(MobileMachineDataController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MachineDataControllerInstance.store.bind(this.MachineDataControllerInstance))
        );
    }
}
