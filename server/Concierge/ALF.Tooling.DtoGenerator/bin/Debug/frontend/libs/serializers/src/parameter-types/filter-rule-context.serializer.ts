import { Serializer } from "@alf/core/models";
import { FilterRuleContext } from "@alf/models/parameter-types/filter-rule-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterRuleContextSerializer implements Serializer<FilterRuleContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterRuleContext
    deserialize(data: any): FilterRuleContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FilterRuleContext(copy);
    }

    serialize(entity: FilterRuleContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterRuleContext, _forceTypeHint?: boolean): any
    serialize(entity: FilterRuleContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FilterRuleContext.typeNameHint : undefined,
            tableNumbers: entity.tableNumbers
        };
    }
}
