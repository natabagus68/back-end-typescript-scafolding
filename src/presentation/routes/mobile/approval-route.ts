import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileApprovalController } from "@/presentation/controllers/mobile/approval-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileApprovalRoute {
    public route = "mobile/approval";
    MobileApprovalControllerInstance = container.get<MobileApprovalController>(MobileApprovalController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}/:generalDataId`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileApprovalControllerInstance.get.bind(this.MobileApprovalControllerInstance))
        );
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileApprovalControllerInstance.get.bind(this.MobileApprovalControllerInstance))
        );
        router.put(
            `/${this.route}/:generalDataId/confirm`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileApprovalControllerInstance.confirm.bind(this.MobileApprovalControllerInstance))
        );
    }
}
