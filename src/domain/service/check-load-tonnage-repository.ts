import { CheckLoadTonnage } from "@/domain/models/check-load-tonnage";

export interface CheckLoadTonnageRepository {
    store(param: CheckLoadTonnage[]): Promise<CheckLoadTonnage[]>;
}