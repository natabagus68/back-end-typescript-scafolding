import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from "sequelize";
import { sequelize } from "../sequelize";
import { InspectionDataItem } from "./inspection-data-item-sequelize";

export class InspectionData extends Model<
    InferAttributes<InspectionData, { omit: "items" }>,
    InferCreationAttributes<InspectionData, { omit: "items" }>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare order: number;
    declare items: NonAttribute<InspectionDataItem[]>;
    declare general_data_id: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
    declare static associations: {
        items: Association<InspectionData, InspectionDataItem>;
    };
}

InspectionData.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        order: DataTypes.INTEGER,
        general_data_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "inspection_datum" }
);
