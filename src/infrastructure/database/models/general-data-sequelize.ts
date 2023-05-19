import { Association, CreationOptional, DataTypes, Model, NonAttribute } from "sequelize";
import { sequelize } from "../sequelize";
import { Customer } from "./customer-sequelize";
import { MachineCheck } from "./machine-check-sequelize";
import { ResumeCheck } from "./resume-check-sequelize";
import { AccuracyCheck } from "./accuracy-check-sequelize";
import { CheckLoadTonnage } from "./check-load-tonnage-sequelize";
import { InspectionData } from "./inspection-data-sequelize";
import { MachineData } from "./machine-data-sequelize";
import { User } from "./user-sequelize";
import { EGeneralDataStatus } from "@/dto/general-data-dto";
import { InspectionResult } from "./inspection-result-sequelize";

export class GeneralData extends Model {
    declare id: CreationOptional<string>;
    declare customer_id: string;
    declare person_in_charge: string;
    declare inspection_date: Date;
    declare inspection_id: NonAttribute<string | undefined>;
    declare inspector_id: string;
    declare inspector_name: NonAttribute<string | undefined>;
    declare submitted_at: CreationOptional<Date | null>;
    declare approved_at: CreationOptional<Date | null>;
    declare approved_by: CreationOptional<string | null>;
    declare last_step: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date | null>;
    declare deleted_at: CreationOptional<Date | null>;
    declare customer: NonAttribute<Customer>;
    declare inspectionDatum: NonAttribute<InspectionData[]>;
    declare machineDatum: NonAttribute<MachineData>;
    declare machineCheck: NonAttribute<MachineCheck>;
    declare resumeCheck: NonAttribute<ResumeCheck>;
    declare accuracyCheck: NonAttribute<AccuracyCheck>;
    declare loadTonnages: NonAttribute<CheckLoadTonnage[]>;
    declare inspector: NonAttribute<User>;
    declare inspectionResult: NonAttribute<InspectionResult>;
    declare static associations: {
        customer: Association<GeneralData, Customer>;
        inspectionDatum: Association<GeneralData, InspectionData>;
        machineCheck: Association<GeneralData, MachineCheck>;
        resumeCheck: Association<GeneralData, ResumeCheck>;
        accuracyCheck: Association<GeneralData, AccuracyCheck>;
        loadTonnages: Association<GeneralData, CheckLoadTonnage>;
        inspector: Association<GeneralData, User>;
        inspectionResult: Association<GeneralData, InspectionResult>;
    };
    get status(): NonAttribute<EGeneralDataStatus> {
        return this.approved_at ? EGeneralDataStatus.CONFIRMED : EGeneralDataStatus.WAITING;
    }
}

GeneralData.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        inspection_id: DataTypes.STRING,
        customer_id: DataTypes.STRING,
        person_in_charge: DataTypes.STRING,
        inspection_date: DataTypes.DATE,
        inspector_id: DataTypes.STRING,
        submitted_at: { type: DataTypes.DATE, allowNull: true },
        approved_at: { type: DataTypes.DATE, allowNull: true },
        approved_by: { type: DataTypes.STRING, allowNull: true },
        last_step: DataTypes.STRING,
        inspection_result_id: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        created_at: DataTypes.DATE,
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, underscored: true, tableName: "general_datum", paranoid: true }
);
