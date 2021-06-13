import { RuntimeFieldDataType } from "@alf/models/database-metadata/enums/runtime-field-data-type";
import { LookupDisplayMode } from "@alf/models/available-value/enums/lookup-display-mode";
import { AvailableValueSerializer } from "./available-value.serializer";
import { Serializer } from "@alf/core/models";
import { AvailableLookup } from "@alf/models/available-value/available-lookup";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AvailableLookupSerializer implements Serializer<AvailableLookup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AvailableLookup
    deserialize(data: any): AvailableLookup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.dataType = RuntimeFieldDataType[copy.dataType];

        copy.values = (copy.values || []).map(new AvailableValueSerializer().deserialize);

        copy.displayMode = LookupDisplayMode[copy.displayMode];

        return new AvailableLookup(copy);
    }

    serialize(entity: AvailableLookup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AvailableLookup, _forceTypeHint?: boolean): any
    serialize(entity: AvailableLookup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AvailableLookup.typeNameHint : undefined,
            lookupId: entity.lookupId,
            searchContext: entity.searchContext,
            dataType: RuntimeFieldDataType[entity.dataType],
            values: entity.values
                ? entity.values.map(e => new AvailableValueSerializer().serialize(e, _forceTypeHint))
                : undefined,
            displayMode: LookupDisplayMode[entity.displayMode]
        };
    }
}
