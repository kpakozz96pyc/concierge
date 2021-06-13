import { Serializer } from "@alf/core/models";
import { BoolParameter } from "@alf/models/parameter-types/bool-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BoolParameterSerializer implements Serializer<BoolParameter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BoolParameter
    deserialize(data: any): BoolParameter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BoolParameter(copy);
    }

    serialize(entity: BoolParameter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BoolParameter, _forceTypeHint?: boolean): any
    serialize(entity: BoolParameter | undefined, _forceTypeHint?: boolean): any | undefined {
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
