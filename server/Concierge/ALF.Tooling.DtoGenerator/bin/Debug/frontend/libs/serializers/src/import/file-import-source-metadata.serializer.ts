import { CustomerOriginImportSourceMetadataSerializer } from "./customer-origin-import-source-metadata.serializer";
import { CustomerOriginImportSourceMetadata } from "@alf/models/import/customer-origin-import-source-metadata";
import { Serializer } from "@alf/core/models";
import { FileImportSourceMetadata } from "@alf/models/import/file-import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FileImportSourceMetadataSerializer implements Serializer<FileImportSourceMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FileImportSourceMetadata
    deserialize(data: any): FileImportSourceMetadata | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Import.CustomerOriginImportSourceMetadata, ALF.Shared.Dto")
            return new CustomerOriginImportSourceMetadataSerializer().deserialize(data);

        const copy = { ...data };
        copy.created = new Date(copy.created);

        return new FileImportSourceMetadata(copy);
    }

    serialize(entity: FileImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FileImportSourceMetadata, _forceTypeHint?: boolean): any
    serialize(entity: FileImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Import.CustomerOriginImportSourceMetadata, ALF.Shared.Dto")
            return new CustomerOriginImportSourceMetadataSerializer().serialize(entity as CustomerOriginImportSourceMetadata, _forceTypeHint);

        return {
            $type: entity.$type,
            filename: entity.filename,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            fileFormat: entity.fileFormat
        };
    }
}
