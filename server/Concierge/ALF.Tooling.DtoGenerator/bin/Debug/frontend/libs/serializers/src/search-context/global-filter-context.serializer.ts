import { Serializer } from "@alf/core/models";
import { GlobalFilterContext } from "@alf/models/search-context/global-filter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobalFilterContextSerializer implements Serializer<GlobalFilterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GlobalFilterContext
    deserialize(data: any): GlobalFilterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GlobalFilterContext(copy);
    }

    serialize(entity: GlobalFilterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GlobalFilterContext, _forceTypeHint?: boolean): any
    serialize(entity: GlobalFilterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GlobalFilterContext.typeNameHint : undefined,
            type: entity.type
        };
    }
}
