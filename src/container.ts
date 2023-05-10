import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { UserRoutes } from "@/presentation/routes/user-routes";
import { MobileAuthRoute } from "./presentation/routes/mobile/auth-route";

// Domain Service
import { UserRepository } from "@/domain/service/user-repository";
import { MobileAuthRepository } from "./domain/service/mobile/auth-repository";

// Domain Service / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";
import { MobileAuthSequelizeRepository } from "./persistence/repository/mobile/auth-sequelize-repository";

// Service Implementation
import { UserService } from "@/services/user-service";
import { MobileAuthService } from "./services/mobile/auth-service";
// Controller
import UserController from "@/presentation/controllers/user-controller";
import { MobileAuthController } from "./presentation/controllers/mobile/auth-controller";
// Bootstrap / kernel
import { IServer, Server } from "@/presentation/server";

const container = new Container();

// Kernel Bootstrap
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope();

// Middleware And Router
container.bind<Routes>(Routes).toSelf().inSingletonScope();
container.bind<UserRoutes>(UserRoutes).toSelf().inSingletonScope();
container.bind<MobileAuthRoute>(MobileAuthRoute).toSelf().inSingletonScope();
// Service Layer
container.bind(TYPES.UserService).to(UserService);
container.bind(TYPES.MobileAuthService).to(MobileAuthService);
// Controller
container.bind(UserController).to(UserController);
container.bind(MobileAuthController).to(MobileAuthController);
// implement infrastructur
container
    .bind<UserRepository>(TYPES.UserRepository)
    .to(UserSequelizeRepository);
container
    .bind<MobileAuthRepository>(TYPES.MobileAuthRepository)
    .to(MobileAuthSequelizeRepository);
export { container };
