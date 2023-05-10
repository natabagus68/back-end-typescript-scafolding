import { User } from "@/domain/models/user";
import { WebAdminLoginDto } from "@/dto/web-admin/auth-dto";

export interface WebAdminAuthRepository {
    login(credential:WebAdminLoginDto):Promise<User>
}