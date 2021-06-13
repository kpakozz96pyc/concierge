
import { PaymentCycle } from "../periods/enums/payment-cycle";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentCycleCreateRule {

    static $name = "PaymentCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.PaymentCycleCreateRule, ALF.Shared.Dto"

    $type: string;
    paymentCycle: PaymentCycle;
    payDateFormula?: string;

    constructor(data?: Partial<PaymentCycleCreateRule>) {
        Object.assign(this, data);
    }
}
