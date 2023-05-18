import { EGeneralDataLastStep, GeneralData, IGeneralData } from "@/domain/models/general-data";
import { TableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParam } from "@/domain/service/types";
import {
    AccuracyCheck as AccuracyCheckDB,
    Customer as CustomerDB,
    GeneralData as GeneralDataDB,
    InspectionData as InspectionDataDB,
    InspectionDataItem as InspectionDataItemDB,
    MachineCheck as MachineCheckDB,
    MachineData as MachineDataDB,
    MachineData as MachineDatumDB,
    User as UserDB,
} from "@/infrastructure/database/models";
import { ResumeCheck as ResumeCheckDB } from "@/infrastructure/database/models/resume-check-sequelize";
import { sequelize } from "@/infrastructure/database/sequelize";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { Op } from "sequelize";

@injectable()
export class GeneralDataSequelizeRepository implements GeneralDataRepository {
    async findUnapproveTable({ limit = 10, page = 1, search }: TDataTableParam): Promise<TableData<IGeneralData>> {
        const generalDatum = await GeneralDataDB.findAll({
            where: {
                approved_at: {
                    [Op.is]: null,
                },
                [Op.or]: {
                    ["$customer.customer_name$"]: {
                        [Op.iLike]: `%${search}%`,
                    },
                    ["$machineDatum.machine_type$"]: {
                        [Op.iLike]: `%${search}%`,
                    },
                    ["$inspector.fullname$"]: {
                        [Op.iLike]: `%${search}%`,
                    },
                },
            },
            limit: limit,
            offset: (page || 1) > 1 ? (limit || 10) * ((page || 1) - 1) : 0,
            include: [
                {
                    model: CustomerDB,
                    as: "customer",
                    attributes: ["customer_name"],
                },
                {
                    model: MachineDataDB,
                    as: "machineDatum",
                    attributes: ["machine_type"],
                },
                {
                    model: UserDB,
                    as: "inspector",
                    attributes: ["fullname"],
                },
            ],
        });
        return TableData.create({
            search: search || "",
            page: page,
            limit: limit,
            data: generalDatum.map((item) => ({
                id: item.getDataValue("id"),
                customerId: item.getDataValue("customer_id"),
                personInCharge: item.getDataValue("person_in_charge"),
                inspectionDate: item.getDataValue("inspection_date"),
                inspectorId: item.getDataValue("inspector_id"),
                inspectorName: item.getDataValue("inspector_name"),
                lastStep: item.getDataValue("last_step"),
                submittedAt: item.getDataValue("submitted_at"),
                approvedAt: item.getDataValue("approved_at"),
                approvedBy: item.getDataValue("approved_by"),
                inspectionDatum: item.getDataValue("inspection_datum"),
                machineCheck: item.getDataValue("machine_check"),
                accuracyCheck: item.getDataValue("accuracy_check"),
                resumeCheck: item.getDataValue("resume_check"),
                customer: {
                    id: item.customer.getDataValue("id"),
                    customerId: item.customer.getDataValue("customer_id"),
                    customerName: item.customer.getDataValue("customer_name"),
                    address: item.customer.getDataValue("address"),
                    phone: item.customer.getDataValue("phone"),
                    parallelism1Path: item.customer.getDataValue("parallelism1_path"),
                    parallelism2Path: item.customer.getDataValue("parallelism2_path"),
                    gibClearance1Path: item.customer.getDataValue("gib_clearance1_path"),
                    gibClearance2Path: item.customer.getDataValue("gib_clearance2_path"),
                    perpendicularity1Path: item.customer.getDataValue("perpendicularity1_path"),
                    perpendicularity2Path: item.customer.getDataValue("perpendicularity2_path"),
                    createdAt: item.customer.getDataValue("created_at"),
                    updatedAt: item.customer.getDataValue("updated_at"),
                    deletedAt: item.customer.getDataValue("deleted_at"),
                },
                machineDatum: {
                    id: item.machineDatum.getDataValue("id"),
                    machineType: item.machineDatum.getDataValue("machine_type"),
                    serialNo: item.machineDatum.getDataValue("serial_no"),
                    manufactureDate: item.machineDatum.getDataValue("manufacture_date"),
                    capacity: item.machineDatum.getDataValue("capacity"),
                    slideStroke: item.machineDatum.getDataValue("slide_stroke"),
                    strokePerMinute: item.machineDatum.getDataValue("stroke_per_minute"),
                    dieHeight: item.machineDatum.getDataValue("die_height"),
                    slideAdjustment: item.machineDatum.getDataValue("slide_adjustment"),
                    areaBlosterDimentionX: item.machineDatum.getDataValue("area_bloster_dimention_x"),
                    areaBlosterDimentionY: item.machineDatum.getDataValue("area_bloster_dimention_y"),
                    areaSlideDimentionX: item.machineDatum.getDataValue("area_slide_dimention_x"),
                    areaSlideDimentionY: item.machineDatum.getDataValue("area_slide_dimention_y"),
                    crankPressC: item.machineDatum.getDataValue("crank_press_c"),
                    crankPressH: item.machineDatum.getDataValue("crank_press_h"),
                    cranklessPress: item.machineDatum.getDataValue("crankless_press"),
                    knucklePress: item.machineDatum.getDataValue("knuckle_press"),
                    linkPress: item.machineDatum.getDataValue("link_press"),
                    combinationType: item.machineDatum.getDataValue("combination_type"),
                    separateType: item.machineDatum.getDataValue("separate_type"),
                    dryFriction: item.machineDatum.getDataValue("dry_friction"),
                    wetFriction: item.machineDatum.getDataValue("wet_friction"),
                    other: item.machineDatum.getDataValue("other"),
                    intermittent: item.machineDatum.getDataValue("intermittent"),
                    continues: item.machineDatum.getDataValue("continues"),
                    safetyGuard: item.machineDatum.getDataValue("safety_guard"),
                    safetyLight: item.machineDatum.getDataValue("safety_light"),
                    doubleSolenoidValve: item.machineDatum.getDataValue("double_solenoid_valve"),
                    generalDataId: item.machineDatum.getDataValue("general_data_id"),
                    createdAt: item.machineDatum.getDataValue("created_at"),
                    updatedAt: item.machineDatum.getDataValue("updated_at"),
                },
                inspector: {
                    id: item.inspector.getDataValue("id"),
                    email: item.inspector.getDataValue("email"),
                    password: item.inspector.getDataValue("password"),
                    fullname: item.inspector.getDataValue("fullname"),
                    isActive: item.inspector.getDataValue("is_active"),
                    avatarPath: item.inspector.getDataValue("avatar_path"),
                    role: item.inspector.getDataValue("role"),
                    createdAt: item.inspector.getDataValue("created_at"),
                    updatedAt: item.inspector.getDataValue("updated_at"),
                    deletedAt: item.inspector.getDataValue("deleted_at"),
                },
                createdAt: item.getDataValue("created_at"),
                updatedAt: item.getDataValue("updated_at"),
                deletedAt: item.getDataValue("deleted_at"),
            })),
        });
    }
    async findUnsubmittedByInspectorId(inspectorId: string): Promise<GeneralData> {
        const found = await GeneralDataDB.findOne({
            where: {
                inspector_id: inspectorId,
                last_step: {
                    [Op.not]: EGeneralDataLastStep.SUBMITTED,
                },
                submitted_at: null,
            },
        });
        if (!found) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "All Document is Submitted",
            });
        }
        return GeneralData.create({
            id: found.getDataValue("id"),
            customerId: found.getDataValue("customer_id"),
            personInCharge: found.getDataValue("person_in_charge"),
            inspectionDate: found.getDataValue("inspection_date"),
            inspectorId: found.getDataValue("inspector_id"),
            lastStep: found.getDataValue("last_step"),
            submittedAt: found.getDataValue("submitted_at"),
            approvedAt: found.getDataValue("approved_at"),
            approvedBy: found.getDataValue("approved_by"),
            createdAt: found.getDataValue("created_at"),
            updatedAt: found.getDataValue("updated_at"),
            deletedAt: found.getDataValue("deleted_at"),
        });
    }
    async findByCustAndDate(customerId: string, date: Date): Promise<GeneralData | null> {
        const found = await GeneralDataDB.findOne({
            where: {
                customer_id: customerId,
                inspection_date: date,
            },
        });
        if (!found) {
            return null;
        }
        return GeneralData.create({
            id: found.getDataValue("id"),
            customerId: found.getDataValue("customer_id"),
            personInCharge: found.getDataValue("person_in_charge"),
            inspectionDate: found.getDataValue("inspection_date"),
            inspectorId: found.getDataValue("inspector_id"),
            createdAt: found.getDataValue("created_at"),
            updatedAt: found.getDataValue("updated_at"),
            deletedAt: found.getDataValue("deleted_at"),
            lastStep: found.getDataValue("last_step"),
            submittedAt: found.getDataValue("submitted_at"),
            approvedAt: found.getDataValue("approved_at"),
            approvedBy: found.getDataValue("approved_by"),
        });
    }
    async update(generalData: GeneralData): Promise<GeneralData> {
        const updated = await GeneralDataDB.findByPk(generalData.id);
        if (!updated) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "General Data Not Found",
            });
        }
        await updated.update(
            {
                customer_id: generalData.customerId,
                person_in_charge: generalData.personInCharge,
                inspection_date: generalData.inspectionDate,
                inspector_id: generalData.inspectorId,
                created_at: generalData.createdAt,
                updated_at: generalData.updatedAt,
                deleted_at: generalData.deletedAt,
                last_step: generalData.lastStep,
                submitted_at: generalData.submittedAt,
                approved_at: generalData.approvedAt,
                approved_by: generalData.approvedBy,
            },
            { where: { id: generalData.id } }
        );
        await updated.reload();
        return GeneralData.create({
            id: updated.getDataValue("id"),
            customerId: updated.getDataValue("customer_id"),
            personInCharge: updated.getDataValue("person_in_charge"),
            inspectionDate: updated.getDataValue("inspection_date"),
            inspectorId: updated.getDataValue("inspector_id"),
            createdAt: updated.getDataValue("created_at"),
            updatedAt: updated.getDataValue("updated_at"),
            deletedAt: updated.getDataValue("deleted_at"),
            lastStep: updated.getDataValue("last_step"),
            submittedAt: updated.getDataValue("submitted_at"),
            approvedAt: updated.getDataValue("approved_at"),
            approvedBy: updated.getDataValue("approved_by"),
        });
    }
    async findById(id: string, relation = false): Promise<GeneralData> {
        const generalData = await GeneralDataDB.findByPk(id, {
            include: relation
                ? [
                    { model: CustomerDB, as: "customer" },
                    {
                        model: InspectionDataDB,
                        as: "inspectionDatum",
                        include: [
                            {
                                model: InspectionDataItemDB,
                                as: "items",
                            },
                        ],
                    },
                    {
                        model: MachineCheckDB,
                        as: "machineCheck",
                    },
                    {
                        model: AccuracyCheckDB,
                        as: "accuracyCheck",
                    },
                    {
                        model: ResumeCheckDB,
                        as: "resumeCheck",
                    },
                ]
                : undefined,
        });
        if (!generalData) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "General Data Not Found",
            });
        }
        return GeneralData.create({
            id: generalData.getDataValue("id"),
            customerId: generalData.getDataValue("customer_id"),
            personInCharge: generalData.getDataValue("person_in_charge"),
            inspectionDate: generalData.getDataValue("inspection_date"),
            inspectorId: generalData.getDataValue("inspector_id"),
            createdAt: generalData.getDataValue("created_at"),
            updatedAt: generalData.getDataValue("updated_at"),
            deletedAt: generalData.getDataValue("deleted_at"),
            lastStep: generalData.getDataValue("last_step"),
            submittedAt: generalData.getDataValue("submitted_at"),
            approvedAt: generalData.getDataValue("approved_at"),
            approvedBy: generalData.getDataValue("approved_by"),
            customer:
                relation && generalData.customer
                    ? {
                        id: generalData.customer.getDataValue("id"),
                        customerId: generalData.customer.getDataValue("customer_id"),
                        customerName: generalData.customer.getDataValue("customer_name"),
                        address: generalData.customer.getDataValue("address"),
                        phone: generalData.customer.getDataValue("phone"),
                        parallelism1Path: generalData.customer.getDataValue("parallelism1_path"),
                        parallelism2Path: generalData.customer.getDataValue("parallelism2_path"),
                        gibClearance1Path: generalData.customer.getDataValue("gib_clearance1_path"),
                        gibClearance2Path: generalData.customer.getDataValue("gib_clearance2_path"),
                        perpendicularity1Path: generalData.customer.getDataValue("perpendicularity1_path"),
                        perpendicularity2Path: generalData.customer.getDataValue("perpendicularity2_path"),
                        createdAt: generalData.customer.getDataValue("created_at"),
                        updatedAt: generalData.customer.getDataValue("updated_at"),
                        deletedAt: generalData.customer.getDataValue("deleted_at"),
                    }
                    : undefined,
            inspectionDatum:
                relation && generalData.inspectionDatum
                    ? generalData.inspectionDatum.map((item) => ({
                        id: item.getDataValue("id"),
                        name: item.getDataValue("name"),
                        order: item.getDataValue("order"),
                        generalDataId: item.getDataValue("general_data_id"),
                        items: item.items.map((i) => ({
                            id: i.getDataValue("id"),
                            name: i.getDataValue("name"),
                            determination: i.getDataValue("determination"),
                            hasNote: i.getDataValue("has_note"),
                            notes: i.getDataValue("notes"),
                            backlash: i.getDataValue("backlash"),
                            r: i.getDataValue("r"),
                            s: i.getDataValue("s"),
                        })),
                        createdAt: item.getDataValue("created_at"),
                        updatedAt: item.getDataValue("updated_at"),
                    }))
                    : undefined,
            machineCheck:
                relation && generalData.machineCheck
                    ? {
                        id: generalData.machineCheck.getDataValue("id"),
                        generalDataId: generalData.machineCheck.getDataValue("general_data_id"),
                        idleAmp: generalData.machineCheck.getDataValue("idle_amp"),
                        runningAmp: generalData.machineCheck.getDataValue("running_amp"),
                        runningDuration: generalData.machineCheck.getDataValue("running_duration"),
                        runningTimes: generalData.machineCheck.getDataValue("running_times"),
                        clearanceTotal: generalData.machineCheck.getDataValue("clearance_total"),
                        clearancePoint: generalData.machineCheck.getDataValue("clearance_point"),
                        p: generalData.machineCheck.getDataValue("p"),
                        actual: generalData.machineCheck.getDataValue("actual"),
                        determinationResult: generalData.machineCheck.getDataValue("determination_result"),
                        slideUpAmp: generalData.machineCheck.getDataValue("slide_up_amp"),
                        slideDownAmp: generalData.machineCheck.getDataValue("slide_down_amp"),
                        prlsmBlstrSlide: generalData.machineCheck.getDataValue("prlsm_blstr_slide"),
                        test1: generalData.machineCheck.getDataValue("test1"),
                        test2: generalData.machineCheck.getDataValue("test2"),
                        test3: generalData.machineCheck.getDataValue("test3"),
                        test4: generalData.machineCheck.getDataValue("test4"),
                        test5: generalData.machineCheck.getDataValue("test5"),
                        test6: generalData.machineCheck.getDataValue("test6"),
                        test7: generalData.machineCheck.getDataValue("test7"),
                        test8: generalData.machineCheck.getDataValue("test8"),
                        test9: generalData.machineCheck.getDataValue("test9"),
                        test10: generalData.machineCheck.getDataValue("test10"),
                        createdAt: generalData.machineCheck.getDataValue("created_at"),
                        updatedAt: generalData.machineCheck.getDataValue("updated_at"),
                    }
                    : undefined,
            accuracyCheck:
                relation && generalData.accuracyCheck
                    ? {
                        id: generalData.accuracyCheck.getDataValue("id"),
                        generalDataId: generalData.accuracyCheck.getDataValue("general_data_id"),
                        unit: generalData.accuracyCheck.getDataValue("unit"),
                        balancerAirPsr: generalData.accuracyCheck.getDataValue("balancer_air_psr"),
                        prlAdj_0A: generalData.accuracyCheck.getDataValue("prl_adj_0_a"),
                        prlAdj_0B: generalData.accuracyCheck.getDataValue("prl_adj_0_b"),
                        prlAdj_0C: generalData.accuracyCheck.getDataValue("prl_adj_0_c"),
                        prlAdj_0D: generalData.accuracyCheck.getDataValue("prl_adj_0_d"),
                        prlAdj_180A: generalData.accuracyCheck.getDataValue("prl_adj_180_a"),
                        prlAdj_180B: generalData.accuracyCheck.getDataValue("prl_adj_180_b"),
                        prlAdj_180C: generalData.accuracyCheck.getDataValue("prl_adj_180_c"),
                        prlAdj_180D: generalData.accuracyCheck.getDataValue("prl_adj_180_d"),
                        prlActVlv: generalData.accuracyCheck.getDataValue("prl_act_vlv"),
                        prlAllowance: generalData.accuracyCheck.getDataValue("prl_allowance"),
                        prlJudgement: generalData.accuracyCheck.getDataValue("prl_judgement"),
                        gibAdj_0A: generalData.accuracyCheck.getDataValue("gib_adj_0_a"),
                        gibAdj_0B: generalData.accuracyCheck.getDataValue("gib_adj_0_b"),
                        gibAdj_0C: generalData.accuracyCheck.getDataValue("gib_adj_0_c"),
                        gibAdj_0D: generalData.accuracyCheck.getDataValue("gib_adj_0_d"),
                        gibAdj_180A: generalData.accuracyCheck.getDataValue("gib_adj_180_a"),
                        gibAdj_180B: generalData.accuracyCheck.getDataValue("gib_adj_180_b"),
                        gibAdj_180C: generalData.accuracyCheck.getDataValue("gib_adj_180_c"),
                        gibAdj_180D: generalData.accuracyCheck.getDataValue("gib_adj_180_d"),
                        gibActVlv: generalData.accuracyCheck.getDataValue("gib_act_vlv"),
                        gibAllowance: generalData.accuracyCheck.getDataValue("gib_allowance"),
                        gibJudgement: generalData.accuracyCheck.getDataValue("gib_judgement"),
                        ppdcltSlideStroke: generalData.accuracyCheck.getDataValue("ppdclt_slide_stroke"),
                        ppdcltAdjLrA: generalData.accuracyCheck.getDataValue("ppdclt_adj_lr_a"),
                        ppdcltAdjLrB: generalData.accuracyCheck.getDataValue("ppdclt_adj_lr_b"),
                        ppdcltAdjLrC: generalData.accuracyCheck.getDataValue("ppdclt_adj_lr_c"),
                        ppdcltAdjLrD: generalData.accuracyCheck.getDataValue("ppdclt_adj_lr_d"),
                        ppdcltAdjFrA: generalData.accuracyCheck.getDataValue("ppdclt_adj_fr_a"),
                        ppdcltAdjFrB: generalData.accuracyCheck.getDataValue("ppdclt_adj_fr_b"),
                        ppdcltAdjFrC: generalData.accuracyCheck.getDataValue("ppdclt_adj_fr_c"),
                        ppdcltAdjFrD: generalData.accuracyCheck.getDataValue("ppdclt_adj_fr_d"),
                        ppdcltLrActValue: generalData.accuracyCheck.getDataValue("ppdclt_lr_act_value"),
                        ppdcltLrAllowance: generalData.accuracyCheck.getDataValue("ppdclt_lr_allowance"),
                        ppdcltLrJudgement: generalData.accuracyCheck.getDataValue("ppdclt_lr_judgement"),
                        ppdcltFrActValue: generalData.accuracyCheck.getDataValue("ppdclt_fr_act_value"),
                        ppdcltFrAllowance: generalData.accuracyCheck.getDataValue("ppdclt_fr_allowance"),
                        ppdcltFrJudgement: generalData.accuracyCheck.getDataValue("ppdclt_fr_judgement"),
                        ttlClrActValue: generalData.accuracyCheck.getDataValue("ttl_clr_act_value"),
                        ttlClrActValve: generalData.accuracyCheck.getDataValue("ttl_clr_act_valve"),
                        ttlClrAllowance: generalData.accuracyCheck.getDataValue("ttl_clr_allowance"),
                        ttlClrJudgement: generalData.accuracyCheck.getDataValue("ttl_clr_judgement"),
                        createdAt: generalData.accuracyCheck.getDataValue("created_at"),
                        updatedAt: generalData.accuracyCheck.getDataValue("updated_at"),
                    }
                    : undefined,
            resumeCheck:
                relation && generalData.resumeCheck
                    ? {
                        id: generalData.resumeCheck.getDataValue("id"),
                        checkDate: generalData.resumeCheck.getDataValue("checkDate"),
                        photoPath: generalData.resumeCheck.getDataValue("photoPath"),
                        notes: generalData.resumeCheck.getDataValue("notes"),
                        recommendation: generalData.resumeCheck.getDataValue("recommendation"),
                        generalDataId: generalData.resumeCheck.getDataValue("generalDataId"),
                        createdAt: generalData.resumeCheck.getDataValue("created_at"),
                        updatedAt: generalData.resumeCheck.getDataValue("updated_at"),
                    }
                    : undefined,
        });
    }
    async store(generalData: GeneralData): Promise<GeneralData> {
        const created = await GeneralDataDB.create({
            id: generalData.id,
            customer_id: generalData.customerId,
            person_in_charge: generalData.personInCharge,
            inspection_date: generalData.inspectionDate,
            inspector_id: generalData.inspectorId,
            last_step: generalData.lastStep,
        });
        return GeneralData.create({
            id: created.getDataValue("id"),
            customerId: created.getDataValue("customer_id"),
            personInCharge: created.getDataValue("person_in_charge"),
            inspectionDate: created.getDataValue("inspection_date"),
            inspectorId: created.getDataValue("inspector_id"),
            createdAt: created.getDataValue("created_at"),
            updatedAt: created.getDataValue("updated_at"),
            deletedAt: created.getDataValue("deleted_at"),
            lastStep: created.getDataValue("last_step"),
            submittedAt: created.getDataValue("submitted_at"),
            approvedAt: created.getDataValue("approved_at"),
            approvedBy: created.getDataValue("approved_by"),
        });
    }
    async getApprovalList(param: TDataTableParam): Promise<TableData<IGeneralData>> {
        const generalData = await GeneralDataDB.findAll({
            attributes: [
                "id",
                "customer_id",
                "inspector_id",
                "person_in_charge",
                "inspection_date",
                "submitted_at",
                "last_step",
                [
                    sequelize.literal("(SELECT users.fullname FROM users WHERE users.id = inspector_id)"),
                    "inspector_name",
                ],
            ],
            where: { submitted_at: { [Op.ne]: null } },
            include: [
                { model: CustomerDB, as: "customer" },
                { model: MachineDatumDB, as: "machineDatum" },
            ],
            order: [["inspection_date", "DESC"]],
            limit: param.limit,
            offset: (param.page || 1) > 1 ? (param.limit || 10) * ((param.page || 1) - 1) : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: generalData.map((item) => ({
                id: item.getDataValue("id"),
                customerId: item.getDataValue("customer_id"),
                personInCharge: item.getDataValue("person_in_charge"),
                inspectionDate: item.getDataValue("inspection_date"),
                inspectorId: item.getDataValue("inspector_id"),
                lastStep: item.getDataValue("last_step"),
                inspectorName: item.getDataValue("inspector_name"),
                machineDatum: item.getDataValue("machineDatum"),
                customer: {
                    customerName: item.customer.customer_name,
                    address: item.customer.address,
                    phone: item.customer.phone,
                    parallelism1Path: item.customer.parallelism1_path,
                    parallelism2Path: item.customer.parallelism2_path,
                    gibClearance1Path: item.customer.gib_clearance1_path,
                    gibClearance2Path: item.customer.gib_clearance2_path,
                    perpendicularity1Path: item.customer.perpendicularity1_path,
                    perpendicularity2Path: item.customer.perpendicularity2_path,
                },
            })),
        });
    }
    async getHistoryReportList(param: TDataTableParam, start: Date, end: Date): Promise<TableData<IGeneralData>> {
        const generalData = await GeneralDataDB.findAll({
            attributes: [
                "id",
                "customer_id",
                "inspector_id",
                "person_in_charge",
                "inspection_date",
                "submitted_at",
                "last_step",
                [
                    sequelize.literal("(SELECT users.fullname FROM users WHERE users.id = inspector_id)"),
                    "inspector_name",
                ],
            ],
            where:
                !start && !end
                    ? { approved_at: { [Op.ne]: null } }
                    : { approved_at: { [Op.ne]: null }, inspection_date: { [Op.between]: [start, end] } },
            include: [
                { model: CustomerDB, as: "customer" },
                { model: MachineDatumDB, as: "machineDatum" },
            ],
            order: [["inspection_date", "DESC"]],
            limit: param.limit,
            offset: (param.page || 1) > 1 ? (param.limit || 10) * ((param.page || 1) - 1) : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: generalData.map((item) => ({
                id: item.getDataValue("id"),
                customerId: item.getDataValue("customer_id"),
                personInCharge: item.getDataValue("person_in_charge"),
                inspectionDate: item.getDataValue("inspection_date"),
                inspectorId: item.getDataValue("inspector_id"),
                lastStep: item.getDataValue("last_step"),
                inspectorName: item.getDataValue("inspector_name"),
                machineDatum: item.getDataValue("machineDatum"),
                customer: {
                    customerName: item.customer.customer_name,
                    address: item.customer.address,
                    phone: item.customer.phone,
                    parallelism1Path: item.customer.parallelism1_path,
                    parallelism2Path: item.customer.parallelism2_path,
                    gibClearance1Path: item.customer.gib_clearance1_path,
                    gibClearance2Path: item.customer.gib_clearance2_path,
                    perpendicularity1Path: item.customer.perpendicularity1_path,
                    perpendicularity2Path: item.customer.perpendicularity2_path,
                },
            })),
        });
    }
}
