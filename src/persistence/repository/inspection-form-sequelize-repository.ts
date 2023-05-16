import { injectable } from "inversify";
import { InspectionFormRepository } from "@/domain/service/inspection-form-repository";
import { InspectionForm } from "@/domain/models/inspection-form";
import { InspectionForm as InspectionFormDB } from "@/infrastructure/database/models";
import { InspectionFormItem as InspectionFormItemDB } from "@/infrastructure/database/models";
import { InspectionFormItem } from "@/domain/models/inspection-form-item";

@injectable()
export class InspectionFormSequelizeRepository implements InspectionFormRepository {
    async getForm(): Promise<InspectionForm[]> {
        const inspectionForms = await InspectionFormDB.findAll({
            include: [
                {
                    model: InspectionFormItemDB,
                    as: "items",
                },
            ],
        });
        const result = inspectionForms.map((form) =>
            InspectionForm.create({
                id: form.getDataValue("id"),
                name: form.getDataValue("name"),
                order: form.getDataValue("order"),
                items: (form.items || []).map((formItem) => ({
                    id: formItem.getDataValue("id"),
                    name: formItem.getDataValue("name"),
                    information: formItem.getDataValue("information"),
                    hasNote: formItem.getDataValue("has_note"),
                    createdAt: formItem.getDataValue("created_at"),
                    updatedAt: formItem.getDataValue("updated_at"),
                })),
                createdAt: form.getDataValue("created_at"),
                updatedAt: form.getDataValue("updated_at"),
            })
        );
        return result;
    }
    store(param: InspectionForm[]): Promise<InspectionForm[]> {
        throw new Error("Method not implemented.");
    }
}
