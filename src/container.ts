import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { UserRoutes } from "@/presentation/routes/user-routes";
import { MobileAuthRoute } from "./presentation/routes/mobile/auth-route";
import { MobileGeneralDataRoute } from "./presentation/routes/mobile/general-data-route";
import { MobileCustomerRoute } from "./presentation/routes/mobile/customer-route";
import { MobileMachineDataRoute } from "./presentation/routes/mobile/machine-data-route";
import { MobileInspectionFormRoute } from "./presentation/routes/mobile/inspection-form-route";
import { MobileAccuracyCheckRoute } from "./presentation/routes/mobile/accuracy-check-route";
import { MobileCheckLoadTonnageRoute } from "./presentation/routes/mobile/check-load-tonnage-route";
import { MobileMachineCheckRoute } from "./presentation/routes/mobile/machine-check-route";
import { MobileResumeCheckRoute } from "./presentation/routes/mobile/resume-check-route";
import { MobileReviewRoute } from "./presentation/routes/mobile/review-route";
import { MobileApprovalRoute } from "./presentation/routes/mobile/approval-route";
import { MobileNotificationRoute } from "./presentation/routes/mobile/notification-route";
import { MobileProfileRoute } from "./presentation/routes/mobile/profile-route";
import { MobileHistoryReportRoute } from "./presentation/routes/mobile/history-report-route";
import { WebadminReportRoute } from "./presentation/routes/web-admin/report-route";
import { WebAdminCustomerRoute } from "./presentation/routes/web-admin/customer-route";
import { WebadminApprovalRoute } from "./presentation/routes/web-admin/approval-route";
import { WebadminInspectionResultRoute } from "./presentation/routes/web-admin/inspection-result-route";

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";
import { GeneralDataRepository } from "./domain/service/general-data-repository";
import { CustomerRepository } from "./domain/service/customer-repository";
import { MachineDataRepository } from "./domain/service/machine-data-repository";
import { InspectionFormRepository } from "./domain/service/inspection-form-repository";
import { InspectionDataRepository } from "./domain/service/inspection-data-repository";
import { NotificationRepository } from "./domain/service/notification-repository";
import { InspectionResultRepository } from "./domain/service/inspection-result-repository";

// Domain Repository / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";
import { GeneralDataSequelizeRepository } from "./persistence/repository/general-data-sequelize-repository";
import { MachineDataSequelizeRepository } from "./persistence/repository/machine-data-sequelize-repository";
import { InspectionDataSequelizeRepository } from "./persistence/repository/inspection-data-sequelize-repository";
import { InspectionFormSequelizeRepository } from "./persistence/repository/inspection-form-sequelize-repository";
import { AccuracyCheckSequelizeRepository } from "./persistence/repository/accuracy-check-sequelize-repository";
import { CheckLoadTonnageSequelizeRepository } from "./persistence/repository/load-tonnage-sequelize-repository";
import { MachineCheckSequelizeRepository } from "./persistence/repository/machine-check-sequelize-repository";
import { ResumeCheckSequelizeRepository } from "./persistence/repository/resume-check-sequelize-repository";
import { NotificationSequelizeRepository } from "./persistence/repository/notification-sequelize-repository";
import { CustomerSequelizeRepository } from "./persistence/repository/customer-sequelize-repository";
import { InspectionResultSequelizeRepository } from "./persistence/repository/inspection-result-sequelize-repository";

// Service Implementation
import { UserService } from "@/services/user-service";
import { MobileGeneralDataService } from "./services/mobile/general-data-service";
import { MobileAuthService } from "./services/mobile/auth-service";
import { MobileCustomerService } from "./services/mobile/customer-service";
import { MobileMachineDataService } from "./services/mobile/machine-data-service";
import { MobileInspectionFormService } from "./services/mobile/inspection-form-service";
import { MobileAccuracyCheckService } from "./services/mobile/accuracy-check-service";
import { MobileCheckLoadTonnageService } from "./services/mobile/check-load-tonnage-service";
import { MobileMachineCheckService } from "./services/mobile/machine-check-service";
import { MobileResumeCheckService } from "./services/mobile/resume-check-service";
import { MobileReviewService } from "./services/mobile/review-service";
import { MobileApprovalService } from "./services/mobile/approval-service";
import { MobileHistoryReportService } from "./services/mobile/history-report-service";
import { MobileNotificationService } from "./services/mobile/notification-service";
import { MobileProfileService } from "./services/mobile/profile-service";
import { WebadminReportService } from "./services/web-admin/report-service";
import { WebAdminCustomerService } from "./services/web-admin/customer-service";
import { WebadminApprovalService } from "./services/web-admin/approval-service";
import { WebadminInspectionResultService } from "./services/web-admin/inspection-result-service";

