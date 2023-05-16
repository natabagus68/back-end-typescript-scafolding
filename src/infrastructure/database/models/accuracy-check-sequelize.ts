import { CreationOptional, DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";

export class AccuracyCheck extends Model {
    declare id: CreationOptional<string>;
    declare general_data_id: string;
    declare unit: number;
    declare balancer_air_psr: number;
    declare prl_adj_0_a: number;
    declare prl_adj_0_b: number;
    declare prl_adj_0_c: number;
    declare prl_adj_0_d: number;
    declare prl_adj_180_a: number;
    declare prl_adj_180_b: number;
    declare prl_adj_180_c: number;
    declare prl_adj_180_d: number;
    declare prl_act_vlv: number;
    declare prl_allowance: number;
    declare prl_judgement: string;
    declare gib_adj_0_a: number;
    declare gib_adj_0_b: number;
    declare gib_adj_0_c: number;
    declare gib_adj_0_d: number;
    declare gib_adj_180_a: number;
    declare gib_adj_180_b: number;
    declare gib_adj_180_c: number;
    declare gib_adj_180_d: number;
    declare gib_act_vlv: number;
    declare gib_allowance: number;
    declare gib_judgement: string;
    declare ppdclt_slide_stroke: number;
    declare ppdclt_adj_lr_a: number;
    declare ppdclt_adj_lr_b: number;
    declare ppdclt_adj_lr_c: number;
    declare ppdclt_adj_lr_d: number;
    declare ppdclt_adj_fr_a: number;
    declare ppdclt_adj_fr_b: number;
    declare ppdclt_adj_fr_c: number;
    declare ppdclt_adj_fr_d: number;
    declare ppdclt_lr_act_value: number;
    declare ppdclt_lr_allowance: number;
    declare ppdclt_lr_judgement: string;
    declare ppdclt_fr_act_value: number;
    declare ppdclt_fr_allowance: number;
    declare ppdclt_fr_judgement: string;
    declare ttl_clr_act_value: number;
    declare ttl_clr_act_valve: number;
    declare ttl_clr_allowance: number;
    declare ttl_clr_judgement: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
}

AccuracyCheck.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        general_data_id: DataTypes.STRING,
        unit: DataTypes.DOUBLE,
        balancer_air_psr: DataTypes.DOUBLE,
        prl_adj_0_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_0_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_0_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_0_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_180_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_180_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_180_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_adj_180_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_act_vlv: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_allowance: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        prl_judgement: DataTypes.STRING,
        gib_adj_0_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_0_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_0_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_0_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_180_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_180_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_180_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_adj_180_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_act_vlv: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_allowance: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        gib_judgement: DataTypes.STRING,
        ppdclt_slide_stroke: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_lr_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_lr_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_lr_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_lr_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_fr_a: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_fr_b: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_fr_c: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_adj_fr_d: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_lr_act_value: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_lr_allowance: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_lr_judgement: DataTypes.STRING,
        ppdclt_fr_act_value: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_fr_allowance: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ppdclt_fr_judgement: DataTypes.STRING,
        ttl_clr_act_value: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ttl_clr_act_valve: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ttl_clr_allowance: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        ttl_clr_judgement: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "accuracy_check" }
);
