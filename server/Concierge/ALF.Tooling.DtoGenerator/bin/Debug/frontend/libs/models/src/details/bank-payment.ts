

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankPayment {

    static $name = "BankPayment";
    static typeNameHint = "ALF.Shared.Dto.Models.Payslip.Details.BankPayment, ALF.Shared.Dto"

    bankAccount?: string;
    amount: number;

    constructor(data?: Partial<BankPayment>) {
        Object.assign(this, data);
    }
}
