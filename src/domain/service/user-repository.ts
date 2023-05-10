import { IUser, User } from "../models/user";

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    create(user: IUser): Promise<User>;
    update(id: string, user: IUser): Promise<User>;
    delete(id: string): Promise<boolean>;
}
