import { Serializer } from "@alf/core/models";
import { TextParameter } from "@alf/models/parameter-types/text-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TextParameterSerializer implements Serializer<TextParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TextParameter
    deserialize(data: any): TextParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TextParameter(copy);
    }

    serialize(entity: TextParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TextParameter, _forceTypeHint?: boolean): any
    serialize(entity: TextParameter | undefined, _forceTypeHint?: boolean): any | undefined {
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
