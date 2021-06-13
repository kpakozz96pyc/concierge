import { ImportSourceExternalSourceType } from "@alf/models/import/enums/import-source-external-source-type";
import { ImportSourceMetadataSerializer } from "./import-source-metadata.serializer";
import { Serializer } from "@alf/core/models";
import { ImportSource } from "@alf/models/import/import-source";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportSourceSerializer implements Serializer<ImportSource> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportSource
    deserialize(data: any): ImportSource | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.received = new Date(copy.received);

        copy.metadata = new ImportSourceMetadataSerializer().deserialize(copy.metadata);

        copy.externalSourceType = ImportSourceExternalSourceType[copy.externalSourceType];

        return new ImportSource(copy);
    }

    serialize(entity: ImportSource | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportSource, _forceTypeHint?: boolean): any
    serialize(entity: ImportSource | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ImportSource.typeNameHint : undefined,
            id: entity.id,
            sequenceNumber: entity.sequenceNumber,
            binaryItemId: entity.binaryItemId,
            received: entity.received
                ? entity.received.toISOString()
                : undefined,
            receivedBy: entity.receivedBy,
            type: entity.type,
            metadata: new ImportSourceMetadataSerializer().serialize(entity.metadata, _forceTypeHint),
            comment: entity.comment,
            externalSourceType: ImportSourceExternalSourceType[entity.externalSourceType],
            externalSourceId: entity.externalSourceId,
            title: entity.title
        };
    }
}
