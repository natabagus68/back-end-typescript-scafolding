import { InspectionData } from "@/domain/models/inspection-data";
import { InspectionDataRepository } from "@/domain/service/inspection-data-repository";
import { injectable } from "inversify";
import { InspectionData as InspectionDataDB } from "@/infrastructure/database/models/inspection-data-sequelize";
import { InspectionDataItem as InspectionDataItemDB } from "@/infrastructure/database/models/inspection-data-item-sequelize";

@injectable()
export class InspectionDataSequelizeRepository implements InspectionDataRepository {
    async store(param: InspectionData[]): Promise<InspectionData[]> {
        const created = await InspectionDataDB.bulkCreate(
            param.map((item) => ({
                id: item.id,
                name: item.name,
                order: item.order,
                items: item.items.map((inspectionItem) => ({
                    id: inspectionItem.id,
                    name: inspectionItem.name,
                    determination: inspectionItem.determination,
                    has_note: inspectionItem.hasNote,
                    notes: inspectionItem.notes,
                    backlash: inspectionItem.backlash,
                    r: inspectionItem.r,
                    s: inspectionItem.s,
                    inspection_data_id: inspectionItem.inspectionDataId,
                })),
                general_data_id: item.generalDataId,
            })),
            {
                include: [
                    {
                        model: InspectionDataItemDB,
                        as: "items",
                    },
                ],
            }
        );
        return created.map((item) =>
            InspectionData.create({
                id: item.id,
                name: item.name,
                order: item.order,
                generalDataId: item.general_data_id,
                items: (item.items || [])?.map((inspectionItem) => ({
                    id: inspectionItem.id,
                    name: inspectionItem.name,
                    determination: inspectionItem.determination,
                    hasNote: inspectionItem.has_note,
                    notes: inspectionItem.notes,
                    backlash: inspectionItem.backlash,
                    r: inspectionItem.r,
                    s: inspectionItem.s,
                    inspectionDataId: inspectionItem.inspection_data_id,
                    createdAt: inspectionItem.created_at,
                    updatedAt: inspectionItem.updated_at,
                })),
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            })
        );
    }
}
