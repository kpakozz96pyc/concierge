import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { JobStatusInfo } from "@alf/models/jobs/job-status-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusInfoSerializer implements Serializer<JobStatusInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobStatusInfo
    deserialize(data: any): JobStatusInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.timestampUtc = new Date(copy.timestampUtc);

        return new JobStatusInfo(copy);
    }

    serialize(entity: JobStatusInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobStatusInfo, _forceTypeHint?: boolean): any
    serialize(entity: JobStatusInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobStatusInfo.typeNameHint : undefined,
            id: entity.id,
            jobId: entity.jobId,
            status: entity.status,
            timestampUtc: serializeDate(entity.timestampUtc),
            processingTime: entity.processingTime,
            errorMessage: entity.errorMessage
        };
    }
}
