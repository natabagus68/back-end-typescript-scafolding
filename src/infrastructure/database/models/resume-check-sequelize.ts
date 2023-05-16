import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class ResumeCheck extends Model {
    declare id: CreationOptional<string>;
    declare check_date: Date;
    declare photo_path: string;
    declare notes: string;
    declare recommendation: string;
    declare general_data_id: string;
    declare created_at: CreationOptional<string>;
    declare updated_at: CreationOptional<string | null>;
}

ResumeCheck.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        check_date: DataTypes.DATE,
        photo_path: DataTypes.STRING,
        notes: DataTypes.STRING,
        recommendation: DataTypes.STRING,
        general_data_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "resume_checks" }
);
