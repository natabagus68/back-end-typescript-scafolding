import { ResumeCheck } from "@/domain/models/resume-check";
import { ResumeCheckRepository } from "@/domain/service/resume-check-repository";
import { injectable } from "inversify";
import { ResumeCheck as ResumeCheckDB } from "@/infrastructure/database/models/resume-check-sequelize";

@injectable()
export class ResumeCheckSequelizeRepository implements ResumeCheckRepository {
    async store(props: ResumeCheck): Promise<ResumeCheck> {
        const created = await ResumeCheckDB.create({
            id: props.id,
            check_date: props.checkDate,
            photo_path: props.photoPath,
            notes: props.notes,
            recommendation: props.recommendation,
            general_data_id: props.generalDataId,
        });
        return ResumeCheck.create({
            id: created.getDataValue("id"),
            checkDate: created.getDataValue("check_date"),
            photoPath: created.getDataValue("photo_path"),
            notes: created.getDataValue("notes"),
            recommendation: created.getDataValue("recommendation"),
            generalDataId: created.getDataValue("general_data_id"),
            createdAt: created.getDataValue("created_at"),
            updatedAt: created.getDataValue("updated_at"),
        });
    }
}
