import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class MachineCheck extends Model {
    declare id: CreationOptional<string>;
    declare generalDataId: string;
    declare idleAmp: number;
    declare runningAmp: number;
    declare runningDuration: number;
    declare runningTimes: number | null;
    declare clearanceTotal: number | null;
    declare clearancePoint: number | null;
    declare p: CreationOptional<number>;
    declare actual: CreationOptional<number>;
    declare determinationResult: string;
    declare slideUpAmp: CreationOptional<number>;
    declare slideDownAmp: CreationOptional<number>;
    declare prlsmBlstrSlide: string | "ok" | "ng";
    declare test1: CreationOptional<null | string>;
    declare test2: CreationOptional<null | string>;
    declare test3: CreationOptional<null | string>;
    declare test4: CreationOptional<null | string>;
    declare test5: CreationOptional<null | string>;
    declare test6: CreationOptional<null | string>;
    declare test7: CreationOptional<null | string>;
    declare test8: CreationOptional<null | string>;
    declare test9: CreationOptional<null | string>;
    declare test10: CreationOptional<null | string>;
    declare created_at: CreationOptional<string>;
    declare updated_at: CreationOptional<string | null>;
}

MachineCheck.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        general_data_id: DataTypes.STRING,
        idle_amp: DataTypes.DOUBLE,
        running_amp: DataTypes.DOUBLE,
        running_duration: DataTypes.INTEGER,
        running_times: {
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        clearance_total: {
            allowNull: true,
            type: DataTypes.DOUBLE,
        },
        clearance_point: {
            allowNull: true,
            type: DataTypes.DOUBLE,
        },
        p: {
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        actual: {
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        determination_result: DataTypes.STRING,
        slide_up_amp: {
            defaultValue: 0,
            type: DataTypes.DOUBLE,
        },
        slide_down_amp: {
            defaultValue: 0,
            type: DataTypes.DOUBLE,
        },
        prlsm_blstr_slide: DataTypes.STRING,
        test1: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test2: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test3: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test4: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test5: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test6: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test7: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test8: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test9: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        test10: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "machine_checks" }
);
