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

// Service Implementation
import { UserService } from "@/services/user-service";
import { MobileGeneralDataService } from "./services/mobile/general-data-service";
import { MobileAuthService } from "./services/mobile/auth-service";
import { MobileCustomerService } from "./services/mobile/customer-service";
import { CustomerSequelizeRepository } from "./persistence/repository/customer-sequelize-repository";
import { MobileMachineDataService } from "./services/mobile/machine-data-service";
import { MobileInspectionFormService } from "./services/mobile/inspection-form-service";

// Controller
import UserController from "@/presentation/controllers/user-controller";
import { MobileAuthController } from "./presentation/controllers/mobile/auth-controller";
import { MobileGeneralDataController } from "./presentation/controllers/mobile/general-data-controller";
import { MobileCustomerController } from "./presentation/controllers/mobile/customer-controller";
import { MobileMachineDataController } from "./presentation/controllers/mobile/machine-data-controller";
import { MobileInspectionFormController } from "./presentation/controllers/mobile/inspection-form-controller";

//Middleware
import { MobileAuthMiddleware } from "./presentation/middleware/auth-middleware";

// Bootstrap / kernel
import { IServer, Server } from "@/presentation/server";

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

// Service Layer
container.bind(TYPES.MobileAuthService).to(MobileAuthService);
container.bind(TYPES.UserService).to(UserService);
container.bind(TYPES.MobileGeneralDataService).to(MobileGeneralDataService);
container.bind(TYPES.MobileCustomerService).to(MobileCustomerService);
container.bind(TYPES.MobileMachineDataService).to(MobileMachineDataService);
container.bind(TYPES.MobileInspectionFormService).to(MobileInspectionFormService);

// Controller
container.bind(UserController).toSelf();
container.bind(MobileAuthController).toSelf();
container.bind(MobileGeneralDataController).toSelf();
container.bind(MobileCustomerController).toSelf();
container.bind(MobileMachineDataController).toSelf();
container.bind(MobileInspectionFormController).toSelf();

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container.bind<UserRepository>(TYPES.UserRepository).to(UserSequelizeRepository);
container.bind<GeneralDataRepository>(TYPES.GeneralDataRepository).to(GeneralDataSequelizeRepository);
container.bind<CustomerRepository>(TYPES.CustomerRepository).to(CustomerSequelizeRepository);
container.bind<MachineDataRepository>(TYPES.MachineDataRepository).to(MachineDataSequelizeRepository);
container.bind<InspectionFormRepository>(TYPES.InspectionFormRepository).to(InspectionFormSequelizeRepository);
container.bind<InspectionDataRepository>(TYPES.InspectionDataRepository).to(InspectionDataSequelizeRepository);
export { container };
