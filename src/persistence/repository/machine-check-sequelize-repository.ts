import { MachineCheck } from "@/domain/models/machine-check";
import { MachineCheckRepository } from "@/domain/service/machine-check-repository";
import { MachineCheck as MachineCheckDB } from "@/infrastructure/database/models";
import { injectable } from "inversify";

@injectable()
export class MachineCheckSequelizeRepository implements MachineCheckRepository {
    async store(props: MachineCheck): Promise<MachineCheck> {
        const created = await MachineCheckDB.create({
            id: props.id,
            general_data_id: props.generalDataId,
            idle_amp: props.idleAmp,
            running_amp: props.runningAmp,
            running_duration: props.runningDuration,
            running_times: props.runningTimes,
            clearance_total: props.clearanceTotal,
            clearance_point: props.clearancePoint,
            p: props.p,
            actual: props.actual,
            determination_result: props.determinationResult,
            slide_up_amp: props.slideUpAmp,
            slide_down_amp: props.slideDownAmp,
            prlsm_blstr_slide: props.prlsmBlstrSlide,
            test1: props.test1,
            test2: props.test2,
            test3: props.test3,
            test4: props.test4,
            test5: props.test5,
            test6: props.test6,
            test7: props.test7,
            test8: props.test8,
            test9: props.test9,
            test10: props.test10,
        });
        return MachineCheck.create({
            id: created.getDataValue("id"),
            generalDataId: created.getDataValue("general_data_id"),
            idleAmp: created.getDataValue("idle_amp"),
            runningAmp: created.getDataValue("running_amp"),
            runningDuration: created.getDataValue("running_duration"),
            runningTimes: created.getDataValue("running_times"),
            clearanceTotal: created.getDataValue("clearance_total"),
            clearancePoint: created.getDataValue("clearance_point"),
            p: created.getDataValue("p"),
            actual: created.getDataValue("actual"),
            determinationResult: created.getDataValue("determination_result"),
            slideUpAmp: created.getDataValue("slide_up_amp"),
            slideDownAmp: created.getDataValue("slide_down_amp"),
            prlsmBlstrSlide: created.getDataValue("prlsm_blstr_slide"),
            test1: created.getDataValue("test1"),
            test2: created.getDataValue("test2"),
            test3: created.getDataValue("test3"),
            test4: created.getDataValue("test4"),
            test5: created.getDataValue("test5"),
            test6: created.getDataValue("test6"),
            test7: created.getDataValue("test7"),
            test8: created.getDataValue("test8"),
            test9: created.getDataValue("test9"),
            test10: created.getDataValue("test10"),
            createdAt: created.getDataValue("created_at"),
            updatedAt: created.getDataValue("updated_at"),
        });
    }
}
