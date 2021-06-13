import { Serializer } from "@alf/core/models";
import { BoolParameterContext } from "@alf/models/parameter-types/bool-parameter-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BoolParameterContextSerializer implements Serializer<BoolParameterContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BoolParameterContext
    deserialize(data: any): BoolParameterContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BoolParameterContext(copy);
    }

    serialize(entity: BoolParameterContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BoolParameterContext, _forceTypeHint?: boolean): any
    serialize(entity: BoolParameterContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BoolParameterContext.typeNameHint : undefined,
            falseLabel: entity.falseLabel,
            trueLabel: entity.trueLabel
        };
    }
}
