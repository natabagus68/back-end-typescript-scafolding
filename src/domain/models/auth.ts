import { JWT_SECRET } from "@/libs/utils";
import { Entity } from "./entity";
import { IUser, User } from "./user";
import jwt from "jsonwebtoken";

export interface IAuth {
    id?: string;
    token?: string;
    user: IUser;
}

export class Auth extends Entity<IAuth> {
    private constructor(props: IAuth) {
        const { id, token, ...data } = props;
        super(data, id);
        this.props.token = token || jwt.sign(data.user, JWT_SECRET);
    }

    public static create(props: IAuth): Auth {
        const instance = new Auth(props);
        return instance;
    }

    public unmarshal(): IAuth {
        return {
            id: this._id,
            token: this.token,
            user: this.user.unmarshal(),
        };
    }

    get id(): string {
        return this._id;
    }
    get token(): string {
        return this.props.token || "";
    }
    get user(): User {
        return User.create(this.props.user);
    }
}
