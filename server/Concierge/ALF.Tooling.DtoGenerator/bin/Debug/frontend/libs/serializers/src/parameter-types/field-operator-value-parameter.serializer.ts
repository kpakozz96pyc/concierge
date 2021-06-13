import { Serializer } from "@alf/core/models";
import { FieldOperatorValueParameter } from "@alf/models/parameter-types/field-operator-value-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldOperatorValueParameterSerializer implements Serializer<FieldOperatorValueParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldOperatorValueParameter
    deserialize(data: any): FieldOperatorValueParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FieldOperatorValueParameter(copy);
    }

    serialize(entity: FieldOperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldOperatorValueParameter, _forceTypeHint?: boolean): any
    serialize(entity: FieldOperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            fieldNumber: entity.fieldNumber,
            operator: entity.operator,
            value: entity.value,
            overriddenValue: entity.overriddenValue
        };
    }
}
