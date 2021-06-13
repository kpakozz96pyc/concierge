import { Serializer } from "@alf/core/models";
import { WageGroupContext } from "@alf/models/search-context/wage-group-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageGroupContextSerializer implements Serializer<WageGroupContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageGroupContext
    deserialize(data: any): WageGroupContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WageGroupContext(copy);
    }

    serialize(entity: WageGroupContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageGroupContext, _forceTypeHint?: boolean): any
    serialize(entity: WageGroupContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageGroupContext.typeNameHint : undefined,
            wageGroupId: entity.wageGroupId
        };
    }
}
