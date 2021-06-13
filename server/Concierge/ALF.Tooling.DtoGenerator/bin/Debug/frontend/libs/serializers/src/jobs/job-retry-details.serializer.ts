import { RetryAttemptSerializer } from "./retry-attempt.serializer";
import { Serializer } from "@alf/core/models";
import { JobRetryDetails } from "@alf/models/jobs/job-retry-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobRetryDetailsSerializer implements Serializer<JobRetryDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobRetryDetails
    deserialize(data: any): JobRetryDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.nextAttemptScheduledAt !== undefined)
            copy.nextAttemptScheduledAt = new Date(copy.nextAttemptScheduledAt);

        copy.remainingRetryAttempts = (copy.remainingRetryAttempts || []).map(new RetryAttemptSerializer().deserialize);

        return new JobRetryDetails(copy);
    }

    serialize(entity: JobRetryDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobRetryDetails, _forceTypeHint?: boolean): any
    serialize(entity: JobRetryDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobRetryDetails.typeNameHint : undefined,
            failedAttempts: entity.failedAttempts,
            remainingAttempts: entity.remainingAttempts,
            nextAttemptScheduledAt: entity.nextAttemptScheduledAt
                ? entity.nextAttemptScheduledAt.toISOString()
                : undefined,
            remainingRetryAttempts: entity.remainingRetryAttempts
                ? entity.remainingRetryAttempts.map(e => new RetryAttemptSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
