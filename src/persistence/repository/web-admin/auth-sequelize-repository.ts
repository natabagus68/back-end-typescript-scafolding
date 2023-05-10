import { User } from "@/domain/models/user";
import { WebAdminAuthRepository } from "@/domain/service/web-admin/auth-repository";
import { WebAdminLoginDto } from "@/dto/web-admin/auth-dto";
import { User as UserSql } from "@/infrastructure/database/models";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import bcrypt from "bcrypt";

export class WebAdminAuthSequelizeRepository implements WebAdminAuthRepository {
    async login(credential: WebAdminLoginDto): Promise<User> {
        const user = await UserSql.findOne({
            where: {
                email: credential.email,
            },
        });
        if (
            !user ||
            !bcrypt.compareSync(
                credential.password,
                <string>user.getDataValue("password")
            )
        ) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Wrong Email or Password",
            });
        }
        return User.create({
            id: user.getDataValue("id"),
            email: user.getDataValue("email"),
            password: user.getDataValue("password"),
            fullname: user.getDataValue("fullname"),
            isActive: user.getDataValue("is_active"),
            avatarPath: user.getDataValue("avatar_path"),
            createdAt: user.getDataValue("created_at"),
            updatedAt: user.getDataValue("updated_at"),
            deletedAt: user.getDataValue("deleted_at"),
        });
    }
}
