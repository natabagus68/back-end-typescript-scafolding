import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class MachineData extends Model {
    declare id: CreationOptional<string>;
    declare machine_type: string;
    declare serial_no: string;
    declare manufacture_date: Date;
    declare capacity: number;
    declare slide_stroke: number;
    declare stroke_per_minute: string;
    declare die_height: number;
    declare slide_adjustment: number;
    declare area_bloster_dimention_x: number;
    declare area_bloster_dimention_y: number;
    declare area_slide_dimention_x: number;
    declare area_slide_dimention_y: number;
    declare crank_press_c: boolean;
    declare crank_press_h: boolean;
    declare crankless_press: boolean;
    declare knuckle_press: boolean;
    declare link_press: boolean;
    declare combination_type: boolean;
    declare separate_type: boolean;
    declare dry_friction: boolean;
    declare wet_friction: boolean;
    declare other: boolean;
    declare intermittent: boolean;
    declare continues: boolean;
    declare safety_guard: boolean;
    declare safety_light: boolean;
    declare double_solenoid_valve: boolean;
    declare general_data_id: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
}

MachineData.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        machine_type: DataTypes.STRING,
        serial_no: DataTypes.STRING,
        manufacture_date: DataTypes.DATE,
        capacity: DataTypes.DOUBLE,
        slide_stroke: DataTypes.DOUBLE,
        stroke_per_minute: DataTypes.STRING,
        die_height: DataTypes.DOUBLE,
        slide_adjustment: DataTypes.DOUBLE,
        area_bloster_dimention_x: DataTypes.DOUBLE,
        area_bloster_dimention_y: DataTypes.DOUBLE,
        area_slide_dimention_x: DataTypes.DOUBLE,
        area_slide_dimention_y: DataTypes.DOUBLE,
        crank_press_c: DataTypes.BOOLEAN,
        crank_press_h: DataTypes.BOOLEAN,
        crankless_press: DataTypes.BOOLEAN,
        knuckle_press: DataTypes.BOOLEAN,
        link_press: DataTypes.BOOLEAN,
        combination_type: DataTypes.BOOLEAN,
        separate_type: DataTypes.BOOLEAN,
        dry_friction: DataTypes.BOOLEAN,
        wet_friction: DataTypes.BOOLEAN,
        other: DataTypes.BOOLEAN,
        intermittent: DataTypes.BOOLEAN,
        continues: DataTypes.BOOLEAN,
        safety_guard: DataTypes.BOOLEAN,
        safety_light: DataTypes.BOOLEAN,
        double_solenoid_valve: DataTypes.BOOLEAN,
        general_data_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "machine_datum" }
);
