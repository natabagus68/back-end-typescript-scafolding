import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileHistoryReportController } from "@/presentation/controllers/mobile/history-report-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileHistoryReportRoute {
    public route = "mobile/history-document";
    MobileHistoryReportControllerInstance = container.get<MobileHistoryReportController>(MobileHistoryReportController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}/:generalDataId`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileHistoryReportControllerInstance.get.bind(this.MobileHistoryReportControllerInstance))
        );
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileHistoryReportControllerInstance.getHistoryList.bind(this.MobileHistoryReportControllerInstance))
        );
    }
}
