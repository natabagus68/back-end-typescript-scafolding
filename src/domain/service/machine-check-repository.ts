import { MachineCheck } from "../models/machine-check";

export interface MachineCheckRepository {
    store(props: MachineCheck): Promise<MachineCheck>;
}
