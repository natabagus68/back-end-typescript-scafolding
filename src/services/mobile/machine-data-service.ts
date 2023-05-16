import { EGeneralDataLastStep } from "@/domain/models/general-data";
import { IMachineData, MachineData } from "@/domain/models/machine-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { MachineDataRepository } from "@/domain/service/machine-data-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileMachineDataService {
    constructor(
        @inject(TYPES.MachineDataRepository) private _machineDataRepo: MachineDataRepository,
        @inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository
    ) {}
    public async store(param: IMachineData): Promise<IMachineData> {
        const generalData = await this._generalDataRepo.findById(param.generalDataId);
        const machineData = await this._machineDataRepo.store(MachineData.create(param));
        generalData.lastStep = EGeneralDataLastStep.MACHINE_DATA;
        await this._generalDataRepo.update(generalData);
        return machineData.unmarshall();
    }
}
