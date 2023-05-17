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

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";
import { GeneralDataRepository } from "./domain/service/general-data-repository";
import { CustomerRepository } from "./domain/service/customer-repository";
import { MachineDataRepository } from "./domain/service/machine-data-repository";
import { InspectionFormRepository } from "./domain/service/inspection-form-repository";
import { InspectionDataRepository } from "./domain/service/inspection-data-repository";

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

// Service Implementation
import { UserService } from "@/services/user-service";
import { MobileGeneralDataService } from "./services/mobile/general-data-service";
import { MobileAuthService } from "./services/mobile/auth-service";
import { MobileCustomerService } from "./services/mobile/customer-service";
import { CustomerSequelizeRepository } from "./persistence/repository/customer-sequelize-repository";
import { MobileMachineDataService } from "./services/mobile/machine-data-service";
import { MobileInspectionFormService } from "./services/mobile/inspection-form-service";
import { MobileAccuracyCheckService } from "./services/mobile/accuracy-check-service";
import { MobileCheckLoadTonnageService } from "./services/mobile/check-load-tonnage-service";
import { MobileMachineCheckService } from "./services/mobile/machine-check-service";
import { MobileResumeCheckService } from "./services/mobile/resume-check-service";
import { MobileReviewService } from "./services/mobile/review-service";

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

// Service Layer
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

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container.bind<UserRepository>(TYPES.UserRepository).to(UserSequelizeRepository);
container.bind<GeneralDataRepository>(TYPES.GeneralDataRepository).to(GeneralDataSequelizeRepository);
container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerSequelizeRepository);
container.bind<MachineDataRepository>(TYPES.MachineDataRepository).to(MachineDataSequelizeRepository);
container.bind<InspectionFormRepository>(TYPES.InspectionFormRepository).to(InspectionFormSequelizeRepository);
container.bind<InspectionDataRepository>(TYPES.InspectionDataRepository).to(InspectionDataSequelizeRepository);
container.bind<AccuracyCheckRepository>(TYPES.AccuracyCheckRepository).to(AccuracyCheckSequelizeRepository);
container.bind<CheckLoadTonnageRepository>(TYPES.CheckLoadTonnageRepository).to(CheckLoadTonnageSequelizeRepository);
container.bind<MachineCheckRepository>(TYPES.MachineCheckRepository).to(MachineCheckSequelizeRepository);
container.bind<ResumeCheckRepository>(TYPES.ResumeCheckRepository).to(ResumeCheckSequelizeRepository);

export { container };
