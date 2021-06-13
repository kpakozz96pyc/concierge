import { Serializer } from "@alf/core/models";
import { FilterRuleValue } from "@alf/models/parameter-types/filter-rule-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterRuleValueSerializer implements Serializer<FilterRuleValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterRuleValue
    deserialize(data: any): FilterRuleValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FilterRuleValue(copy);
    }

    serialize(entity: FilterRuleValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterRuleValue, _forceTypeHint?: boolean): any
    serialize(entity: FilterRuleValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FilterRuleValue.typeNameHint : undefined,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            operator: entity.operator,
            value: entity.value
        };
    }
}
