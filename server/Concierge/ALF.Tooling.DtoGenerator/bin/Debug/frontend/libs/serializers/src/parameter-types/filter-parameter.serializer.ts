import { FilterGroupSerializer } from "./filter-group.serializer";
import { Serializer } from "@alf/core/models";
import { FilterParameter } from "@alf/models/parameter-types/filter-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterParameterSerializer implements Serializer<FilterParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FilterParameter
    deserialize(data: any): FilterParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.value = new FilterGroupSerializer().deserialize(copy.value);

        return new FilterParameter(copy);
    }

    serialize(entity: FilterParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FilterParameter, _forceTypeHint?: boolean): any
    serialize(entity: FilterParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            value: new FilterGroupSerializer().serialize(entity.value, _forceTypeHint),
            description: entity.description
        };
    }
}
