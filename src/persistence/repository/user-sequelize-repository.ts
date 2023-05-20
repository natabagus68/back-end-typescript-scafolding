import { UserRepository } from "@/domain/service/user-repository";
import { User } from "@/infrastructure/database/models";
import { User as EntityUser, IUser } from "@/domain/models/user";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { Op } from "sequelize";

@injectable()
export class UserSequelizeRepository implements UserRepository {
    async findByEmail(email: string): Promise<EntityUser> {
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "User with this email not found",
            });
        }
        return EntityUser.create({
            id: user.getDataValue("id"),
            email: user.getDataValue("email"),
            password: user.getDataValue("password"),
            fullname: user.getDataValue("fullname"),
            isActive: user.getDataValue("is_active"),
            avatarPath: user.getDataValue("avatarPath"),
            role: user.getDataValue("role"),
            createdAt: user.getDataValue("created_at"),
            updatedAt: user.getDataValue("updated_at"),
            deletedAt: user.getDataValue("deleted_at"),
        });
    }
    async getDataTable(param: TDataTableParam): Promise<TableData<IUser>> {
        const users = await User.findAll({
            where: {
                fullname: {
                    [Op.iLike]: `%${param.search}%`,
                },
            },
            limit: param.limit ? param.limit : undefined,
            offset: (param.page || 1) > 1 ? (param.limit || 10) * ((param.page || 1) - 1) : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: users.map((item) => ({
                id: item.id,
                email: item.email,
                password: item.password,
                fullname: item.fullname,
                isActive: item.is_active,
                avatarPath: item.avatarPath,
                role: item.role,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
                deletedAt: item.deleted_at,
            })),
        });
    }
    async findAll(): Promise<EntityUser[]> {
        const users = await User.findAll({
            attributes: ["id", "username", "email"],
        });
        return users.map((user) =>
            EntityUser.create({
                id: user.id,
                email: user.email,
                password: user.password,
                fullname: user.fullname,
                isActive: user.is_active,
                avatarPath: user.avatarPath,
                role: user.role,
                createdAt: user.created_at,
                updatedAt: user.updated_at,
                deletedAt: user.deleted_at,
            })
        );
    }

    async findById(id: string): Promise<EntityUser> {
        const user = await User.findByPk(id);
        if (!user) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "User was not found",
            });
        }
        return EntityUser.create({
            id: user.id,
            email: user.email,
            password: user.password,
            fullname: user.fullname,
            isActive: user.is_active,
            avatarPath: user.avatarPath,
            role: user.role,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            deletedAt: user.deleted_at,
        });
    }

    async store(userDomain: EntityUser): Promise<EntityUser> {
        const transaction = await sequelize.transaction();
        try {
            console.log(userDomain);
            const user = await User.create(
                {
                    id: userDomain.id,
                    email: userDomain.email,
                    password: userDomain.password,
                    fullname: userDomain.fullname,
                    is_active: userDomain.isActive,
                    avatarPath: typeof userDomain.avatarPath === "string" ? userDomain.avatarPath : "",
                    role: userDomain.role,
                },
                {
                    transaction,
                }
            );
            await transaction.commit();
            const entity = EntityUser.create({
                id: user.id,
                email: user.email,
                password: user.password,
                fullname: user.fullname,
                isActive: user.is_active,
                avatarPath: user.avatarPath,
                role: user.role,
                createdAt: user.created_at,
                updatedAt: user.updated_at,
                deletedAt: user.deleted_at,
            });
            return entity;
        } catch (e) {
            await transaction.rollback();
            throw new AppError({
                statusCode: HttpCode.BAD_REQUEST,
                description: "Failed to create user",
                error: e,
            });
        }
    }

    async update(id: string, userDomain: EntityUser): Promise<EntityUser> {
        const user = await User.findByPk(id);
        if (!user) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "User was not found",
            });
        }
        await user.update({
            ...userDomain.unmarshal(),
            avatarPath: userDomain.avatarPath?.toString(),
        });
        await user.reload();
        return EntityUser.create({
            id: user.id,
            email: user.email,
            password: user.password,
            fullname: user.fullname,
            isActive: user.is_active,
            avatarPath: userDomain.avatarPath,
            role: user.role,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            deletedAt: user.deleted_at,
        });
    }

    async destroy(id: string): Promise<boolean> {
        const user = await User.findByPk(id);
        if (!user) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "User was not found",
            });
        }
        await user.destroy();
        return true;
    }
}