// Controller
import UserController from "@/presentation/controllers/user-controller";
import { MobileAuthController } from "./presentation/controllers/mobile/auth-controller";
import { MobileGeneralDataController } from "./presentation/controllers/mobile/general-data-controller";
import { MobileCustomerController } from "./presentation/controllers/mobile/customer-controller";
import { MobileMachineDataController } from "./presentation/controllers/mobile/machine-data-controller";
import { MobileInspectionFormController } from "./presentation/controllers/mobile/inspection-form-controller";
import { MobileAccuracyCheckController } from "./presentation/controllers/mobile/accuracy-check-controller";
import { MobileCheckLoadTonnageController } from "./presentation/controllers/mobile/check-load-tonnage-controller";
import { MobileMachineCheckController } from "./presentation/controllers/mobile/machine-check-controller";
import { MobileResumeCheckController } from "./presentation/controllers/mobile/resume-check-controller";
import { MobileReviewController } from "./presentation/controllers/mobile/review-controller";
import { MobileApprovalController } from "./presentation/controllers/mobile/approval-controller";
import { MobileNotificationController } from "./presentation/controllers/mobile/notification-controller";
import { MobileProfileController } from "./presentation/controllers/mobile/profile-controller";
import { MobileHistoryReportController } from "./presentation/controllers/mobile/history-report-controller";
import { WebadminReportController } from "./presentation/controllers/web-admin/report-controller";
import { WebAdminCustomerController } from "./presentation/controllers/web-admin/customer-controller";
import { WebadminApprovalController } from "./presentation/controllers/web-admin/approval-controller";
import { WebadminInspectionResultController } from "./presentation/controllers/web-admin/inspection-result-controller";

//Middleware
import { MobileAuthMiddleware } from "./presentation/middleware/auth-middleware";

// Bootstrap / kernel
import { IServer, Server } from "@/presentation/server";
import { ResumeCheckRepository } from "./domain/service/resume-check-repository";
import { AccuracyCheckRepository } from "./domain/service/accuracy-check-repository";
import { CheckLoadTonnageRepository } from "./domain/service/check-load-tonnage-repository";
import { MachineCheckRepository } from "./domain/service/machine-check-repository";

const container = new Container();

// Kernel Bootstrap
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope();

// Router
container.bind<Routes>(Routes).toSelf().inSingletonScope();
container.bind<UserRoutes>(UserRoutes).toSelf().inSingletonScope();
container.bind<MobileAuthRoute>(MobileAuthRoute).toSelf().inSingletonScope();
container.bind<MobileGeneralDataRoute>(MobileGeneralDataRoute).toSelf().inSingletonScope();
container.bind<MobileCustomerRoute>(MobileCustomerRoute).toSelf().inSingletonScope();
container.bind<MobileMachineDataRoute>(MobileMachineDataRoute).toSelf().inSingletonScope();
container.bind<MobileInspectionFormRoute>(MobileInspectionFormRoute).toSelf().inSingletonScope();
container.bind<MobileAccuracyCheckRoute>(MobileAccuracyCheckRoute).toSelf().inSingletonScope();
container.bind<MobileCheckLoadTonnageRoute>(MobileCheckLoadTonnageRoute).toSelf().inSingletonScope();
container.bind<MobileMachineCheckRoute>(MobileMachineCheckRoute).toSelf().inSingletonScope();
container.bind<MobileResumeCheckRoute>(MobileResumeCheckRoute).toSelf().inSingletonScope();
container.bind<MobileReviewRoute>(MobileReviewRoute).toSelf().inSingletonScope();
container.bind<MobileApprovalRoute>(MobileApprovalRoute).toSelf().inSingletonScope();
container.bind<MobileHistoryReportRoute>(MobileHistoryReportRoute).toSelf().inSingletonScope();
container.bind<MobileNotificationRoute>(MobileNotificationRoute).toSelf().inSingletonScope();
container.bind<MobileProfileRoute>(MobileProfileRoute).toSelf().inSingletonScope();
container.bind<WebadminReportRoute>(WebadminReportRoute).toSelf().inSingletonScope();
container.bind<WebAdminCustomerRoute>(WebAdminCustomerRoute).toSelf().inSingletonScope();
container.bind<WebadminApprovalRoute>(WebadminApprovalRoute).toSelf().inSingletonScope();
container.bind<WebadminInspectionResultRoute>(WebadminInspectionResultRoute).toSelf().inSingletonScope();

