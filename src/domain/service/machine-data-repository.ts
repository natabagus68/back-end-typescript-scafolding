import { MachineData } from "@/domain/models/machine-data";

export interface MachineDataRepository {
    create(machineData: MachineData): Promise<MachineData>;
}
