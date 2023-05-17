import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class CheckLoadTonnage extends Model {
    declare id: CreationOptional<string>;
    declare name: string;
    declare lf_act_load: number;
    declare lf_load_monitor: number;
    declare lr_act_load: number;
    declare lr_load_monitor: number;
    declare rf_act_load: number;
    declare rf_load_monitor: number;
    declare rr_act_load: number;
    declare rr_load_monitor: number;
    declare total_act_load: number;
    declare total_load_monitor: number;
    declare die_height: number;
    declare general_data_id: string;
    declare created_at: CreationOptional<Date | null>;
    declare updated_at: CreationOptional<Date | null>;
}

CheckLoadTonnage.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        lf_act_load: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        lf_load_monitor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        lr_act_load: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        lr_load_monitor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        rf_act_load: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        rf_load_monitor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        rr_act_load: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        rr_load_monitor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        total_act_load: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        total_load_monitor: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        die_height: {
            type: DataTypes.DOUBLE,
            defaultValue: 0,
        },
        general_data_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "check_load_tonnages" }
);
