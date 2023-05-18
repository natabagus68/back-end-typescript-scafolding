import { File } from "buffer";
import { Entity } from "./entity";
import bcrypt from "bcrypt";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";

export enum EUserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    INSPECTOR = "INSPECTOR",
}

export interface IUser {
    id?: string;
    email: string;
    password?: string | null;
    fullname: string;
    isActive: boolean;
    avatarPath?: string | File;
    role: string | EUserRole;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class User extends Entity<IUser> {
    private constructor(props: IUser) {
        const { id, ...data } = props;
        super(data, id);
    }

    public static create(props: IUser): User {
        const instance = new User(props);
        return instance;
    }

    public unmarshal(): IUser {
        return {
            id: this._id,
            email: this.email,
            password: this.password,
            fullname: this.fullname,
            isActive: this.isActive,
            avatarPath: this.avatarPath,
            role: this.role,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    public verifyPassword(password: string): boolean {
        if (this.password) {
            return bcrypt.compareSync(password, this.password);
        }
        return false;
    }

    get id(): string {
        return this._id;
    }
    get email(): string {
        return this.props.email;
    }
    get password(): string | undefined | null {
        return this.props.password;
    }
    set password(val: string | undefined | null) {
        if (val && val !== "") {
            this.props.password = bcrypt.hashSync(val, 10);
        } else {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Password is required",
            });
        }
    }
    get fullname(): string {
        return this.props.fullname;
    }
    get isActive(): boolean {
        return this.props.isActive;
    }
    get avatarPath(): undefined | string | File {
        return this.props.avatarPath;
    }
    get role(): string | EUserRole {
        return this.props.role;
    }
    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    get deletedAt(): Date | undefined {
        return this.props.deletedAt;
    }
}
