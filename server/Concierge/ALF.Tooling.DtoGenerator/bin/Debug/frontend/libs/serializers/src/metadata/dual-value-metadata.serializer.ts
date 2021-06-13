import { Serializer } from "@alf/core/models";
import { DualValueMetadata } from "@alf/models/metadata/dual-value-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DualValueMetadataSerializer implements Serializer<DualValueMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DualValueMetadata
    deserialize(data: any): DualValueMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DualValueMetadata(copy);
    }

    serialize(entity: DualValueMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DualValueMetadata, _forceTypeHint?: boolean): any
    serialize(entity: DualValueMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            firstLabel: entity.firstLabel,
            secondLabel: entity.secondLabel,
            title: entity.title
        };
    }
}
