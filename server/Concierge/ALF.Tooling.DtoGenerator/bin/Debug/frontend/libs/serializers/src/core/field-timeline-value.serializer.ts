import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { FieldTimelineValue } from "@alf/models/core/field-timeline-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldTimelineValueSerializer implements Serializer<FieldTimelineValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldTimelineValue
    deserialize(data: any): FieldTimelineValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.validFrom = new Date(copy.validFrom);

        return new FieldTimelineValue(copy);
    }

    serialize(entity: FieldTimelineValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldTimelineValue, _forceTypeHint?: boolean): any
    serialize(entity: FieldTimelineValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldTimelineValue.typeNameHint : undefined,
            validFrom: serializeDate(entity.validFrom),
            value: entity.value
        };
    }
}
