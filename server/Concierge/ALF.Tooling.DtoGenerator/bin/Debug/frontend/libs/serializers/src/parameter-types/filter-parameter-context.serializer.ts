import { Serializer } from "@alf/core/models";
import { FilterParameterContext } from "@alf/models/parameter-types/filter-parameter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterParameterContextSerializer implements Serializer<FilterParameterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterParameterContext
    deserialize(data: any): FilterParameterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FilterParameterContext(copy);
    }

    serialize(entity: FilterParameterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterParameterContext, _forceTypeHint?: boolean): any
    serialize(entity: FilterParameterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FilterParameterContext.typeNameHint : undefined,
            id: entity.id,
            tableNumbers: entity.tableNumbers
        };
    }
}
