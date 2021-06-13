import { Serializer } from "@alf/core/models";
import { RuntimeTableMetadataExtendedInformation } from "@alf/models/extended-information/runtime-table-metadata-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RuntimeTableMetadataExtendedInformationSerializer implements Serializer<RuntimeTableMetadataExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RuntimeTableMetadataExtendedInformation
    deserialize(data: any): RuntimeTableMetadataExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RuntimeTableMetadataExtendedInformation(copy);
    }

    serialize(entity: RuntimeTableMetadataExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RuntimeTableMetadataExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: RuntimeTableMetadataExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RuntimeTableMetadataExtendedInformation.typeNameHint : undefined,
            tableName: entity.tableName,
            maintainableRuntimeTableMetadataId: entity.maintainableRuntimeTableMetadataId
        };
    }
}
