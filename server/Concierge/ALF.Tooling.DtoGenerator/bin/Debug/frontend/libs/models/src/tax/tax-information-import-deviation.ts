
import { TaxInformationImportDeviationSeverity } from "./enums/tax-information-import-deviation-severity";
import { TaxInformationImportDeviationCode } from "./enums/tax-information-import-deviation-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TaxInformationImportDeviationId = string;

export class TaxInformationImportDeviation {

    static $name = "TaxInformationImportDeviation";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationImportDeviation, ALF.Shared.Dto"

    id: TaxInformationImportDeviationId;
    taxInformationImportId: string;
    socialSecurityNumber?: string;
    companyId?: string;
    employeeNumber: number;
    deviationSeverity: TaxInformationImportDeviationSeverity;
    deviationCode: TaxInformationImportDeviationCode;
    deviationDescription?: string;
    completed: boolean;
    completedByUsername?: string;
    completedByUserId?: string;
    completedAt?: Date;

    constructor(data?: Partial<TaxInformationImportDeviation>) {
        Object.assign(this, data);
    }
}
