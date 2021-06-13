

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipText {

    static $name = "PayslipText";
    static typeNameHint = "ALF.Shared.Dto.Models.Payslip.Details.PayslipText, ALF.Shared.Dto"

    textForSlipLine: number;
    textLineSequenceNumber: number;
    slipText?: string;

    constructor(data?: Partial<PayslipText>) {
        Object.assign(this, data);
    }
}
