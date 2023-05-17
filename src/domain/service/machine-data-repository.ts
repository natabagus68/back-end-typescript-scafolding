import { MachineData } from "@/domain/models/machine-data";

export interface MachineDataRepository {
    store(machineData: MachineData): Promise<MachineData>;
    update(machineData:MachineData):Promise<MachineData>
}
