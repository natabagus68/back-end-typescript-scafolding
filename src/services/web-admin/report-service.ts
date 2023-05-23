import { ITableData } from "@/domain/models/table-data";
import { GeneralDataRepository } from "@/domain/service/general-data-repository";
import { TDataTableParam } from "@/domain/service/types";
import { IReportDataTable } from "@/dto/general-data-dto";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import Excel from "exceljs";

@injectable()
export class WebadminReportService {
    constructor(@inject(TYPES.GeneralDataRepository) private _generalDataRepo: GeneralDataRepository) {}
    public async dataTableReport(param: TDataTableParam): Promise<ITableData<IReportDataTable>> {
        const generalDatum = await this._generalDataRepo.findApprovedDataTable(param);
        return generalDatum.unmarshal();
    }
    public async download(generalDataId: string): Promise<string> {
        type Country = {
            name: string;
            countryCode: string;
            capital: string;
            phoneIndicator: number;
        };

        const countries: Country[] = [
            { name: "Cameroon", capital: "Yaounde", countryCode: "CM", phoneIndicator: 237 },
            { name: "France", capital: "Paris", countryCode: "FR", phoneIndicator: 33 },
            { name: "United States", capital: "Washington, D.C.", countryCode: "US", phoneIndicator: 1 },
            { name: "India", capital: "New Delhi", countryCode: "IN", phoneIndicator: 91 },
            { name: "Brazil", capital: "Brasília", countryCode: "BR", phoneIndicator: 55 },
            { name: "Japan", capital: "Tokyo", countryCode: "JP", phoneIndicator: 81 },
            { name: "Australia", capital: "Canberra", countryCode: "AUS", phoneIndicator: 61 },
            { name: "Nigeria", capital: "Abuja", countryCode: "NG", phoneIndicator: 234 },
            { name: "Germany", capital: "Berlin", countryCode: "DE", phoneIndicator: 49 },
        ];
        const workbook = new Excel.Workbook();
        const worksheet = workbook.addWorksheet("Countries List");
        const countriesColumns = [
            { key: "name", header: "Name" },
            { key: "countryCode", header: "Country Code" },
            { key: "capital", header: "Capital" },
            { key: "phoneIndicator", header: "International Direct Dialling" },
        ];

        worksheet.columns = countriesColumns;
        countries.forEach((country) => {
            worksheet.addRow(country);
        });
        const fileName = `storage/tmp/${new Date().getMilliseconds()}.xlsx`;
        await workbook.xlsx.writeFile(fileName);
        return fileName;
    }
}
