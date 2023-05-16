import { GeneralData } from "@/domain/models/general-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { GeneralData as GeneralDataDB } from "@/infrastructure/database/models";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";

@injectable()
export class GeneralDataSequelizeRepository implements GeneralDataRepository {
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
    async findById(id: string): Promise<GeneralData> {
        const generalData = await GeneralDataDB.findByPk(id);
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
}
