import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class Customer extends Model {
    declare id: CreationOptional<string>;
    declare customer_id: string;
    declare customer_name: string;
    declare address: string;
    declare phone: string;
    declare parallelism1_path: string;
    declare parallelism2_path: string;
    declare gib_clearance1_path: string;
    declare gib_clearance2_path: string;
    declare perpendicularity1_path: string;
    declare perpendicularity2_path: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
    declare deleted_at: CreationOptional<Date | null>;
}

Customer.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        customer_id: DataTypes.STRING,
        customer_name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        parallelism1_path: DataTypes.STRING,
        parallelism2_path: DataTypes.STRING,
        gib_clearance1_path: DataTypes.STRING,
        gib_clearance2_path: DataTypes.STRING,
        perpendicularity1_path: DataTypes.STRING,
        perpendicularity2_path: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "customers", paranoid: true }
);
