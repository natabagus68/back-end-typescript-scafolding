import { EGeneralDataLastStep } from "@/domain/models/general-data";
import { IMachineCheck, MachineCheck } from "@/domain/models/machine-check";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { MachineCheckRepository } from "@/domain/service/machine-check-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileMachineCheckService {
    constructor(
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository,
        @inject(TYPES.MachineCheckRepository) private _machineCheckRepo: MachineCheckRepository
    ) {}

    public async store(props: IMachineCheck): Promise<IMachineCheck> {
        const generalData = await this._generalDataRepo.findById(props.generalDataId);
        const machineCheck = await this._machineCheckRepo.store(MachineCheck.create(props));
        generalData.lastStep = EGeneralDataLastStep.MACHINE_CHECK;
        await this._generalDataRepo.update(generalData);
        return machineCheck.unmarshal();
    }
}
