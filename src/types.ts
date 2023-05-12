const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),
    Server: Symbol.for("Server"),
    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),
    GeneralDataRepository: Symbol.for("GeneralDataRepository"),
    CustomerRepository: Symbol.for("CustomerRepository"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    MobileAuthService: Symbol.for("MobileAuthService"),
    MobileGeneralDataService: Symbol.for("MobileGeneralDataService"),
    MobileCustomerService: Symbol.for("MobileCustomerService"),
};

export { TYPES };
