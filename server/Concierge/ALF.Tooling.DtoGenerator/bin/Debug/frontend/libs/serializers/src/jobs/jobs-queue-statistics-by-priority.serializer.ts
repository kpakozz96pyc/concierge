import { Priority } from "@alf/models/jobs/enums/priority";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { JobsQueueStatisticsByPriority } from "@alf/models/jobs/jobs-queue-statistics-by-priority";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobsQueueStatisticsByPrioritySerializer implements Serializer<JobsQueueStatisticsByPriority> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobsQueueStatisticsByPriority
    deserialize(data: any): JobsQueueStatisticsByPriority | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.priority = Priority[copy.priority];

        if (copy.oldestJobTime !== undefined)
            copy.oldestJobTime = new Date(copy.oldestJobTime);

        return new JobsQueueStatisticsByPriority(copy);
    }

    serialize(entity: JobsQueueStatisticsByPriority | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobsQueueStatisticsByPriority, _forceTypeHint?: boolean): any
    serialize(entity: JobsQueueStatisticsByPriority | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobsQueueStatisticsByPriority.typeNameHint : undefined,
            id: entity.id,
            priority: Priority[entity.priority],
            queuedCount: entity.queuedCount,
            waitingTime: entity.waitingTime,
            oldestJobTime: serializeDate(entity.oldestJobTime),
            oldestJobType: entity.oldestJobType,
            oldestJobId: entity.oldestJobId,
            averageTime: entity.averageTime
        };
    }
}
