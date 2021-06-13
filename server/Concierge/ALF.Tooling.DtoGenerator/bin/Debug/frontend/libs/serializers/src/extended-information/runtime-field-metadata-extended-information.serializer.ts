import { Serializer } from "@alf/core/models";
import { RuntimeFieldMetadataExtendedInformation } from "@alf/models/extended-information/runtime-field-metadata-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RuntimeFieldMetadataExtendedInformationSerializer implements Serializer<RuntimeFieldMetadataExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RuntimeFieldMetadataExtendedInformation
    deserialize(data: any): RuntimeFieldMetadataExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RuntimeFieldMetadataExtendedInformation(copy);
    }

    serialize(entity: RuntimeFieldMetadataExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RuntimeFieldMetadataExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: RuntimeFieldMetadataExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RuntimeFieldMetadataExtendedInformation.typeNameHint : undefined,
            fieldName: entity.fieldName
        };
    }
}
