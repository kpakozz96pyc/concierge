import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { JobRetryDetailsSerializer } from "./job-retry-details.serializer";
import { JobStatusEventSerializer } from "./job-status-event.serializer";
import { Serializer } from "@alf/core/models";
import { JobStatusDetails } from "@alf/models/jobs/job-status-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobStatusDetailsSerializer implements Serializer<JobStatusDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobStatusDetails
    deserialize(data: any): JobStatusDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.retryDetails = new JobRetryDetailsSerializer().deserialize(copy.retryDetails);

        copy.currentStatus = JobDisplayStatus[copy.currentStatus];

        copy.statusEvents = (copy.statusEvents || []).map(new JobStatusEventSerializer().deserialize);

        return new JobStatusDetails(copy);
    }

    serialize(entity: JobStatusDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobStatusDetails, _forceTypeHint?: boolean): any
    serialize(entity: JobStatusDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobStatusDetails.typeNameHint : undefined,
            id: entity.id,
            jobId: entity.jobId,
            jobType: entity.jobType,
            jobDescription: entity.jobDescription,
            retryDetails: new JobRetryDetailsSerializer().serialize(entity.retryDetails, _forceTypeHint),
            currentStatus: JobDisplayStatus[entity.currentStatus],
            currentStatusDetails: entity.currentStatusDetails,
            progress: entity.progress,
            statusEvents: entity.statusEvents
                ? entity.statusEvents.map(e => new JobStatusEventSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
