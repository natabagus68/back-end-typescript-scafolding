import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class InspectionFormItem extends Model {
    declare id: CreationOptional<string>;
    declare name: string;
    declare information: string;
    declare has_note: boolean;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
}

InspectionFormItem.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        information: DataTypes.STRING,
        has_note: DataTypes.BOOLEAN,
        inspection_form_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "inspection_form_items" }
);
