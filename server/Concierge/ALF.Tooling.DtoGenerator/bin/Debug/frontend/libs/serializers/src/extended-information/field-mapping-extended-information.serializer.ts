import { Serializer } from "@alf/core/models";
import { FieldMappingExtendedInformation } from "@alf/models/extended-information/field-mapping-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldMappingExtendedInformationSerializer implements Serializer<FieldMappingExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldMappingExtendedInformation
    deserialize(data: any): FieldMappingExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FieldMappingExtendedInformation(copy);
    }

    serialize(entity: FieldMappingExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldMappingExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: FieldMappingExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldMappingExtendedInformation.typeNameHint : undefined,
            table: entity.table,
            field: entity.field,
            reference: entity.reference,
            companyId: entity.companyId
        };
    }
}
