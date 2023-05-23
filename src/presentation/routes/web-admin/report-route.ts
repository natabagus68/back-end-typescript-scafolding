import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebadminReportController } from "@/presentation/controllers/web-admin/report-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class WebadminReportRoute {
    public route = "web-admin/report";
    WebadminReportControllerInstance = container.get<WebadminReportController>(WebadminReportController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminReportControllerInstance.dataTable.bind(this.WebadminReportControllerInstance))
        );
        router.get(
            `/${this.route}/:generalDataId/download`,
            // this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminReportControllerInstance.download.bind(this.WebadminReportControllerInstance))
        );
    }
}
