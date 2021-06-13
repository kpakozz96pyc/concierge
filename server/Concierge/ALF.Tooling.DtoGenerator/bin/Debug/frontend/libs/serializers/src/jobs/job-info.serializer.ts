import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { Serializer } from "@alf/core/models";
import { JobInfo } from "@alf/models/jobs/job-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobInfoSerializer implements Serializer<JobInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobInfo
    deserialize(data: any): JobInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.currentStatus = JobDisplayStatus[copy.currentStatus];

        if (copy.statusTimestamp !== undefined)
            copy.statusTimestamp = new Date(copy.statusTimestamp);

        if (copy.startTimestamp !== undefined)
            copy.startTimestamp = new Date(copy.startTimestamp);

        return new JobInfo(copy);
    }

    serialize(entity: JobInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobInfo, _forceTypeHint?: boolean): any
    serialize(entity: JobInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobInfo.typeNameHint : undefined,
            id: entity.id,
            jobType: entity.jobType,
            currentStatus: JobDisplayStatus[entity.currentStatus],
            statusTimestamp: entity.statusTimestamp
                ? entity.statusTimestamp.toISOString()
                : undefined,
            startTimestamp: entity.startTimestamp
                ? entity.startTimestamp.toISOString()
                : undefined,
            orderedByUsername: entity.orderedByUsername,
            errorId: entity.errorId,
            processedTime: entity.processedTime,
            parameters: entity.parameters
        };
    }
}
