import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileCustomerController } from "@/presentation/controllers/mobile/customer-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileCustomerRoute {
    public route = "/mobile/customer";
    CustomerControllerInstance = container.get<MobileCustomerController>(
        MobileCustomerController
    );
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `${this.route}/options`,
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.CustomerControllerInstance.getOptions.bind(
                    this.CustomerControllerInstance
                )
            )
        );
    }
}
