import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileAuthController } from "@/presentation/controllers/mobile/auth-controller";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileAuthRoute {
    public route = "mobile/login";
    MobileAuthControllerInstance =
        container.get<MobileAuthController>(MobileAuthController);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            asyncWrap(
                this.MobileAuthControllerInstance.login.bind(
                    this.MobileAuthControllerInstance
                )
            )
        );
        router.get(
            "/mobile/me",
            asyncWrap(
                this.MobileAuthControllerInstance.me.bind(
                    this.MobileAuthControllerInstance
                )
            )
        );
    }
}
