import { Serializer } from "@alf/core/models";
import { OnEveryXthPeriodInYearRule } from "@alf/models/customization/on-every-xth-period-in-year-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnEveryXthPeriodInYearRuleSerializer implements Serializer<OnEveryXthPeriodInYearRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OnEveryXthPeriodInYearRule
    deserialize(data: any): OnEveryXthPeriodInYearRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OnEveryXthPeriodInYearRule(copy);
    }

    serialize(entity: OnEveryXthPeriodInYearRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OnEveryXthPeriodInYearRule, _forceTypeHint?: boolean): any
    serialize(entity: OnEveryXthPeriodInYearRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            everyXth: entity.everyXth
        };
    }
}
