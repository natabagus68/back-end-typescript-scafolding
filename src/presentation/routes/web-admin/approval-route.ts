import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebadminApprovalController } from "@/presentation/controllers/web-admin/approval-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class WebadminApprovalRoute {
    public route = "web-admin/approval";
    WebadminApprovalControllerInstance = container.get<WebadminApprovalController>(WebadminApprovalController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(
                this.WebadminApprovalControllerInstance.getDataTable.bind(this.WebadminApprovalControllerInstance)
            )
        );
        router.get(
            `/${this.route}/:generalDataId`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminApprovalControllerInstance.review.bind(this.WebadminApprovalControllerInstance))
        );
        router.put(
            `/${this.route}/:generalDataId/approve`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminApprovalControllerInstance.approve.bind(this.WebadminApprovalControllerInstance))
        );
        router.put(
            `/${this.route}/:generalDataId/update-result`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(
                this.WebadminApprovalControllerInstance.updateResult.bind(this.WebadminApprovalControllerInstance)
            )
        );
    }
}
