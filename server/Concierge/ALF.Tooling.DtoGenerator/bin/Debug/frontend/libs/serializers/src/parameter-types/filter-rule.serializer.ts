import { FilterRuleValueSerializer } from "./filter-rule-value.serializer";
import { Serializer } from "@alf/core/models";
import { FilterRule } from "@alf/models/parameter-types/filter-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterRuleSerializer implements Serializer<FilterRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterRule
    deserialize(data: any): FilterRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.value = new FilterRuleValueSerializer().deserialize(copy.value);

        return new FilterRule(copy);
    }

    serialize(entity: FilterRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterRule, _forceTypeHint?: boolean): any
    serialize(entity: FilterRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FilterRule.typeNameHint : undefined,
            id: entity.id,
            isOverridable: entity.isOverridable,
            overrideDescription: entity.overrideDescription,
            value: new FilterRuleValueSerializer().serialize(entity.value, _forceTypeHint)
        };
    }
}
