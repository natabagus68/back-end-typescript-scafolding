import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "./web-admin/user-routes";
import { WebadminAuthRoute } from "./web-admin/auth-route";

@injectable()
export class Routes {
    constructor(
        private userRoutes: UserRoutes,
        private webadminAuthRoute: WebadminAuthRoute,
    ) {}

    public setRoutes(router: Router) {
        this.userRoutes.setRoutes(router);
        this.webadminAuthRoute.setRoutes(router);
    }
}
