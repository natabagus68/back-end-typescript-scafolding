import { GeneralData } from "@/domain/models/general-data";
import { MobileGeneralDataRepository } from "@/domain/service/general-data-repository";
import { GeneralData as GeneralDataDB } from "@/infrastructure/database/models/general-data";
import { injectable } from "inversify";

@injectable()
export class MobileGeneralDataSequelizeRepository
    implements MobileGeneralDataRepository
{
    async create(generalData: GeneralData): Promise<GeneralData> {
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
