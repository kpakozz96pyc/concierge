

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OriginalSummary {

    static $name = "OriginalSummary";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.OriginalSummary, ALF.Shared.Dto"

    transactionId?: string;
    periodId?: string;
    amount: number;

    constructor(data?: Partial<OriginalSummary>) {
        Object.assign(this, data);
    }
}
