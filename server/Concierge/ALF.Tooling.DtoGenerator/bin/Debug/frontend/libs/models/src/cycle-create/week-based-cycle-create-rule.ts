
import { StartDateOfFirstPeriodRule } from "./enums/start-date-of-first-period-rule";
import { PaymentCycleCreateRule } from "@alf/models/cycle-create/payment-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WeekBasedCycleCreateRule extends PaymentCycleCreateRule {

    static $name = "WeekBasedCycleCreateRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.WeekBasedCycleCreateRule, ALF.Shared.Dto"

    startDateOfFirstPeriodRule: StartDateOfFirstPeriodRule;

    constructor(data?: Partial<WeekBasedCycleCreateRule>) {
        super(data);
        Object.assign(this, data);
        this.$type = WeekBasedCycleCreateRule.typeNameHint;
    }
}
