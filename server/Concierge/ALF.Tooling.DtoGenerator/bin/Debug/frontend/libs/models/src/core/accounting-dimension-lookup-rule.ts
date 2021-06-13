

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingDimensionLookupRule {

    static $name = "AccountingDimensionLookupRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.AccountingDimensionLookupRule, ALF.Shared.Dto"

    fieldNumber: number;
    dim?: any;
    retrievedFrom: number;
    formula?: string;

    constructor(data?: Partial<AccountingDimensionLookupRule>) {
        Object.assign(this, data);
    }
}
