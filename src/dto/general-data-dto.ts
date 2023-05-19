export interface IGeneralDataDataTable {
    id?: string;
    inspectionDate: Date;
    customerName: string;
    machineName: string;
    inspectorName: string;
}

export interface IGeneralDataReportDetail {
    inspectionId: string;
    inspectionDate: string;
    confirmationDate: string;
    inspector: string;
    customer: {
        name: string;
        phone: string;
        address: string;
        personInCharge: string;
    };
    machine: {
        type: string;
        serialNo: string;
        mfgDate: string;
        capacity: string;
        slideStroke: string;
        strokePerMinute: string;
        dieHeight: string;
        slideAdjustment: string;
        dimentionAreaBlobster: string;
        dimentionAreaSlide: string;
    };
}

export enum EGeneralDataStatus {
    CONFIRMED = "CONFIRMED",
    WAITING = "WAITING",
    ALL_STATUS = "ALL_STATUS",
}

export interface IApprovalDataTable {
    id?: string;
    inspectionId: string;
    inspectionDate: string;
    customerName: string;
    machineName: string;
    status: EGeneralDataStatus;
}
