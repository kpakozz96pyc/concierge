
import { TaxInformationImportStatus } from "./enums/tax-information-import-status";
import { ReportData } from "../reports/report-data";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TaxInformationImportId = string;

export class TaxInformationImport {

    static $name = "TaxInformationImport";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationImport, ALF.Shared.Dto"

    id: TaxInformationImportId;
    yearId?: string;
    companyId?: string;
    year: number;
    requestedBy?: string;
    requestedAt: Date;
    receiptReportId?: string;
    statusDetails?: string;
    hasDeviation: boolean;
    numberOfTaxCards: number;
    reportData?: ReportData;
    status: TaxInformationImportStatus;
    changedAt: Date;
    waitingForJobId?: string;
    onlyIfAnyoneIsMissingTaxCards: boolean;
    isSkipped: boolean;

    constructor(data?: Partial<TaxInformationImport>) {
        Object.assign(this, data);
    }
}
