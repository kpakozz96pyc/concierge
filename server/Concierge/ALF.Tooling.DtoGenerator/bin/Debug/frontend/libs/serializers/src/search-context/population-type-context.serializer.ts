import { Serializer } from "@alf/core/models";
import { PopulationTypeContext } from "@alf/models/search-context/population-type-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PopulationTypeContextSerializer implements Serializer<PopulationTypeContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PopulationTypeContext
    deserialize(data: any): PopulationTypeContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PopulationTypeContext(copy);
    }

    serialize(entity: PopulationTypeContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PopulationTypeContext, _forceTypeHint?: boolean): any
    serialize(entity: PopulationTypeContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PopulationTypeContext.typeNameHint : undefined,
            populationType: entity.populationType
        };
    }
}
