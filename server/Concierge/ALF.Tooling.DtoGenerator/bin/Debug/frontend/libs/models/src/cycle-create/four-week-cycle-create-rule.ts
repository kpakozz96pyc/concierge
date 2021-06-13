
import { PaymentCycle } from "../periods/enums/payment-cycle";
import { WeekBasedCycleCreateRule } from "@alf/models/cycle-create/week-based-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FourWeekCycleCreateRule extends WeekBasedCycleCreateRule {

    static $name = "FourWeekCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.FourWeekCycleCreateRule, ALF.Shared.Dto"

    paymentCycle: PaymentCycle;

    constructor(data?: Partial<FourWeekCycleCreateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = FourWeekCycleCreateRule.typeNameHint;
    }
}
