

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type BankCountryId = string;

export class BankCountry {

    static $name = "BankCountry";
    static typeNameHint = "ALF.Shared.Dto.Models.Banking.BankCountry, ALF.Shared.Dto"

    id: BankCountryId;
    companyId: string;
    bankCountryCode: string;
    description?: string;
    feeCode?: string;
    text?: string;

    constructor(data?: Partial<BankCountry>) {
        Object.assign(this, data);
    }
}
