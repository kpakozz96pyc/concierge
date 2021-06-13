import { Serializer } from "@alf/core/models";
import { JobStatisticsByType } from "@alf/models/jobs/job-statistics-by-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatisticsByTypeSerializer implements Serializer<JobStatisticsByType> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobStatisticsByType
    deserialize(data: any): JobStatisticsByType | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new JobStatisticsByType(copy);
    }

    serialize(entity: JobStatisticsByType | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobStatisticsByType, _forceTypeHint?: boolean): any
    serialize(entity: JobStatisticsByType | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobStatisticsByType.typeNameHint : undefined,
            id: entity.id,
            jobType: entity.jobType,
            queuedCount: entity.queuedCount,
            inProgressCount: entity.inProgressCount,
            failedCount: entity.failedCount,
            completedCount: entity.completedCount,
            totalCount: entity.totalCount,
            totalRunningTime: entity.totalRunningTime,
            minRunningTime: entity.minRunningTime,
            maxRunningTime: entity.maxRunningTime,
            averageRunningTime: entity.averageRunningTime
        };
    }
}
