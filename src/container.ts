import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { UserRoutes } from "@/presentation/routes/user-routes";
import { MobileAuthRoute } from "./presentation/routes/mobile/auth-route";
import { MobileGeneralDataRoute } from "./presentation/routes/mobile/general-data-route";
import { MobileCustomerRoute } from "./presentation/routes/mobile/customer-route";

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";
import { MobileGeneralDataRepository } from "./domain/service/general-data-repository";
import { CustomerRepository } from "./domain/service/customer-repository";

// Domain Repository / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";
import { MobileGeneralDataSequelizeRepository } from "./persistence/repository/general-data-sequelize-repository";

// Service Implementation
import { UserService } from "@/services/user-service";
import { MobileGeneralDataService } from "./services/mobile/general-data-service";
import { MobileAuthService } from "./services/mobile/auth-service";
import { MobileCustomerService } from "./services/mobile/customer-service";
import { CustomerSequelizeRepository } from "./persistence/repository/customer-sequelize-repository";

// Controller
import UserController from "@/presentation/controllers/user-controller";
import { MobileAuthController } from "./presentation/controllers/mobile/auth-controller";
import { MobileGeneralDataController } from "./presentation/controllers/mobile/general-data-controller";
import { MobileCustomerController } from "./presentation/controllers/mobile/customer-controller";

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
container
    .bind<MobileGeneralDataRoute>(MobileGeneralDataRoute)
    .toSelf()
    .inSingletonScope();
container
    .bind<MobileCustomerRoute>(MobileCustomerRoute)
    .toSelf()
    .inSingletonScope();

// Service Layer
container.bind(TYPES.MobileAuthService).to(MobileAuthService);
container.bind(TYPES.UserService).to(UserService);
container.bind(TYPES.MobileGeneralDataService).to(MobileGeneralDataService);
container.bind(TYPES.MobileCustomerService).to(MobileCustomerService);

// Controller
container.bind(UserController).toSelf();
container.bind(MobileAuthController).toSelf();
container.bind(MobileGeneralDataController).toSelf();
container.bind(MobileCustomerController).toSelf();

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container
    .bind<UserRepository>(TYPES.UserRepository)
    .to(UserSequelizeRepository);
container
    .bind<MobileGeneralDataRepository>(TYPES.GeneralDataRepository)
    .to(MobileGeneralDataSequelizeRepository);
container
    .bind<CustomerRepository>(TYPES.CustomerRepository)
    .to(CustomerSequelizeRepository);
export { container };
