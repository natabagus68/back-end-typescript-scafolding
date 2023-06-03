const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),
    Server: Symbol.for("Server"),
    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    WebadminAuthService: Symbol.for("WebadminAuthService"),
};

export { TYPES };
