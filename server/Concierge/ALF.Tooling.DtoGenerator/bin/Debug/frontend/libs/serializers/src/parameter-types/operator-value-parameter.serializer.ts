import { Serializer } from "@alf/core/models";
import { OperatorValueParameter } from "@alf/models/parameter-types/operator-value-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OperatorValueParameterSerializer implements Serializer<OperatorValueParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OperatorValueParameter
    deserialize(data: any): OperatorValueParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new OperatorValueParameter(copy);
    }

    serialize(entity: OperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OperatorValueParameter, _forceTypeHint?: boolean): any
    serialize(entity: OperatorValueParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            operator: entity.operator,
            value: entity.value,
            overriddenValue: entity.overriddenValue
        };
    }
}
