import { Serializer } from "@alf/core/models";
import { WageFrameItemStep } from "@alf/models/wage/wage-frame-item-step";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageFrameItemStepSerializer implements Serializer<WageFrameItemStep> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageFrameItemStep
    deserialize(data: any): WageFrameItemStep | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WageFrameItemStep(copy);
    }

    serialize(entity: WageFrameItemStep | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageFrameItemStep, _forceTypeHint?: boolean): any
    serialize(entity: WageFrameItemStep | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageFrameItemStep.typeNameHint : undefined,
            code: entity.code,
            value: entity.value
        };
    }
}
