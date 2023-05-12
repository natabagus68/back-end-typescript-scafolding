import { MobileCustomerService } from "@/services/mobile/customer-service";
import { TYPES } from "@/types";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class MobileCustomerController {
    constructor(
        @inject(TYPES.MobileCustomerService)
        private _service: MobileCustomerService
    ) {}
    public async getOptions(req: Request, res: Response): Promise<Response> {
        const data = await this._service.getOptionData();
        return res.json({
            message: "success",
            data,
        });
    }
}
