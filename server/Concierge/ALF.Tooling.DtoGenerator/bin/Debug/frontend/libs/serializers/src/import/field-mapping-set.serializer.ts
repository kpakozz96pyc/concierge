import { FieldMappingPairSerializer } from "./field-mapping-pair.serializer";
import { Serializer } from "@alf/core/models";
import { FieldMappingSet } from "@alf/models/import/field-mapping-set";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldMappingSetSerializer implements Serializer<FieldMappingSet> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldMappingSet
    deserialize(data: any): FieldMappingSet | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fieldMappingPairs = (copy.fieldMappingPairs || []).map(new FieldMappingPairSerializer().deserialize);

        return new FieldMappingSet(copy);
    }

    serialize(entity: FieldMappingSet | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldMappingSet, _forceTypeHint?: boolean): any
    serialize(entity: FieldMappingSet | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldMappingSet.typeNameHint : undefined,
            id: entity.id,
            tableNumber: entity.tableNumber,
            fieldNumber: entity.fieldNumber,
            reference: entity.reference,
            inputCompanyId: entity.inputCompanyId,
            fieldMappingPairs: entity.fieldMappingPairs
                ? entity.fieldMappingPairs.map(e => new FieldMappingPairSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
