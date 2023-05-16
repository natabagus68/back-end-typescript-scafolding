import { MachineData } from "@/domain/models/machine-data";
import { MachineDataRepository } from "@/domain/service/machine-data-repository";
import { MachineData as MachineDataDB } from "@/infrastructure/database/models";
import { injectable } from "inversify";

@injectable()
export class MachineDataSequelizeRepository implements MachineDataRepository {
    async store(machineData: MachineData): Promise<MachineData> {
        const created = await MachineDataDB.create({
            id: machineData.id,
            machine_type: machineData.machineType,
            serial_no: machineData.serialNo,
            manufacture_date: machineData.manufactureDate,
            capacity: machineData.capacity,
            slide_stroke: machineData.slideStroke,
            stroke_per_minute: machineData.strokePerMinute,
            die_height: machineData.dieHeight,
            slide_adjustment: machineData.slideAdjustment,
            area_bloster_dimention_x: machineData.areaBlosterDimentionX,
            area_bloster_dimention_y: machineData.areaBlosterDimentionY,
            area_slide_dimention_x: machineData.areaSlideDimentionX,
            area_slide_dimention_y: machineData.areaSlideDimentionY,
            crank_press_c: machineData.crankPressC,
            crank_press_h: machineData.crankPressH,
            crankless_press: machineData.cranklessPress,
            knuckle_press: machineData.knucklePress,
            link_press: machineData.linkPress,
            combination_type: machineData.combinationType,
            separate_type: machineData.separateType,
            dry_friction: machineData.dryFriction,
            wet_friction: machineData.wetFriction,
            other: machineData.other,
            intermittent: machineData.intermittent,
            continues: machineData.continues,
            safety_guard: machineData.safetyGuard,
            safety_light: machineData.safetyLight,
            double_solenoid_valve: machineData.doubleSolenoidValve,
            general_data_id: machineData.generalDataId,
        });
        return MachineData.create({
            id: created.id,
            machineType: created.machine_type,
            serialNo: created.serial_no,
            manufactureDate: created.manufacture_date,
            capacity: created.capacity,
            slideStroke: created.slide_stroke,
            strokePerMinute: created.stroke_per_minute,
            dieHeight: created.die_height,
            slideAdjustment: created.slide_adjustment,
            areaBlosterDimentionX: created.area_bloster_dimention_x,
            areaBlosterDimentionY: created.area_bloster_dimention_y,
            areaSlideDimentionX: created.area_slide_dimention_x,
            areaSlideDimentionY: created.area_slide_dimention_y,
            crankPressC: created.crank_press_c,
            crankPressH: created.crank_press_h,
            cranklessPress: created.crankless_press,
            knucklePress: created.knuckle_press,
            linkPress: created.link_press,
            combinationType: created.combination_type,
            separateType: created.separate_type,
            dryFriction: created.dry_friction,
            wetFriction: created.wet_friction,
            other: created.other,
            intermittent: created.intermittent,
            continues: created.continues,
            safetyGuard: created.safety_guard,
            safetyLight: created.safety_light,
            doubleSolenoidValve: created.double_solenoid_valve,
            generalDataId: created.general_data_id,
            createdAt: created.created_at,
            updatedAt: created.updated_at || undefined,
        });
    }
}
