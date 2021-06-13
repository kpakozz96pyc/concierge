import { Serializer } from "@alf/core/models";
import { MaintainableRuntimeTableMetadata } from "@alf/models/database-metadata/maintainable-runtime-table-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MaintainableRuntimeTableMetadataSerializer implements Serializer<MaintainableRuntimeTableMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MaintainableRuntimeTableMetadata
    deserialize(data: any): MaintainableRuntimeTableMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new MaintainableRuntimeTableMetadata(copy);
    }

    serialize(entity: MaintainableRuntimeTableMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MaintainableRuntimeTableMetadata, _forceTypeHint?: boolean): any
    serialize(entity: MaintainableRuntimeTableMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MaintainableRuntimeTableMetadata.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            table: entity.table,
            tableDisplayName: entity.tableDisplayName,
            hasRuntimeTableMetadata: entity.hasRuntimeTableMetadata,
            tableName: entity.tableName,
            basicData: entity.basicData
        };
    }
}
