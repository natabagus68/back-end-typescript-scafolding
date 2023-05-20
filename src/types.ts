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
    MachineCheckRepository: Symbol.for("MachineCheckRepository"),
    ResumeCheckRepository: Symbol.for("ResumeCheckRepository"),
    NotificationRepository: Symbol.for("NotificationRepository"),
    InspectionResultRepository: Symbol.for("InspectionResult"),

    // Service Layer
    UserService: Symbol.for("UserService"),
    MobileAuthService: Symbol.for("MobileAuthService"),
    MobileGeneralDataService: Symbol.for("MobileGeneralDataService"),
    MobileCustomerService: Symbol.for("MobileCustomerService"),
    MobileMachineDataService: Symbol.for("MobileMachineDataService"),
    MobileInspectionFormService: Symbol.for("MobileInspectionFormService"),
    MobileAccuracyCheckService: Symbol.for("MobileAccuracyCheckService"),
    MobileCheckLoadTonnageService: Symbol.for("MobileCheckLoadTonnageService"),
    MobileMachineCheckService: Symbol.for("MobileMachineCheckService"),
    MobileResumeCheckService: Symbol.for("MobileResumeCheckService"),
    MobileReviewService: Symbol.for("MobileReviewService"),
    MobileApprovalService: Symbol.for("MobileApprovalService"),
    MobileNotificationService: Symbol.for("MobileNotificationService"),
    MobileHistoryReportService: Symbol.for("MobileHistoryReportService"),
    MobileProfileService: Symbol.for("MobileProfileService"),
    WebadminAuthService: Symbol.for("WebadminAuthService"),
    WebadminReportService: Symbol.for("WebadminReportService"),
    WebAdminCustomerService: Symbol.for("WebAdminCustomerService"),
    WebadminApprovalService: Symbol.for("WebadminApprovalService"),
    WebadminInspectionResultService: Symbol.for("WebadminInspectionResultService"),
};

export { TYPES };
