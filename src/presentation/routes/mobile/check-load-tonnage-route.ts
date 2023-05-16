import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileCheckLoadTonnageController } from "@/presentation/controllers/mobile/check-load-tonnage-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileCheckLoadTonnageRoute {
    public route = "mobile/check-load-tonnage";
    CheckLoadTonnageControllerInstance = container.get<MobileCheckLoadTonnageController>(MobileCheckLoadTonnageController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.CheckLoadTonnageControllerInstance.storeData.bind(this.CheckLoadTonnageControllerInstance))
        );
    }
}
