import { JobsQueueStatisticsByPrioritySerializer } from "./jobs-queue-statistics-by-priority.serializer";
import { JobStatisticsByTypeSerializer } from "./job-statistics-by-type.serializer";
import { Serializer } from "@alf/core/models";
import { JobsStatistics } from "@alf/models/jobs/jobs-statistics";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobsStatisticsSerializer implements Serializer<JobsStatistics> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobsStatistics
    deserialize(data: any): JobsStatistics | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.queueStatisticsByPriority = (copy.queueStatisticsByPriority || []).map(new JobsQueueStatisticsByPrioritySerializer().deserialize);

        copy.jobStatisticsByType = (copy.jobStatisticsByType || []).map(new JobStatisticsByTypeSerializer().deserialize);

        return new JobsStatistics(copy);
    }

    serialize(entity: JobsStatistics | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobsStatistics, _forceTypeHint?: boolean): any
    serialize(entity: JobsStatistics | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobsStatistics.typeNameHint : undefined,
            queueStatisticsByPriority: entity.queueStatisticsByPriority
                ? entity.queueStatisticsByPriority.map(e => new JobsQueueStatisticsByPrioritySerializer().serialize(e, _forceTypeHint))
                : undefined,
            jobStatisticsByType: entity.jobStatisticsByType
                ? entity.jobStatisticsByType.map(e => new JobStatisticsByTypeSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
