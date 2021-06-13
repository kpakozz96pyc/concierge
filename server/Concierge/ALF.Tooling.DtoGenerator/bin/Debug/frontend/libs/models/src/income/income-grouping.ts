
import { IncomeTransactionLine } from "./income-transaction-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeGrouping {

    static $name = "IncomeGrouping";
    static typeNameHint = "ALF.Shared.Dto.Models.Income.IncomeGrouping, ALF.Shared.Dto"

    description?: string;
    amount: number;
    quantity: number;
    isTaxable: boolean;
    details?: string;
    incomeTransactionLines: IncomeTransactionLine[] = [];

    constructor(data?: Partial<IncomeGrouping>) {
        Object.assign(this, data);
    }
}
