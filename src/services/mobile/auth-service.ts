import { IAuth } from "@/domain/models/auth";
import { MobileAuthRepository } from "@/domain/service/mobile/auth-repository";
import { MobileLoginDto } from "@/dto/mobile/auth-dto";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";

@injectable()
export class MobileAuthService {
    constructor(
        @inject(TYPES.MobileAuthRepository)
        private _repository: MobileAuthRepository
    ) {}
    public async login(credential: MobileLoginDto): Promise<IAuth> {
        const auth = await this._repository.login(credential);
        return auth.unmarshal();
    }
}
