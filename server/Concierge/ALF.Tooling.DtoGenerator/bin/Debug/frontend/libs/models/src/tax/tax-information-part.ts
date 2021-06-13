
import { TaxInformationDeductionType } from "./enums/tax-information-deduction-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPart {

    static $name = "TaxInformationPart";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformationPart, ALF.Shared.Dto"

    id: string;
    deductionCode: string;
    created: Date;
    createdBy?: string;
    modified: Date;
    modifiedBy?: string;
    deductionCodeType: TaxInformationDeductionType;
    isPensioner: boolean;
    taxTable?: number;
    taxPercentage?: number;
    freeCardAmountRemaining?: number;

    constructor(data?: Partial<TaxInformationPart>) {
        Object.assign(this, data);
    }
}
