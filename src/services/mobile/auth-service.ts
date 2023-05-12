import { Auth, IAuth } from "@/domain/models/auth";
import { UserRepository } from "@/domain/service/user-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { mobileLoginSchema } from "@/presentation/validation/mobile/auth-validation";

@injectable()
export class MobileAuthService {
    constructor(
        @inject(TYPES.UserRepository) private _userRepo: UserRepository
    ) {}
    public async login(
        creds: typeof mobileLoginSchema._output
    ): Promise<IAuth> {
        const user = await this._userRepo.findByEmail(creds.email);
        if (!bcrypt.compareSync(creds.password, user.password || "")) {
            throw new AppError({
                statusCode: HttpCode.UNAUTHORIZED,
                description: "Wrong Password",
            });
        }
        const auth = Auth.create({
            user: user.unmarshal(),
        });
        return auth.unmarshal();
    }
    public async me(token: string): Promise<IAuth> {
        const parsedAuth = Auth.createFromToken(token);
        if (!parsedAuth || !parsedAuth.user?.id) {
            throw new AppError({
                statusCode: HttpCode.UNAUTHORIZED,
                description: "Unauthenticated",
            });
        }
        const user = await this._userRepo.findById(parsedAuth.user.id);
        if (!user) {
            throw new AppError({
                statusCode: HttpCode.UNAUTHORIZED,
                description: "Unauthenticated",
            });
        }
        return Auth.create({
            user: user.unmarshal(),
            token: token,
        }).unmarshal();
    }
}
