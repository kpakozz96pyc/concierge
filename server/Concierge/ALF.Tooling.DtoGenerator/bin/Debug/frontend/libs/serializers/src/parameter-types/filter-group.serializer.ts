import { FilterCondition } from "@alf/models/parameter-types/enums/filter-condition";
import { FilterRuleSerializer } from "./filter-rule.serializer";
import { Serializer } from "@alf/core/models";
import { FilterGroup } from "@alf/models/parameter-types/filter-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterGroupSerializer implements Serializer<FilterGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterGroup
    deserialize(data: any): FilterGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.condition = FilterCondition[copy.condition];

        copy.groups = (copy.groups || []).map(new FilterGroupSerializer().deserialize);

        copy.rules = (copy.rules || []).map(new FilterRuleSerializer().deserialize);

        return new FilterGroup(copy);
    }

    serialize(entity: FilterGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterGroup, _forceTypeHint?: boolean): any
    serialize(entity: FilterGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FilterGroup.typeNameHint : undefined,
            id: entity.id,
            condition: FilterCondition[entity.condition],
            groups: entity.groups
                ? entity.groups.map(e => new FilterGroupSerializer().serialize(e, _forceTypeHint))
                : undefined,
            rules: entity.rules
                ? entity.rules.map(e => new FilterRuleSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
