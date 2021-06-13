import { Serializer } from "@alf/core/models";
import { NumberParameter } from "@alf/models/parameter-types/number-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NumberParameterSerializer implements Serializer<NumberParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NumberParameter
    deserialize(data: any): NumberParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new NumberParameter(copy);
    }

    serialize(entity: NumberParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NumberParameter, _forceTypeHint?: boolean): any
    serialize(entity: NumberParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            value: entity.value,
            overriddenValue: entity.overriddenValue
        };
    }
}
