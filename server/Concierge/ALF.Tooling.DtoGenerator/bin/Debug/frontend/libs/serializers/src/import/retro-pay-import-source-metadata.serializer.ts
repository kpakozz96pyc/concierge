import { Serializer } from "@alf/core/models";
import { RetroPayImportSourceMetadata } from "@alf/models/import/retro-pay-import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayImportSourceMetadataSerializer implements Serializer<RetroPayImportSourceMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetroPayImportSourceMetadata
    deserialize(data: any): RetroPayImportSourceMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.processedAt = new Date(copy.processedAt);

        return new RetroPayImportSourceMetadata(copy);
    }

    serialize(entity: RetroPayImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetroPayImportSourceMetadata, _forceTypeHint?: boolean): any
    serialize(entity: RetroPayImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            retroPayId: entity.retroPayId,
            processedAt: entity.processedAt
                ? entity.processedAt.toISOString()
                : undefined,
            processedByUsername: entity.processedByUsername,
            processedByUserId: entity.processedByUserId
        };
    }
}
