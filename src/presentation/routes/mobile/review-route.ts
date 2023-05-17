import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileReviewController } from "@/presentation/controllers/mobile/review-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileReviewRoute {
    public route = "mobile/review";
    MobileReviewControllerInstance = container.get<MobileReviewController>(MobileReviewController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}/:generalDataId`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileReviewControllerInstance.get.bind(this.MobileReviewControllerInstance))
        );
        router.put(
            `/${this.route}/:generalDataId/submit`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileReviewControllerInstance.submit.bind(this.MobileReviewControllerInstance))
        );
    }
}
