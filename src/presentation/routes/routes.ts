import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "./user-routes";
import { MobileAuthRoute } from "./mobile/auth-route";

@injectable()
export class Routes {
    constructor(
        private userRoutes: UserRoutes,
        private mobileAuthRoute: MobileAuthRoute
    ) {}

    public setRoutes(router: Router) {
        this.userRoutes.setRoutes(router);
        this.mobileAuthRoute.setRoutes(router);
    }
}
