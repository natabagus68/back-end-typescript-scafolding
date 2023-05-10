import { UserRepository } from "@/domain/service/user-repository";
import { User } from "@/infrastructure/database/models";
import { User as EntityUser } from "@/domain/models/user";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import fs from "fs-extra";
import { createId } from "@paralleldrive/cuid2";

@injectable()
export class UserSequelizeRepository implements UserRepository {
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
                avatarPath: user.avatar_path,
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
            avatarPath: user.avatar_path,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            deletedAt: user.deleted_at,
        });
    }

    async create(userDomain: EntityUser): Promise<EntityUser> {
        const transaction = await sequelize.transaction();
        try {
            // const avatarNames =
            //     typeof userDomain.avatarPath === "object"
            //         ? userDomain.avatarPath.name.split(".")
            //         : [];
            // const avatarPath = `${userDomain.avatarPath}.${avatarNames[avatarNames.length - 1]}`;
            const user = await User.create(
                {
                    id: userDomain.id,
                    email: userDomain.email,
                    password: userDomain.password,
                    fullname: userDomain.fullname,
                    is_active: userDomain.isActive,
                    avatar_path: "avatarName",
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
                avatarPath: user.avatar_path,
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
        await user.update(userDomain.unmarshal());
        await user.reload();
        return EntityUser.create({
            id: user.id,
            email: user.email,
            password: user.password,
            fullname: user.fullname,
            isActive: user.is_active,
            avatarPath: user.avatar_path,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            deletedAt: user.deleted_at,
        });
    }

    async delete(id: string): Promise<boolean> {
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
