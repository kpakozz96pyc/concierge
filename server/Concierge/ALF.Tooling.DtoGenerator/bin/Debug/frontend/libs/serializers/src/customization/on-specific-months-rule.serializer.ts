import { Serializer } from "@alf/core/models";
import { OnSpecificMonthsRule } from "@alf/models/customization/on-specific-months-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OnSpecificMonthsRuleSerializer implements Serializer<OnSpecificMonthsRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OnSpecificMonthsRule
    deserialize(data: any): OnSpecificMonthsRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OnSpecificMonthsRule(copy);
    }

    serialize(entity: OnSpecificMonthsRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OnSpecificMonthsRule, _forceTypeHint?: boolean): any
    serialize(entity: OnSpecificMonthsRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            months: entity.months
        };
    }
}
