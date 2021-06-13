import { FilterParameterSerializer } from "../parameter-types/filter-parameter.serializer";
import { Serializer } from "@alf/core/models";
import { GlobalFilter } from "@alf/models/core/global-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobalFilterSerializer implements Serializer<GlobalFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GlobalFilter
    deserialize(data: any): GlobalFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.filter = new FilterParameterSerializer().deserialize(copy.filter);

        return new GlobalFilter(copy);
    }

    serialize(entity: GlobalFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GlobalFilter, _forceTypeHint?: boolean): any
    serialize(entity: GlobalFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GlobalFilter.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            type: entity.type,
            filter: new FilterParameterSerializer().serialize(entity.filter, _forceTypeHint),
            name: entity.name,
            description: entity.description
        };
    }
}
