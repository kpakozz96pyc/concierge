import { Serializer } from "@alf/core/models";
import { VocationCode } from "@alf/models/core/vocation-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VocationCodeSerializer implements Serializer<VocationCode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): VocationCode
    deserialize(data: any): VocationCode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new VocationCode(copy);
    }

    serialize(entity: VocationCode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: VocationCode, _forceTypeHint?: boolean): any
    serialize(entity: VocationCode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? VocationCode.typeNameHint : undefined,
            code: entity.code,
            description: entity.description
        };
    }
}
