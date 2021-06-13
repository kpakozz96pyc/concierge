import { Serializer } from "@alf/core/models";
import { RelativeOffset } from "@alf/models/relative-date/relative-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RelativeOffsetSerializer implements Serializer<RelativeOffset> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RelativeOffset
    deserialize(data: any): RelativeOffset | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RelativeOffset(copy);
    }

    serialize(entity: RelativeOffset | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RelativeOffset, _forceTypeHint?: boolean): any
    serialize(entity: RelativeOffset | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            unit: entity.unit,
            value: entity.value
        };
    }
}
