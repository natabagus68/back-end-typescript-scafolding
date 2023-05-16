import {
    Association,
    CreationOptional,
    DataTypes,
    HasManyGetAssociationsMixin,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from "sequelize";
import { sequelize } from "../sequelize";
import { InspectionFormItem } from "./inspection-form-item-sequelize";

export class InspectionForm extends Model<
    InferAttributes<InspectionForm, { omit: "items" }>,
    InferCreationAttributes<InspectionForm, { omit: "items" }>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare order: number;
    declare items?: NonAttribute<InspectionFormItem[]>;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
    declare static associations: {
        items: Association<InspectionForm, InspectionFormItem>;
    };
    declare getItems: HasManyGetAssociationsMixin<InspectionFormItem>;
}

InspectionForm.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        order: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "inspection_forms" }
);
