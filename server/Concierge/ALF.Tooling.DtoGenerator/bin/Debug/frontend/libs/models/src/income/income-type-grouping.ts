
import { PaymentTypeGrouping } from "./payment-type-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeTypeGrouping {

    static $name = "IncomeTypeGrouping";
    static typeNameHint = "ALF.Shared.Dto.Models.Income.IncomeTypeGrouping, ALF.Shared.Dto"

    description?: string;
    paymentGroupings: PaymentTypeGrouping[] = [];

    constructor(data?: Partial<IncomeTypeGrouping>) {
        Object.assign(this, data);
    }
}
