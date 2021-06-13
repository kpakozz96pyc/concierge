

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TaxInformationImportYearId = string;

export class TaxInformationImportYear {

    static $name = "TaxInformationImportYear";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationImportYear, ALF.Shared.Dto"

    id: TaxInformationImportYearId;
    companyId?: string;
    year: number;
    canSynchronize: boolean;

    constructor(data?: Partial<TaxInformationImportYear>) {
        Object.assign(this, data);
    }
}