// Service Layer
// Mobile Service
container.bind(TYPES.MobileAuthService).to(MobileAuthService);
container.bind(TYPES.UserService).to(UserService);
container.bind(TYPES.MobileGeneralDataService).to(MobileGeneralDataService);
container.bind(TYPES.MobileCustomerService).to(MobileCustomerService);
container.bind(TYPES.MobileMachineDataService).to(MobileMachineDataService);
container.bind(TYPES.MobileInspectionFormService).to(MobileInspectionFormService);
container.bind(TYPES.MobileAccuracyCheckService).to(MobileAccuracyCheckService);
container.bind(TYPES.MobileCheckLoadTonnageService).to(MobileCheckLoadTonnageService);
container.bind(TYPES.MobileMachineCheckService).to(MobileMachineCheckService);
container.bind(TYPES.MobileResumeCheckService).to(MobileResumeCheckService);
container.bind(TYPES.MobileReviewService).to(MobileReviewService);
container.bind(TYPES.MobileApprovalService).to(MobileApprovalService);
container.bind(TYPES.MobileHistoryReportService).to(MobileHistoryReportService);
container.bind(TYPES.MobileNotificationService).to(MobileNotificationService);
container.bind(TYPES.MobileProfileService).to(MobileProfileService);

// Web Admin Service
container.bind(TYPES.WebadminReportService).to(WebadminReportService);
container.bind(TYPES.WebAdminCustomerService).to(WebAdminCustomerService);
container.bind(TYPES.WebadminApprovalService).to(WebadminApprovalService);
container.bind(TYPES.WebadminInspectionResultService).to(WebadminInspectionResultService);

// Controller
container.bind(UserController).toSelf();
container.bind(MobileAuthController).toSelf();
container.bind(MobileGeneralDataController).toSelf();
container.bind(MobileCustomerController).toSelf();
container.bind(MobileMachineDataController).toSelf();
container.bind(MobileInspectionFormController).toSelf();
container.bind(MobileAccuracyCheckController).toSelf();
container.bind(MobileCheckLoadTonnageController).toSelf();
container.bind(MobileMachineCheckController).toSelf();
container.bind(MobileResumeCheckController).toSelf();
container.bind(MobileReviewController).toSelf();
container.bind(MobileApprovalController).toSelf();
container.bind(MobileHistoryReportController).toSelf();
container.bind(MobileNotificationController).toSelf();
container.bind(MobileProfileController).toSelf();
container.bind(WebadminReportController).toSelf();
container.bind(WebAdminCustomerController).toSelf();
container.bind(WebadminApprovalController).toSelf();
container.bind(WebadminInspectionResultController).toSelf();

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container.bind<UserRepository>(TYPES.UserRepository).to(UserSequelizeRepository);
container.bind<GeneralDataRepository>(TYPES.GeneralDataRepository).to(GeneralDataSequelizeRepository);
container.bind<MachineDataRepository>(TYPES.MachineDataRepository).to(MachineDataSequelizeRepository);
container.bind<InspectionFormRepository>(TYPES.InspectionFormRepository).to(InspectionFormSequelizeRepository);
container.bind<InspectionDataRepository>(TYPES.InspectionDataRepository).to(InspectionDataSequelizeRepository);
container.bind<AccuracyCheckRepository>(TYPES.AccuracyCheckRepository).to(AccuracyCheckSequelizeRepository);
container.bind<CheckLoadTonnageRepository>(TYPES.CheckLoadTonnageRepository).to(CheckLoadTonnageSequelizeRepository);
container.bind<MachineCheckRepository>(TYPES.MachineCheckRepository).to(MachineCheckSequelizeRepository);
container.bind<ResumeCheckRepository>(TYPES.ResumeCheckRepository).to(ResumeCheckSequelizeRepository);
container.bind<NotificationRepository>(TYPES.NotificationRepository).to(NotificationSequelizeRepository);
container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerSequelizeRepository);
container.bind<InspectionResultRepository>(TYPES.InspectionResultRepository).to(InspectionResultSequelizeRepository);

export { container };
