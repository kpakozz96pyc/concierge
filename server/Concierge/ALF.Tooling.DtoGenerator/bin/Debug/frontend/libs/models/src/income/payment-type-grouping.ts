
import { IncomeGrouping } from "./income-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentTypeGrouping {

    static $name = "PaymentTypeGrouping";
    static typeNameHint = "ALF.Shared.Dto.Models.Income.PaymentTypeGrouping, ALF.Shared.Dto"

    description?: string;
    incomeGroupings: IncomeGrouping[] = [];

    constructor(data?: Partial<PaymentTypeGrouping>) {
        Object.assign(this, data);
    }
}
