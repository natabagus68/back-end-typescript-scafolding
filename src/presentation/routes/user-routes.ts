import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { Router } from "express";
import { injectable } from "inversify";
import multer from "multer";
import UserController from "@/presentation/controllers/user-controller";

const tmpUploadedFiles = multer({
    dest: "tmp_uploaded_files/user",
});

@injectable()
export class UserRoutes {
    public route = "admin/user";
    UserControllerInstance = container.get<UserController>(UserController);

    public setRoutes(router: Router) {
        router.get(
            `/${this.route}`,
            asyncWrap(this.UserControllerInstance.getDataTable.bind(this.UserControllerInstance))
        );
        router.get(
            `/${this.route}/:id`,
            asyncWrap(this.UserControllerInstance.findUserById.bind(this.UserControllerInstance))
        );
        router.put(
            `/${this.route}/:id`,
            tmpUploadedFiles.single("avatarPath"),
            asyncWrap(this.UserControllerInstance.updateUser.bind(this.UserControllerInstance))
        );

        router.post(
            `/${this.route}`,
            tmpUploadedFiles.single("avatarPath"),
            asyncWrap(this.UserControllerInstance.createUser.bind(this.UserControllerInstance))
        );

        router.delete(
            `/${this.route}/:id`,
            asyncWrap(this.UserControllerInstance.deleteUser.bind(this.UserControllerInstance))
        );
    }
}
