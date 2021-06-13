import { TimelinePatchOperationType } from "@alf/models/timeline/enums/timeline-patch-operation-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TimelinePatchOperation } from "@alf/models/timeline/timeline-patch-operation";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimelinePatchOperationSerializer implements Serializer<TimelinePatchOperation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TimelinePatchOperation
    deserialize(data: any): TimelinePatchOperation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.operationType = TimelinePatchOperationType[copy.operationType];

        copy.date = new Date(copy.date);

        return new TimelinePatchOperation(copy);
    }

    serialize(entity: TimelinePatchOperation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TimelinePatchOperation, _forceTypeHint?: boolean): any
    serialize(entity: TimelinePatchOperation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TimelinePatchOperation.typeNameHint : undefined,
            operationType: TimelinePatchOperationType[entity.operationType],
            date: serializeDate(entity.date),
            value: entity.value
        };
    }
}
