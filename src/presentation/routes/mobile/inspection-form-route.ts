import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileInspectionFormController } from "@/presentation/controllers/mobile/inspection-form-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class MobileInspectionFormRoute {
    public route = "mobile/inspection-form";
    InspectionFormControllerInstance = container.get<MobileInspectionFormController>(MobileInspectionFormController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.InspectionFormControllerInstance.getForm.bind(this.InspectionFormControllerInstance))
        );
        router.post(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.InspectionFormControllerInstance.storeData.bind(this.InspectionFormControllerInstance))
        );
    }
}
