import { Serializer } from "@alf/core/models";
import { RetryAttempt } from "@alf/models/jobs/retry-attempt";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetryAttemptSerializer implements Serializer<RetryAttempt> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetryAttempt
    deserialize(data: any): RetryAttempt | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.scheduledAt !== undefined)
            copy.scheduledAt = new Date(copy.scheduledAt);

        copy.canBeScheduledAtEarliest = new Date(copy.canBeScheduledAtEarliest);

        copy.canBeScheduledAtLatest = new Date(copy.canBeScheduledAtLatest);

        return new RetryAttempt(copy);
    }

    serialize(entity: RetryAttempt | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetryAttempt, _forceTypeHint?: boolean): any
    serialize(entity: RetryAttempt | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetryAttempt.typeNameHint : undefined,
            attemptNumber: entity.attemptNumber,
            hasBeenScheduled: entity.hasBeenScheduled,
            scheduledAt: entity.scheduledAt
                ? entity.scheduledAt.toISOString()
                : undefined,
            canBeScheduledAtEarliest: entity.canBeScheduledAtEarliest
                ? entity.canBeScheduledAtEarliest.toISOString()
                : undefined,
            canBeScheduledAtLatest: entity.canBeScheduledAtLatest
                ? entity.canBeScheduledAtLatest.toISOString()
                : undefined
        };
    }
}
