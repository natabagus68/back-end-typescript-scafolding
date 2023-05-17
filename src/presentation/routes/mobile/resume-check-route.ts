import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { MobileResumeCheckController } from "@/presentation/controllers/mobile/resume-check-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";
import multer from "multer";

const tmpUploadedFiles = multer({
    dest: "tmp_uploaded_files/",
});

@injectable()
export class MobileResumeCheckRoute {
    public route = "mobile/resume-check";
    MobileResumeCheckControllerInstance = container.get<MobileResumeCheckController>(MobileResumeCheckController);
    MobileAuthMiddlewareInstance = container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public setRoutes(router: Router) {
        router.post(
            `/${this.route}`,
            tmpUploadedFiles.single("photoPath"),
            this.MobileAuthMiddlewareInstance.handle.bind(this.MobileAuthMiddlewareInstance),
            asyncWrap(this.MobileResumeCheckControllerInstance.store.bind(this.MobileResumeCheckControllerInstance))
        );
    }
}