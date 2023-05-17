import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { UserService } from "@/services/user-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { userCreateScheme, userDataTableScheme, userUpdateScheme } from "../validation/user-validation";
import { AuthRequest } from "../utils/types/jwt-request";

@injectable()
export default class UserController {
    constructor(@inject(TYPES.UserService) private _userService: UserService) {}

    public async listUsers(req: Request, res: Response): Promise<Response> {
        const users = await this._userService.findAll();
        return res.status(200).send({ message: "success", data: users.map((val) => val) });
    }

    public async findUserById(req: Request, res: Response): Promise<Response> {
        const user = await this._userService.findById(req.params.id);
        return res.status(200).send(user);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        const parseBody = userCreateScheme.safeParse({
            ...req.body,
            avatar_path: req.file,
        });
        if (!parseBody.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: parseBody.error.flatten().fieldErrors,
            });
        }
        const createdUser = await this._userService.store({
            email: parseBody.data.email,
            password: parseBody.data.password,
            fullname: parseBody.data.fullname,
            isActive: parseBody.data.isActive,
            avatarPath: parseBody.data.avatar_path,
        });
        return res.status(200).send({ message: "success", data: createdUser });
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        const parseBody = userUpdateScheme.safeParse(req.body);
        if (!parseBody.success) {
            throw new AppError({
                statusCode: HttpCode.BAD_REQUEST,
                description: "Request validation error",
                data: parseBody.error.flatten(),
            });
        }
        const updatedUser = await this._userService.update(req.params.id, {
            email: parseBody.data.email,
            password: parseBody.data.password,
            fullname: parseBody.data.fullname,
            isActive: parseBody.data.isActive,
            avatarPath: parseBody.data.avatar_path,
        });
        return res.status(200).send({ message: "success", data: updatedUser });
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        const user = await this._userService.destroy(req.params.id);
        return res.status(200).send(user);
    }

    public async getDataTable(req: AuthRequest, res: Response): Promise<Response> {
        const validatedReq = userDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const users = await this._userService.getDataTable(validatedReq.data);
        return res.json({
            message: "success",
            data: users,
        });
    }
}
