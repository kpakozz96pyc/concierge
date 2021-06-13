
import { PaymentCycle } from "../periods/enums/payment-cycle";
import { WeekBasedCycleCreateRule } from "@alf/models/cycle-create/week-based-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TwoWeekCycleCreateRule extends WeekBasedCycleCreateRule {

    static $name = "TwoWeekCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.TwoWeekCycleCreateRule, ALF.Shared.Dto"

    paymentCycle: PaymentCycle;

    constructor(data?: Partial<TwoWeekCycleCreateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = TwoWeekCycleCreateRule.typeNameHint;
    }
}
