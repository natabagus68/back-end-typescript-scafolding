import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class InspectionResult extends Model {
    declare id: CreationOptional<string>;
    declare option: string;
    declare color: string;
    declare description: string;
    declare createdAt: CreationOptional<string>;
    declare updatedAt: CreationOptional<string | null>;
}

InspectionResult.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        option: DataTypes.STRING,
        color: DataTypes.STRING,
        description: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "inspection_results" }
);
