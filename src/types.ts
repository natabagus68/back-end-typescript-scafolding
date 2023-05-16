const TYPES = {
    Logger: Symbol.for("Logger"),
    Database: Symbol.for("Database"),
    Server: Symbol.for("Server"),
    HTTPRouter: Symbol.for("HTTPRouter"),

    // Impelementation Domain Service
    UserRepository: Symbol.for("UserRepository"),
    GeneralDataRepository: Symbol.for("GeneralDataRepository"),
    CustomerRepository: Symbol.for("CustomerRepository"),
    MachineDataRepository: Symbol.for("MachineDataRepository"),
    InspectionFormRepository: Symbol.for("InspectionFormRepository"),
    InspectionDataRepository: Symbol.for("InspectionDataRepository"),
    AccuracyCheckRepository: Symbol.for("AccuracyCheckRepository"),
    CheckLoadTonnageRepository: Symbol.for("CheckLoadTonnageRepository"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    MobileAuthService: Symbol.for("MobileAuthService"),
    MobileGeneralDataService: Symbol.for("MobileGeneralDataService"),
    MobileCustomerService: Symbol.for("MobileCustomerService"),
    MobileMachineDataService: Symbol.for("MobileMachineDataService"),
    MobileInspectionFormService: Symbol.for("MobileInspectionFormService"),
    MobileAccuracyCheckService: Symbol.for("MobileAccuracyCheckService"),
    MobileCheckLoadTonnageService: Symbol.for("MobileCheckLoadTonnageService"),
};

export { TYPES };
