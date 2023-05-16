import { AccuracyCheck } from "@/domain/models/accuracy-check";

export interface AccuracyCheckRepository {
    store(accuracyCheck: AccuracyCheck): Promise<AccuracyCheck>;
}
