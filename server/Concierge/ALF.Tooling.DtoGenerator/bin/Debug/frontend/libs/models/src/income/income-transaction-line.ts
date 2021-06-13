

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeTransactionLine {

    static $name = "IncomeTransactionLine";
    static typeNameHint = "ALF.Shared.Dto.Models.Income.IncomeTransactionLine, ALF.Shared.Dto"

    outputTransactionId?: string;
    description?: string;
    amount: number;
    periodId?: string;

    constructor(data?: Partial<IncomeTransactionLine>) {
        Object.assign(this, data);
    }
}
