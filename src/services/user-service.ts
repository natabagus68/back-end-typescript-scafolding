import { IUser, User } from "@/domain/models/user";
import { UserRepository } from "@/domain/service/user-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";
import fs from "fs-extra";

@injectable()
export class UserService {
    constructor(
        @inject(TYPES.UserRepository) private _repository: UserRepository
    ) {}

    public async findAll(): Promise<IUser[]> {
        const users = await this._repository.findAll();
        const userDto = users.map((user) => user.unmarshal());
        return userDto;
    }

    public async findById(id: string): Promise<IUser> {
        const user = await this._repository.findById(id);
        return user.unmarshal();
    }

    public async store(_user: IUser): Promise<IUser> {
        if (typeof _user.avatarPath === "object") {
            console.log("User", _user);
            // fs.writeFileSync("./../../storage/user/", _user.avatarPath);
        }
        const user = await this._repository.store(
            User.create({
                email: _user.email,
                password: bcrypt.hashSync(_user.password || "", 10),
                fullname: _user.fullname,
                isActive: _user.isActive,
                avatarPath: _user.avatarPath,
            })
        );
        return user.unmarshal();
    }

    public async update(id: string, _user: IUser): Promise<IUser> {
        const user = await this._repository.update(
            id,
            User.create({
                id: _user.id,
                email: _user.email,
                password: _user.password,
                fullname: _user.fullname,
                isActive: _user.isActive,
                avatarPath: _user.avatarPath,
                createdAt: _user.createdAt,
                updatedAt: _user.updatedAt,
                deletedAt: _user.deletedAt,
            })
        );
        return user.unmarshal();
    }

    public async destroy(id: string): Promise<boolean> {
        const user = await this._repository.destroy(id);
        return user;
    }
}
