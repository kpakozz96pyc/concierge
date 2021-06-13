import { Serializer } from "@alf/core/models";
import { FieldMappingPair } from "@alf/models/import/field-mapping-pair";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldMappingPairSerializer implements Serializer<FieldMappingPair> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldMappingPair
    deserialize(data: any): FieldMappingPair | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FieldMappingPair(copy);
    }

    serialize(entity: FieldMappingPair | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldMappingPair, _forceTypeHint?: boolean): any
    serialize(entity: FieldMappingPair | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldMappingPair.typeNameHint : undefined,
            input: entity.input,
            output: entity.output
        };
    }
}
