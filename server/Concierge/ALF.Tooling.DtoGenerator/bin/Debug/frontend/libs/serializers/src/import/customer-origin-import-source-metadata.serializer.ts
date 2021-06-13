import { Serializer } from "@alf/core/models";
import { CustomerOriginImportSourceMetadata } from "@alf/models/import/customer-origin-import-source-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CustomerOriginImportSourceMetadataSerializer implements Serializer<CustomerOriginImportSourceMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CustomerOriginImportSourceMetadata
    deserialize(data: any): CustomerOriginImportSourceMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.created = new Date(copy.created);

        return new CustomerOriginImportSourceMetadata(copy);
    }

    serialize(entity: CustomerOriginImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CustomerOriginImportSourceMetadata, _forceTypeHint?: boolean): any
    serialize(entity: CustomerOriginImportSourceMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            createdByCustomer: entity.createdByCustomer,
            filename: entity.filename,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            fileFormat: entity.fileFormat
        };
    }
}
