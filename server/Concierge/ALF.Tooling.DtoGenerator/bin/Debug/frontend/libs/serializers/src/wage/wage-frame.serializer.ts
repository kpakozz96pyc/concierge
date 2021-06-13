import { Serializer } from "@alf/core/models";
import { WageFrame } from "@alf/models/wage/wage-frame";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageFrameSerializer implements Serializer<WageFrame> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageFrame
    deserialize(data: any): WageFrame | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WageFrame(copy);
    }

    serialize(entity: WageFrame | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageFrame, _forceTypeHint?: boolean): any
    serialize(entity: WageFrame | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageFrame.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            wageFrameCode: entity.wageFrameCode,
            description: entity.description
        };
    }
}
