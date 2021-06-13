import { Serializer } from "@alf/core/models";
import { SingleValueMetadata } from "@alf/models/metadata/single-value-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SingleValueMetadataSerializer implements Serializer<SingleValueMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SingleValueMetadata
    deserialize(data: any): SingleValueMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SingleValueMetadata(copy);
    }

    serialize(entity: SingleValueMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SingleValueMetadata, _forceTypeHint?: boolean): any
    serialize(entity: SingleValueMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            label: entity.label,
            title: entity.title
        };
    }
}
