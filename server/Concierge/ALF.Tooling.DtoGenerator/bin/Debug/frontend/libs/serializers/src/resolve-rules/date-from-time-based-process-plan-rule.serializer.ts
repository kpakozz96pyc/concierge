import { Serializer } from "@alf/core/models";
import { DateFromTimeBasedProcessPlanRule } from "@alf/models/resolve-rules/date-from-time-based-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DateFromTimeBasedProcessPlanRuleSerializer implements Serializer<DateFromTimeBasedProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DateFromTimeBasedProcessPlanRule
    deserialize(data: any): DateFromTimeBasedProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DateFromTimeBasedProcessPlanRule(copy);
    }

    serialize(entity: DateFromTimeBasedProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DateFromTimeBasedProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: DateFromTimeBasedProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            directDateLookup: entity.directDateLookup,
            fromJobProcessDate: entity.fromJobProcessDate
        };
    }
}
