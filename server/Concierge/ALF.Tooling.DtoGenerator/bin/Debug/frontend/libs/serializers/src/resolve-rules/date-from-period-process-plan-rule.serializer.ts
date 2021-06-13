import { Serializer } from "@alf/core/models";
import { DateFromPeriodProcessPlanRule } from "@alf/models/resolve-rules/date-from-period-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DateFromPeriodProcessPlanRuleSerializer implements Serializer<DateFromPeriodProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DateFromPeriodProcessPlanRule
    deserialize(data: any): DateFromPeriodProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DateFromPeriodProcessPlanRule(copy);
    }

    serialize(entity: DateFromPeriodProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DateFromPeriodProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: DateFromPeriodProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodDateLookup: entity.periodDateLookup,
            fromJobProcessDate: entity.fromJobProcessDate
        };
    }
}
