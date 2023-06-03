import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { UserRoutes } from "@/presentation/routes/web-admin/user-routes";
import { WebadminAuthRoute } from "./presentation/routes/web-admin/auth-route";

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";

// Domain Repository / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";

// Service Implementation
import { UserService } from "@/services/web-admin/user-service";
import { WebadminAuthService } from "./services/web-admin/auth-service";

// Controller
import UserController from "@/presentation/controllers/web-admin/user-controller";
import { WebadminAuthController } from "./presentation/controllers/web-admin/auth-controller";

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
container.bind<WebadminAuthRoute>(WebadminAuthRoute).toSelf().inSingletonScope();

// Service Layer
// Mobile Service
container.bind(TYPES.UserService).to(UserService);

// Web Admin Service
container.bind(TYPES.WebadminAuthService).to(WebadminAuthService);

// Controller
container.bind(UserController).toSelf();
container.bind(WebadminAuthController).toSelf();

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container.bind<UserRepository>(TYPES.UserRepository).to(UserSequelizeRepository);

export { container };
