

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeAMeldingContext {

    static $name = "PayCodeAMeldingContext";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.PayCodeAMeldingContext, ALF.Shared.Dto"

    shouldReport?: boolean;
    includeEmployersFee?: boolean;
    includeTax?: boolean;
    reportTypeCode?: number;
    sailor24hOnBoardCode?: number;
    overrideTaxRule?: string;
    overrideDeduction?: number;
    incomeTypeCode?: string;
    advantageCode?: string;
    descriptionCode?: string;
    reportNumbersCode?: number;

    constructor(data?: Partial<PayCodeAMeldingContext>) {
        Object.assign(this, data);
    }
}
