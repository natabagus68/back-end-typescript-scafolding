import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileGeneralDataController } from "@/presentation/controllers/mobile/general-data-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileGeneralDataRoute {
    public route = "mobile/general-data";
    GeneralDataControllerInstance = container.get<MobileGeneralDataController>(
        MobileGeneralDataController
    );
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDataControllerInstance.create.bind(
                    this.GeneralDataControllerInstance
                )
            )
        );
    }
}
