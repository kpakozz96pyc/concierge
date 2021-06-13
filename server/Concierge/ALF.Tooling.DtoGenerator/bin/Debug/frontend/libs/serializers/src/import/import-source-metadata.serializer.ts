import { FileImportSourceMetadataSerializer } from "./file-import-source-metadata.serializer";
import { RetroPayImportSourceMetadataSerializer } from "./retro-pay-import-source-metadata.serializer";
import { CustomerOriginImportSourceMetadataSerializer } from "./customer-origin-import-source-metadata.serializer";
import { FileImportSourceMetadata } from "@alf/models/import/file-import-source-metadata";
import { RetroPayImportSourceMetadata } from "@alf/models/import/retro-pay-import-source-metadata";
import { CustomerOriginImportSourceMetadata } from "@alf/models/import/customer-origin-import-source-metadata";
import { Serializer } from "@alf/core/models";
import { ImportSourceMetadata } from "@alf/models/import/import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportSourceMetadataSerializer implements Serializer<ImportSourceMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportSourceMetadata
    deserialize(data: any): ImportSourceMetadata | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Import.FileImportSourceMetadata, ALF.Shared.Dto")
            return new FileImportSourceMetadataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.RetroPayImportSourceMetadata, ALF.Shared.Dto")
            return new RetroPayImportSourceMetadataSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.CustomerOriginImportSourceMetadata, ALF.Shared.Dto")
            return new CustomerOriginImportSourceMetadataSerializer().deserialize(data);

        const copy = { ...data };

        return new ImportSourceMetadata(copy);
    }

    serialize(entity: ImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportSourceMetadata, _forceTypeHint?: boolean): any
    serialize(entity: ImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Import.FileImportSourceMetadata, ALF.Shared.Dto")
            return new FileImportSourceMetadataSerializer().serialize(entity as FileImportSourceMetadata, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.RetroPayImportSourceMetadata, ALF.Shared.Dto")
            return new RetroPayImportSourceMetadataSerializer().serialize(entity as RetroPayImportSourceMetadata, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.CustomerOriginImportSourceMetadata, ALF.Shared.Dto")
            return new CustomerOriginImportSourceMetadataSerializer().serialize(entity as CustomerOriginImportSourceMetadata, _forceTypeHint);

        return {
            $type: _forceTypeHint ? ImportSourceMetadata.typeNameHint : undefined
        };
    }
}
