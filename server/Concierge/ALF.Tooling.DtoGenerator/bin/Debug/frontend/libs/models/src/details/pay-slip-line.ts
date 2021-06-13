

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaySlipLine {

    static $name = "PaySlipLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Payslip.Details.PaySlipLine, ALF.Shared.Dto"

    description?: string;
    additionalInformation?: string;
    slipLineText?: string;
    payCodeNumber: number;
    attachmentReference?: string;
    isPayable: boolean;
    quantity?: number;
    hours?: number;
    rate?: number;
    amount?: number;
    yearToDateQuantity?: number;
    yearToDateHours?: number;
    yearToDateAmount?: number;
    slipLineNumber?: number;

    constructor(data?: Partial<PaySlipLine>) {
        Object.assign(this, data);
    }
}
