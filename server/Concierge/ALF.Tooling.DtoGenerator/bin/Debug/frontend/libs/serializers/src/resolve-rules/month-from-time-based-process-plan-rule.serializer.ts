import { Serializer } from "@alf/core/models";
import { MonthFromTimeBasedProcessPlanRule } from "@alf/models/resolve-rules/month-from-time-based-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MonthFromTimeBasedProcessPlanRuleSerializer implements Serializer<MonthFromTimeBasedProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MonthFromTimeBasedProcessPlanRule
    deserialize(data: any): MonthFromTimeBasedProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MonthFromTimeBasedProcessPlanRule(copy);
    }

    serialize(entity: MonthFromTimeBasedProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MonthFromTimeBasedProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: MonthFromTimeBasedProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            processPlanMonthLookupRule: entity.processPlanMonthLookupRule
        };
    }
}
