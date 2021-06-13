import { MonthlyCycleCreateRuleSerializer } from "./monthly-cycle-create-rule.serializer";
import { WeekBasedCycleCreateRuleSerializer } from "./week-based-cycle-create-rule.serializer";
import { FourWeekCycleCreateRuleSerializer } from "./four-week-cycle-create-rule.serializer";
import { OneWeekCycleCreateRuleSerializer } from "./one-week-cycle-create-rule.serializer";
import { TwoWeekCycleCreateRuleSerializer } from "./two-week-cycle-create-rule.serializer";
import { MonthlyCycleCreateRule } from "@alf/models/cycle-create/monthly-cycle-create-rule";
import { WeekBasedCycleCreateRule } from "@alf/models/cycle-create/week-based-cycle-create-rule";
import { FourWeekCycleCreateRule } from "@alf/models/cycle-create/four-week-cycle-create-rule";
import { OneWeekCycleCreateRule } from "@alf/models/cycle-create/one-week-cycle-create-rule";
import { TwoWeekCycleCreateRule } from "@alf/models/cycle-create/two-week-cycle-create-rule";
import { Serializer } from "@alf/core/models";
import { PaymentCycleCreateRule } from "@alf/models/cycle-create/payment-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PaymentCycleCreateRuleSerializer implements Serializer<PaymentCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PaymentCycleCreateRule
    deserialize(data: any): PaymentCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.MonthlyCycleCreateRule, ALF.Shared.Dto")
            return new MonthlyCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.WeekBasedCycleCreateRule, ALF.Shared.Dto")
            return new WeekBasedCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.FourWeekCycleCreateRule, ALF.Shared.Dto")
            return new FourWeekCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.OneWeekCycleCreateRule, ALF.Shared.Dto")
            return new OneWeekCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.TwoWeekCycleCreateRule, ALF.Shared.Dto")
            return new TwoWeekCycleCreateRuleSerializer().deserialize(data);

        throw new Error("Unable to deserialize PaymentCycleCreateRule, cannot infer type from " + data.$type);
    }

    serialize(entity: PaymentCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PaymentCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: PaymentCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.MonthlyCycleCreateRule, ALF.Shared.Dto")
            return new MonthlyCycleCreateRuleSerializer().serialize(entity as MonthlyCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.WeekBasedCycleCreateRule, ALF.Shared.Dto")
            return new WeekBasedCycleCreateRuleSerializer().serialize(entity as WeekBasedCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.FourWeekCycleCreateRule, ALF.Shared.Dto")
            return new FourWeekCycleCreateRuleSerializer().serialize(entity as FourWeekCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.OneWeekCycleCreateRule, ALF.Shared.Dto")
            return new OneWeekCycleCreateRuleSerializer().serialize(entity as OneWeekCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.TwoWeekCycleCreateRule, ALF.Shared.Dto")
            return new TwoWeekCycleCreateRuleSerializer().serialize(entity as TwoWeekCycleCreateRule, _forceTypeHint);

        throw new Error("Unable to serialize PaymentCycleCreateRule, cannot infer type from " + entity.$type);
    }
}
