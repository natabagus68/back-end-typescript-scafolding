import { Auth } from "@/domain/models/auth";
import { MobileAuthService } from "@/services/mobile/auth-service";
import { TYPES } from "@/types";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { AuthRequest } from "../utils/types/jwt-request";

@injectable()
export class MobileAuthMiddleware {
    constructor(
        @inject(TYPES.MobileAuthService) private _authService: MobileAuthService
    ) {}
    public async handle(req: Request, res: Response, next: NextFunction) {
        const user = await this._authService.me(
            <string>req.get("Authorization")?.split(" ")?.[1] || ""
        );
        const newReq: AuthRequest = <AuthRequest>req;
        newReq.auth = Auth.create(user);
        next();
    }
}
