import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TimelineInfo } from "@alf/models/core/timeline-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimelineInfoSerializer implements Serializer<TimelineInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimelineInfo
    deserialize(data: any): TimelineInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.currentValueStartDate !== undefined)
            copy.currentValueStartDate = new Date(copy.currentValueStartDate);

        if (copy.lastValueStartDate !== undefined)
            copy.lastValueStartDate = new Date(copy.lastValueStartDate);

        return new TimelineInfo(copy);
    }

    serialize(entity: TimelineInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimelineInfo, _forceTypeHint?: boolean): any
    serialize(entity: TimelineInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TimelineInfo.typeNameHint : undefined,
            id: entity.id,
            entityId: entity.entityId,
            fieldId: entity.fieldId,
            modelType: entity.modelType,
            currentValueStartDate: serializeDate(entity.currentValueStartDate),
            lastValueStartDate: serializeDate(entity.lastValueStartDate),
            hasFutureChanges: entity.hasFutureChanges
        };
    }
}
