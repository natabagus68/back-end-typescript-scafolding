import { InspectionResult } from "@/domain/models/inspection-result";
import { InspectionResultRepository } from "@/domain/service/inspection-result-repository";
import { injectable } from "inversify";
import { InspectionResult as InspectionResultDB } from "@/infrastructure/database/models/inspection-result-sequelize";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";

@injectable()
export class InspectionResultSequelizeRepository implements InspectionResultRepository {
    async findAll(): Promise<InspectionResult[]> {
        const inspectionResults = await InspectionResultDB.findAll();
        return inspectionResults.map((item) => InspectionResult.create(item.toJSON()));
    }
    async findById(id: string): Promise<InspectionResult> {
        const inspectionResult = await InspectionResultDB.findByPk(id);
        if (!inspectionResult) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Inspection Result Not Found",
            });
        }
        return InspectionResult.create(inspectionResult.toJSON());
    }
    show(id: string): Promise<InspectionResult> {
        throw new Error("Method not implemented.");
    }
    store(props: InspectionResult): Promise<InspectionResult> {
        throw new Error("Method not implemented.");
    }
    update(props: InspectionResult): Promise<InspectionResult> {
        throw new Error("Method not implemented.");
    }
    destroy(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
