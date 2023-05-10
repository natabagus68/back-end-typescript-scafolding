const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),

    Server: Symbol.for("Server"),

    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),
    MobileAuthRepository: Symbol.for("MobileAuthRepository"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    MobileAuthService:Symbol.for("MobileAuthService")
};

export { TYPES };
