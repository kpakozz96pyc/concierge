import { InputParameterValueSerializer } from "../parameter-types/input-parameter-value.serializer";
import { Serializer } from "@alf/core/models";
import { InputParameter } from "@alf/models/input-parameters/input-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InputParameterSerializer implements Serializer<InputParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): InputParameter
    deserialize(data: any): InputParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.value = new InputParameterValueSerializer().deserialize(copy.value);

        return new InputParameter(copy);
    }

    serialize(entity: InputParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: InputParameter, _forceTypeHint?: boolean): any
    serialize(entity: InputParameter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? InputParameter.typeNameHint : undefined,
            parameterName: entity.parameterName,
            parameterType: entity.parameterType,
            description: entity.description,
            optionalLabel: entity.optionalLabel,
            optionalDisableText: entity.optionalDisableText,
            optionalEnableText: entity.optionalEnableText,
            context: entity.context,
            required: entity.required,
            value: new InputParameterValueSerializer().serialize(entity.value, _forceTypeHint),
            canBeOverridable: entity.canBeOverridable,
            isOverridable: entity.isOverridable,
            overrideDescription: entity.overrideDescription,
            ordering: entity.ordering
        };
    }
}
