import { FieldTimelineValueSerializer } from "./field-timeline-value.serializer";
import { Serializer } from "@alf/core/models";
import { FieldTimeline } from "@alf/models/core/field-timeline";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldTimelineSerializer implements Serializer<FieldTimeline> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FieldTimeline
    deserialize(data: any): FieldTimeline | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.timeline = (copy.timeline || []).map(new FieldTimelineValueSerializer().deserialize);

        return new FieldTimeline(copy);
    }

    serialize(entity: FieldTimeline | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FieldTimeline, _forceTypeHint?: boolean): any
    serialize(entity: FieldTimeline | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FieldTimeline.typeNameHint : undefined,
            id: entity.id,
            fieldId: entity.fieldId,
            entityId: entity.entityId,
            isReadOnly: entity.isReadOnly,
            dtoFieldMetadataId: entity.dtoFieldMetadataId,
            timeline: entity.timeline
                ? entity.timeline.map(e => new FieldTimelineValueSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
