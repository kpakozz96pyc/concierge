import { Serializer } from "@alf/core/models";
import { OnSpecificPeriodNumberInYearRule } from "@alf/models/customization/on-specific-period-number-in-year-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnSpecificPeriodNumberInYearRuleSerializer implements Serializer<OnSpecificPeriodNumberInYearRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OnSpecificPeriodNumberInYearRule
    deserialize(data: any): OnSpecificPeriodNumberInYearRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OnSpecificPeriodNumberInYearRule(copy);
    }

    serialize(entity: OnSpecificPeriodNumberInYearRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OnSpecificPeriodNumberInYearRule, _forceTypeHint?: boolean): any
    serialize(entity: OnSpecificPeriodNumberInYearRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodNumberInYear: entity.periodNumberInYear
        };
    }
}
