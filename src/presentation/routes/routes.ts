import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "./user-routes";
import { MobileAuthRoute } from "./mobile/auth-route";
import { MobileGeneralDataRoute } from "./mobile/general-data-route";
import { MobileCustomerRoute } from "./mobile/customer-route";

@injectable()
export class Routes {
    constructor(
        private userRoutes: UserRoutes,
        private mobileAuthRoute: MobileAuthRoute,
        private mobileGeneralDataRoute: MobileGeneralDataRoute,
        private mobileCustomerRoute: MobileCustomerRoute
    ) {}

    public setRoutes(router: Router) {
        this.userRoutes.setRoutes(router);
        this.mobileAuthRoute.setRoutes(router);
        this.mobileGeneralDataRoute.setRoutes(router);
        this.mobileCustomerRoute.setRoutes(router);
    }
}
