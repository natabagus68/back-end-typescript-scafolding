import { IUser } from "@/domain/models/user";
import { UserRepository } from "@/domain/service/user-repository";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileProfileService {
    constructor(@inject(TYPES.UserRepository) private _userRepo: UserRepository) {}
    public async get(userId: string): Promise<IUser> {
        const user = await this._userRepo.findById(userId);
        return { ...user.unmarshal(), password: undefined };
    }
    public async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<IUser> {
        const user = await this._userRepo.findById(userId);
        if (!user.verifyPassword(oldPassword)) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Wrong Password",
            });
        }
        user.password = newPassword;
        const updatedUser = await this._userRepo.update(user.id, user);
        return {
            ...updatedUser.unmarshal(),
            password: undefined,
        };
    }
}
