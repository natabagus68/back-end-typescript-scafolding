import { Auth } from "@/domain/models/auth";
import { MobileLoginDto } from "@/dto/mobile/auth-dto";

export interface MobileAuthRepository {
    login(credential: MobileLoginDto): Promise<Auth>;
}
