import { ParameterType } from "@alf/models/database-metadata/enums/parameter-type";
import { Serializer } from "@alf/core/models";
import { DtoFieldMetadata } from "@alf/models/database-metadata/dto-field-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DtoFieldMetadataSerializer implements Serializer<DtoFieldMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DtoFieldMetadata
    deserialize(data: any): DtoFieldMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parameterType = ParameterType[copy.parameterType];

        return new DtoFieldMetadata(copy);
    }

    serialize(entity: DtoFieldMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DtoFieldMetadata, _forceTypeHint?: boolean): any
    serialize(entity: DtoFieldMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DtoFieldMetadata.typeNameHint : undefined,
            id: entity.id,
            runtimeFieldMetadataId: entity.runtimeFieldMetadataId,
            propertyName: entity.propertyName,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            parameterType: ParameterType[entity.parameterType],
            totalLength: entity.totalLength,
            integerPlaces: entity.integerPlaces,
            decimalPlaces: entity.decimalPlaces,
            displayName: entity.displayName,
            lookupId: entity.lookupId,
            isTenantLevelLookup: entity.isTenantLevelLookup
        };
    }
}
