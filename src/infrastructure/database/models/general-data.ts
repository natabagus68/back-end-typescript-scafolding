import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class GeneralData extends Model {
    declare id: CreationOptional<string>;
    declare customer_id: string;
    declare person_in_charge: string;
    declare inspection_date: Date;
    declare inspector_id: string;
    declare submitted_at: CreationOptional<Date | null>;
    declare approved_at: CreationOptional<Date | null>;
    declare approved_by: CreationOptional<string | null>;
    declare last_step: string;
    declare created_at: CreationOptional<string>;
    declare updated_at: CreationOptional<string | null>;
    declare deleted_at: CreationOptional<string | null>;
}

GeneralData.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        customer_id: DataTypes.STRING,
        person_in_charge: DataTypes.STRING,
        inspection_date: DataTypes.DATE,
        inspector_id: DataTypes.STRING,
        submitted_at: { type: DataTypes.DATE, allowNull: true },
        approved_at: { type: DataTypes.DATE, allowNull: true },
        approved_by: { type: DataTypes.STRING, allowNull: true },
        last_step: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "general_datum", paranoid: true }
);
