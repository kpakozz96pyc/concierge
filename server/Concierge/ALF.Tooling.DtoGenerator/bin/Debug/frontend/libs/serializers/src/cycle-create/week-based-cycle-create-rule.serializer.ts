import { FourWeekCycleCreateRuleSerializer } from "./four-week-cycle-create-rule.serializer";
import { OneWeekCycleCreateRuleSerializer } from "./one-week-cycle-create-rule.serializer";
import { TwoWeekCycleCreateRuleSerializer } from "./two-week-cycle-create-rule.serializer";
import { FourWeekCycleCreateRule } from "@alf/models/cycle-create/four-week-cycle-create-rule";
import { OneWeekCycleCreateRule } from "@alf/models/cycle-create/one-week-cycle-create-rule";
import { TwoWeekCycleCreateRule } from "@alf/models/cycle-create/two-week-cycle-create-rule";
import { Serializer } from "@alf/core/models";
import { WeekBasedCycleCreateRule } from "@alf/models/cycle-create/week-based-cycle-create-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WeekBasedCycleCreateRuleSerializer implements Serializer<WeekBasedCycleCreateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WeekBasedCycleCreateRule
    deserialize(data: any): WeekBasedCycleCreateRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.FourWeekCycleCreateRule, ALF.Shared.Dto")
            return new FourWeekCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.OneWeekCycleCreateRule, ALF.Shared.Dto")
            return new OneWeekCycleCreateRuleSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.TwoWeekCycleCreateRule, ALF.Shared.Dto")
            return new TwoWeekCycleCreateRuleSerializer().deserialize(data);

        throw new Error("Unable to deserialize WeekBasedCycleCreateRule, cannot infer type from " + data.$type);
    }

    serialize(entity: WeekBasedCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WeekBasedCycleCreateRule, _forceTypeHint?: boolean): any
    serialize(entity: WeekBasedCycleCreateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.FourWeekCycleCreateRule, ALF.Shared.Dto")
            return new FourWeekCycleCreateRuleSerializer().serialize(entity as FourWeekCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.OneWeekCycleCreateRule, ALF.Shared.Dto")
            return new OneWeekCycleCreateRuleSerializer().serialize(entity as OneWeekCycleCreateRule, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Periods.Planning.CycleCreate.TwoWeekCycleCreateRule, ALF.Shared.Dto")
            return new TwoWeekCycleCreateRuleSerializer().serialize(entity as TwoWeekCycleCreateRule, _forceTypeHint);

        throw new Error("Unable to serialize WeekBasedCycleCreateRule, cannot infer type from " + entity.$type);
    }
}
