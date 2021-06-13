
import { PaymentCycle } from "../periods/enums/payment-cycle";
import { WeekBasedCycleCreateRule } from "@alf/models/cycle-create/week-based-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OneWeekCycleCreateRule extends WeekBasedCycleCreateRule {

    static $name = "OneWeekCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.OneWeekCycleCreateRule, ALF.Shared.Dto"

    paymentCycle: PaymentCycle;

    constructor(data?: Partial<OneWeekCycleCreateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = OneWeekCycleCreateRule.typeNameHint;
    }
}
