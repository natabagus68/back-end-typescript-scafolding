import { CheckLoadTonnage } from "@/domain/models/check-load-tonnage";
import { CheckLoadTonnageRepository } from "@/domain/service/check-load-tonnage-repository";
import { CheckLoadTonnage as CheckLoadTonnageDB } from "@/infrastructure/database/models";
import { injectable } from "inversify";

@injectable()
export class CheckLoadTonnageSequelizeRepository implements CheckLoadTonnageRepository {
    async store(param: CheckLoadTonnage[]): Promise<CheckLoadTonnage[]> {
        const created = await CheckLoadTonnageDB.bulkCreate(
            param.map((item) => ({
                id: item.id,
                name: item.name,
                lf_act_load: item.lfActLoad,
                lf_load_monitor: item.lfLoadMonitor,
                lr_act_load: item.lrActLoad,
                lr_load_monitor: item.lrLoadMonitor,
                rf_act_load: item.rfActLoad,
                rf_load_monitor: item.rfLoadMonitor,
                rr_act_load: item.rrActLoad,
                rr_load_monitor: item.rrLoadMonitor,
                total_act_load: item.totalActLoad,
                total_load_monitor: item.totalLoadMonitor,
                die_height: item.dieHeight,
                general_data_id: item.generalDataId,
            }))
        );
        return created.map((item) =>
            CheckLoadTonnage.create({
                id: item.id,
                name: item.name,
                lfActLoad: item.lf_act_load,
                lfLoadMonitor: item.lf_load_monitor,
                lrActLoad: item.lr_act_load,
                lrLoadMonitor: item.lr_load_monitor,
                rfActLoad: item.rf_act_load,
                rfLoadMonitor: item.rf_load_monitor,
                rrActLoad: item.rr_act_load,
                rrLoadMonitor: item.rr_load_monitor,
                totalActLoad: item.total_act_load,
                totalLoadMonitor: item.total_load_monitor,
                dieHeight: item.die_height,
                generalDataId: item.general_data_id,
                createdAt: item.created_at,
                updatedAt: item.updated_at,
            })
        );
    }
}
