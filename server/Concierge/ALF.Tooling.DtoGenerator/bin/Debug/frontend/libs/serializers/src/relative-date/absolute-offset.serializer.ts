import { Serializer } from "@alf/core/models";
import { AbsoluteOffset } from "@alf/models/relative-date/absolute-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsoluteOffsetSerializer implements Serializer<AbsoluteOffset> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsoluteOffset
    deserialize(data: any): AbsoluteOffset | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AbsoluteOffset(copy);
    }

    serialize(entity: AbsoluteOffset | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsoluteOffset, _forceTypeHint?: boolean): any
    serialize(entity: AbsoluteOffset | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            unit: entity.unit,
            direction: entity.direction,
            value: entity.value
        };
    }
}
