import { Serializer } from "@alf/core/models";
import { WageFrameContext } from "@alf/models/search-context/wage-frame-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageFrameContextSerializer implements Serializer<WageFrameContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageFrameContext
    deserialize(data: any): WageFrameContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WageFrameContext(copy);
    }

    serialize(entity: WageFrameContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageFrameContext, _forceTypeHint?: boolean): any
    serialize(entity: WageFrameContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageFrameContext.typeNameHint : undefined,
            wageFrameCode: entity.wageFrameCode
        };
    }
}
