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
import { Customer } from "./customer-sequelize";
import { MachineCheck } from "./machine-check-sequelize";
import { ResumeCheck } from "./resume-check-sequelize";
import { AccuracyCheck } from "./accuracy-check-sequelize";
import { CheckLoadTonnage } from "./check-load-tonnage-sequelize";
import { InspectionData } from "./inspection-data-sequelize";

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
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
    declare deleted_at: CreationOptional<Date | null>;
    declare customer: NonAttribute<Customer>;
    declare inspectionDatum: NonAttribute<InspectionData[]>;
    declare machineCheck: NonAttribute<MachineCheck>;
    declare resumeCheck: NonAttribute<ResumeCheck>;
    declare accuracyCheck: NonAttribute<AccuracyCheck>;
    declare checkLoadTonnages: NonAttribute<CheckLoadTonnage[]>;
    declare static associations: {
        customer: Association<GeneralData, Customer>;
        inspectionDatum: Association<GeneralData, InspectionData>;
        machineCheck: Association<GeneralData, MachineCheck>;
        resumeCheck: Association<GeneralData, ResumeCheck>;
        accuracyCheck: Association<GeneralData, AccuracyCheck>;
        checkLoadTonnages: Association<GeneralData, CheckLoadTonnage>;
    };
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
