import { TTableDataParam } from "@/domain/service/types";
import { IUser, User } from "../models/user";
import { TableData } from "../models/table-data";

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByEmail(string: string): Promise<User>;
    create(user: IUser): Promise<User>;
    update(id: string, user: IUser): Promise<User>;
    delete(id: string): Promise<boolean>;
    tableData(param: TTableDataParam): Promise<TableData<IUser>>;
}
