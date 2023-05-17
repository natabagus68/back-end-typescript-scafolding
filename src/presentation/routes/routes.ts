import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "./user-routes";
import { MobileAuthRoute } from "./mobile/auth-route";
import { MobileGeneralDataRoute } from "./mobile/general-data-route";
import { MobileCustomerRoute } from "./mobile/customer-route";
import { MobileMachineDataRoute } from "./mobile/machine-data-route";
import { MobileInspectionFormRoute } from "./mobile/inspection-form-route";
import { MobileAccuracyCheckRoute } from "./mobile/accuracy-check-route";
import { MobileCheckLoadTonnageRoute } from "./mobile/check-load-tonnage-route";
import { MobileMachineCheckRoute } from "./mobile/machine-check-route";
import { MobileReviewRoute } from "./mobile/review-route";

@injectable()
export class Routes {
    constructor(
        private userRoutes: UserRoutes,
        private mobileAuthRoute: MobileAuthRoute,
        private mobileGeneralDataRoute: MobileGeneralDataRoute,
        private mobileCustomerRoute: MobileCustomerRoute,
        private mobileMachineDataRoute: MobileMachineDataRoute,
        private mobileInspectionFormRoute: MobileInspectionFormRoute,
        private mobileAccuracyCheckRoute: MobileAccuracyCheckRoute,
        private mobileCheckLoadTonnageRoute: MobileCheckLoadTonnageRoute,
        private mobileMachineCheckRoute: MobileMachineCheckRoute,
        private mobileReviewRoute: MobileReviewRoute
    ) {}

    public setRoutes(router: Router) {
        this.userRoutes.setRoutes(router);
        this.mobileAuthRoute.setRoutes(router);
        this.mobileGeneralDataRoute.setRoutes(router);
        this.mobileCustomerRoute.setRoutes(router);
        this.mobileMachineDataRoute.setRoutes(router);
        this.mobileInspectionFormRoute.setRoutes(router);
        this.mobileAccuracyCheckRoute.setRoutes(router);
        this.mobileCheckLoadTonnageRoute.setRoutes(router);
        this.mobileMachineCheckRoute.setRoutes(router);
        this.mobileReviewRoute.setRoutes(router);
    }
}
