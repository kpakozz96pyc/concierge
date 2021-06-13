import { Serializer } from "@alf/core/models";
import { AvailableLookupFilter } from "@alf/models/available-value/available-lookup-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AvailableLookupFilterSerializer implements Serializer<AvailableLookupFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AvailableLookupFilter
    deserialize(data: any): AvailableLookupFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AvailableLookupFilter(copy);
    }

    serialize(entity: AvailableLookupFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AvailableLookupFilter, _forceTypeHint?: boolean): any
    serialize(entity: AvailableLookupFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AvailableLookupFilter.typeNameHint : undefined,
            lookupId: entity.lookupId,
            processName: entity.processName,
            allowedIds: entity.allowedIds
        };
    }
}
