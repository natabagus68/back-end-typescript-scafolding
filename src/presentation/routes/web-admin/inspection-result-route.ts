import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebadminInspectionResultController } from "@/presentation/controllers/web-admin/inspection-result-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class WebadminInspectionResultRoute {
    public route = "web-admin/inspection-result";
    WebadminInspectionResultControllerInstance = container.get<WebadminInspectionResultController>(WebadminInspectionResultController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminInspectionResultControllerInstance.findAll.bind(this.WebadminInspectionResultControllerInstance))
        );
    }
}
