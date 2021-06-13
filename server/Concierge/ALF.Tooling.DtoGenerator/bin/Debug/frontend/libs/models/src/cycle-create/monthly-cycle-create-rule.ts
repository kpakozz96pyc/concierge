
import { PaymentCycle } from "../periods/enums/payment-cycle";
import { PaymentCycleCreateRule } from "@alf/models/cycle-create/payment-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MonthlyCycleCreateRule extends PaymentCycleCreateRule {

    static $name = "MonthlyCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.MonthlyCycleCreateRule, ALF.Shared.Dto"

    paymentCycle: PaymentCycle;
    startDayOfPeriod: number;

    constructor(data?: Partial<MonthlyCycleCreateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = MonthlyCycleCreateRule.typeNameHint;
    }
}
