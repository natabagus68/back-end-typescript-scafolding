import { File } from "buffer";
import { Entity } from "./entity";

export interface IUser {
    id?: string;
    email: string;
    password?: string | null;
    fullname: string;
    isActive: boolean;
    avatarPath: string | File;
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
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
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
    get fullname(): string {
        return this.props.fullname;
    }
    get isActive(): boolean {
        return this.props.isActive;
    }
    get avatarPath(): string | File {
        return this.props.avatarPath;
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
