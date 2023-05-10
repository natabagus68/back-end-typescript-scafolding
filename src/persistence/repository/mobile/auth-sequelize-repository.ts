import { Auth } from "@/domain/models/auth";
import { MobileAuthRepository } from "@/domain/service/mobile/auth-repository";
import { MobileLoginDto } from "@/dto/mobile/auth-dto";
import { User } from "@/infrastructure/database/models";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import bcrypt from "bcrypt";
import { injectable } from "inversify";

@injectable()
export class MobileAuthSequelizeRepository implements MobileAuthRepository {
    async login(credential: MobileLoginDto): Promise<Auth> {
        const user = await User.findOne({
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
        return Auth.create({
            user: {
                id: user.getDataValue("id"),
                email: user.getDataValue("email"),
                password: user.getDataValue("password"),
                fullname: user.getDataValue("fullname"),
                isActive: user.getDataValue("is_active"),
                avatarPath: user.getDataValue("avatar_path"),
                createdAt: user.getDataValue("created_at"),
                updatedAt: user.getDataValue("updated_at"),
                deletedAt: user.getDataValue("deleted_at"),
            },
        });
    }
}
