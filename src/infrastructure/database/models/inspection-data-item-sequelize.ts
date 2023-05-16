import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class InspectionDataItem extends Model {
    declare id: CreationOptional<string>;
    declare name: string;
    declare determination: string;
    declare has_note: boolean;
    declare notes: CreationOptional<string>;
    declare backlash: CreationOptional<number>;
    declare r: CreationOptional<number>;
    declare s: CreationOptional<number>;
    declare inspection_data_id: CreationOptional<number>;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
}

InspectionDataItem.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        determination: DataTypes.STRING,
        has_note: DataTypes.BOOLEAN,
        notes: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        backlash: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        r: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        s: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        inspection_data_id: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "inspection_data_items" }
);
