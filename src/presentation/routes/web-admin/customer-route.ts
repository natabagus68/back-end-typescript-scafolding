import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebAdminCustomerController } from "@/presentation/controllers/web-admin/customer-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";
import multer from "multer";

const tmpUploadedFiles = multer({
    dest: "tmp_uploaded_files/customer",
});

@injectable()
export class WebAdminCustomerRoute {
    public route = "admin/customer";
    WebAdminCustomerControllerInstance = container.get<WebAdminCustomerController>(WebAdminCustomerController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            tmpUploadedFiles.fields([
                { name: "parallelism1Path", maxCount: 1 },
                { name: "parallelism2Path", maxCount: 1 },
                { name: "gibClearance1Path", maxCount: 1 },
                { name: "gibClearance2Path", maxCount: 1 },
                { name: "perpendicularity1Path", maxCount: 1 },
                { name: "perpendicularity2Path", maxCount: 1 },
            ]),
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebAdminCustomerControllerInstance.store.bind(this.WebAdminCustomerControllerInstance))
        );
        router.put(
            `/${this.route}/:id`,
            tmpUploadedFiles.fields([
                { name: "parallelism1Path", maxCount: 1 },
                { name: "parallelism2Path", maxCount: 1 },
                { name: "gibClearance1Path", maxCount: 1 },
                { name: "gibClearance2Path", maxCount: 1 },
                { name: "perpendicularity1Path", maxCount: 1 },
                { name: "perpendicularity2Path", maxCount: 1 },
            ]),
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebAdminCustomerControllerInstance.store.bind(this.WebAdminCustomerControllerInstance))
        );
        router.get(
            `/${this.route}/:id`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebAdminCustomerControllerInstance.findById.bind(this.WebAdminCustomerControllerInstance))
        );
        router.get(
            `/${this.route}`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebAdminCustomerControllerInstance.findAll.bind(this.WebAdminCustomerControllerInstance))
        );
        router.delete(
            `/${this.route}/:id`,
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.WebAdminCustomerControllerInstance.delete.bind(this.WebAdminCustomerControllerInstance))
        );
    }
}
