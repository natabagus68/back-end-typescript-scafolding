import { EGeneralDataStatus } from "@/dto/general-data-dto";

export type TDataTableParam = {
    search?: string;
    page?: number;
    limit?: number;
};

export type TDataTableParamFilterDate = {
    search?: string;
    page?: number;
    limit?: number;
    filterDate?: string;
};

export type TApprovalDataTableParam = TDataTableParam & {
    status: EGeneralDataStatus;
};
