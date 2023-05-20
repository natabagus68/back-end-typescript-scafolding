import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebadminAuthController } from "@/presentation/controllers/web-admin/auth-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class WebadminAuthRoute {
    public route = "web-admin/auth";
    WebadminAuthControllerInstance = container.get<WebadminAuthController>(WebadminAuthController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}/me`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebadminAuthControllerInstance.me.bind(this.WebadminAuthControllerInstance))
        );
        router.post(
            `/${this.route}/login`,
            asyncWrap(this.WebadminAuthControllerInstance.login.bind(this.WebadminAuthControllerInstance))
        );
    }
}
