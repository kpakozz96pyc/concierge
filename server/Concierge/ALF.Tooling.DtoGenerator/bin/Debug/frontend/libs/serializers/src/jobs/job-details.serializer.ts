import { Priority } from "@alf/models/jobs/enums/priority";
import { JobDisplayStatus } from "@alf/models/jobs/enums/job-display-status";
import { ProcessingStatus } from "@alf/models/jobs/enums/processing-status";
import { OrderType } from "@alf/models/jobs/enums/order-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { JobDetails } from "@alf/models/jobs/job-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobDetailsSerializer implements Serializer<JobDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): JobDetails
    deserialize(data: any): JobDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.priority = Priority[copy.priority];

        copy.status = JobDisplayStatus[copy.status];

        copy.statusTimestampUtc = new Date(copy.statusTimestampUtc);

        copy.queuedTimestampUtc = new Date(copy.queuedTimestampUtc);

        if (copy.throttlerQueuedTimestampUtc !== undefined)
            copy.throttlerQueuedTimestampUtc = new Date(copy.throttlerQueuedTimestampUtc);

        copy.processingStatus = ProcessingStatus[copy.processingStatus];

        copy.postProcessingStatus = ProcessingStatus[copy.postProcessingStatus];

        copy.recoveryStatus = ProcessingStatus[copy.recoveryStatus];

        if (copy.processingFinishedTimestampUtc !== undefined)
            copy.processingFinishedTimestampUtc = new Date(copy.processingFinishedTimestampUtc);

        if (copy.processingStartedTimestampUtc !== undefined)
            copy.processingStartedTimestampUtc = new Date(copy.processingStartedTimestampUtc);

        if (copy.throttlerReceivedTimestampUtc !== undefined)
            copy.throttlerReceivedTimestampUtc = new Date(copy.throttlerReceivedTimestampUtc);

        copy.orderType = OrderType[copy.orderType];

        if (copy.orderedTimestampUtc !== undefined)
            copy.orderedTimestampUtc = new Date(copy.orderedTimestampUtc);

        return new JobDetails(copy);
    }

    serialize(entity: JobDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: JobDetails, _forceTypeHint?: boolean): any
    serialize(entity: JobDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? JobDetails.typeNameHint : undefined,
            id: entity.id,
            jobType: entity.jobType,
            priority: Priority[entity.priority],
            orderedByUsername: entity.orderedByUsername,
            orderedByUserId: entity.orderedByUserId,
            status: JobDisplayStatus[entity.status],
            statusTimestampUtc: serializeDate(entity.statusTimestampUtc),
            queuedTimestampUtc: serializeDate(entity.queuedTimestampUtc),
            isWaitForJob: entity.isWaitForJob,
            exceptionBody: entity.exceptionBody,
            completionCount: entity.completionCount,
            retryAttempt: entity.retryAttempt,
            progress: entity.progress,
            spawnedJobCount: entity.spawnedJobCount,
            parameters: entity.parameters,
            failedJobId: entity.failedJobId,
            throttlerQueuedTimestampUtc: serializeDate(entity.throttlerQueuedTimestampUtc),
            processingStatus: ProcessingStatus[entity.processingStatus],
            postProcessingStatus: ProcessingStatus[entity.postProcessingStatus],
            postProcessingRetryAttempt: entity.postProcessingRetryAttempt,
            recoveryStatus: ProcessingStatus[entity.recoveryStatus],
            recoveryRetryAttempt: entity.recoveryRetryAttempt,
            waitForJobFailed: entity.waitForJobFailed,
            waitForJobCancelled: entity.waitForJobCancelled,
            noProcessingRetry: entity.noProcessingRetry,
            noPostProcessingRetry: entity.noPostProcessingRetry,
            noRecoveryRetry: entity.noRecoveryRetry,
            processingFinishedTimestampUtc: serializeDate(entity.processingFinishedTimestampUtc),
            processingStartedTimestampUtc: serializeDate(entity.processingStartedTimestampUtc),
            throttlerReceivedTimestampUtc: serializeDate(entity.throttlerReceivedTimestampUtc),
            orderType: OrderType[entity.orderType],
            rootJobId: entity.rootJobId,
            parentJobId: entity.parentJobId,
            parentJobIdChain: entity.parentJobIdChain,
            retryingJobId: entity.retryingJobId,
            errorId: entity.errorId,
            orderedTimestampUtc: serializeDate(entity.orderedTimestampUtc),
            isRetryJob: entity.isRetryJob
        };
    }
}
