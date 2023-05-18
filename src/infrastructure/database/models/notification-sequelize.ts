import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { EGeneralDataLastStep } from "@/domain/models/general-data";

export class Notification extends Model {
    declare id: CreationOptional<string>;
    declare type: EGeneralDataLastStep | string;
    declare inspector_id: string;
    declare general_data_id: string;
    declare created_at: CreationOptional<string>;
    declare updated_at: CreationOptional<string | null>;
}

Notification.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        type: DataTypes.STRING,
        inspector_id: DataTypes.STRING,
        general_data_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "notifications" }
);
